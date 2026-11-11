import prisma from '../config/prisma.js';

export const DIAS_TOTAL_CUSTODIA = 365;
export const DIAS_ALERTA_PREVIA = 30;
export const DIAS_PARA_ALERTA = DIAS_TOTAL_CUSTODIA - DIAS_ALERTA_PREVIA;

/**
 * Fecha de hace `dias` dias, contando desde la fecha de referencia.
 * @param {number} dias
 * @param {Date} [fechaReferencia=new Date()]
 * @returns {Date}
 */
export function calcularFechaUmbral(dias, fechaReferencia = new Date()) {
  const fecha = new Date(fechaReferencia);
  fecha.setDate(fecha.getDate() - dias);
  return fecha;
}

function sumarDias(fecha, dias) {
  const resultado = new Date(fecha);
  resultado.setDate(resultado.getDate() + dias);
  return resultado;
}

/**
 * Fecha en que el objeto pasara a no_reclamado si nadie lo retira:
 * la mas tardia entre "un año desde el registro" y "30 dias desde el aviso".
 * @param {Date} registradoEn
 * @param {Date} alertaEnviadaEn
 * @returns {Date}
 */
export function calcularFechaVencimiento(registradoEn, alertaEnviadaEn) {
  const unAnio = sumarDias(registradoEn, DIAS_TOTAL_CUSTODIA);
  const finAviso = sumarDias(alertaEnviadaEn, DIAS_ALERTA_PREVIA);
  return unAnio > finAviso ? unAnio : finAviso;
}

const soloFecha = (fecha) => fecha.toISOString().slice(0, 10);

/**
 * Paso 1: aviso preventivo a los objetos que estan a 30 dias (o menos) de cumplir un año.
 * Cada aviso queda en la Bitacora como 'alerta_retencion' (id_usuario null: lo hizo el sistema).
 * @param {Date} [fechaReferencia=new Date()]
 * @returns {Promise<{ objetosAlertados: number, ids: number[] }>}
 */
export async function procesarAlertasRetencion(fechaReferencia = new Date()) {
  const fechaUmbralAlerta = calcularFechaUmbral(DIAS_PARA_ALERTA, fechaReferencia);

  const candidatos = await prisma.objeto.findMany({
    where: {
      estado: 'en_custodia',
      alerta_enviada_en: null,
      registrado_en: { lte: fechaUmbralAlerta },
    },
    select: { id_objeto: true, registrado_en: true },
  });

  const ids = [];

  for (const objeto of candidatos) {
    const vence = calcularFechaVencimiento(objeto.registrado_en, fechaReferencia);

    // Aviso y Bitacora juntos: o quedan los dos o ninguno
    const alertado = await prisma.$transaction(async (tx) => {
      // Se vuelve a exigir en_custodia y sin aviso por si el objeto cambio mientras tanto
      const { count } = await tx.objeto.updateMany({
        where: { id_objeto: objeto.id_objeto, estado: 'en_custodia', alerta_enviada_en: null },
        data: { alerta_enviada_en: fechaReferencia },
      });

      if (count !== 1) {
        return false;
      }

      await tx.bitacora.create({
        data: {
          id_usuario: null,
          accion: 'alerta_retencion',
          recurso: `OBJETO:${objeto.id_objeto}`,
          resultado: 'permitido',
          motivo: `Aviso de retencion: si no se retira, pasara a no_reclamado el ${soloFecha(vence)}`,
        },
      });

      return true;
    });

    if (alertado) {
      ids.push(objeto.id_objeto);
    }
  }

  return { objetosAlertados: ids.length, ids };
}

/**
 * Paso 2: pasa a no_reclamado los objetos que cumplen un año en custodia
 * y que fueron avisados hace al menos 30 dias. Sin aviso previo no se marca.
 * Cada cambio queda en la Bitacora como 'marcar_no_reclamado'.
 * @param {Date} [fechaReferencia=new Date()]
 * @returns {Promise<{ objetosVencidos: number, ids: number[] }>}
 */
export async function procesarObjetosVencidos(fechaReferencia = new Date()) {
  const fechaUmbralUnAnio = calcularFechaUmbral(DIAS_TOTAL_CUSTODIA, fechaReferencia);
  const fechaUmbralAviso = calcularFechaUmbral(DIAS_ALERTA_PREVIA, fechaReferencia);

  const condiciones = {
    estado: 'en_custodia',
    registrado_en: { lte: fechaUmbralUnAnio },
    // lte excluye los null: un objeto sin aviso nunca pasa a no_reclamado
    alerta_enviada_en: { lte: fechaUmbralAviso },
  };

  const vencidos = await prisma.objeto.findMany({
    where: condiciones,
    select: { id_objeto: true, alerta_enviada_en: true },
  });

  const ids = [];

  for (const objeto of vencidos) {
    const marcado = await prisma.$transaction(async (tx) => {
      // Si el objeto fue entregado mientras tanto, no se marca
      const { count } = await tx.objeto.updateMany({
        where: { id_objeto: objeto.id_objeto, ...condiciones },
        data: { estado: 'no_reclamado', publicado: false },
      });

      if (count !== 1) {
        return false;
      }

      await tx.bitacora.create({
        data: {
          id_usuario: null,
          accion: 'marcar_no_reclamado',
          recurso: `OBJETO:${objeto.id_objeto}`,
          resultado: 'permitido',
          motivo: `Cumplio un año en custodia sin ser retirado. Aviso enviado el ${soloFecha(objeto.alerta_enviada_en)}`,
        },
      });

      return true;
    });

    if (marcado) {
      ids.push(objeto.id_objeto);
    }
  }

  return { objetosVencidos: ids.length, ids };
}

/**
 * GET /api/retencion/alertas: objetos avisados que siguen en custodia, del que vence primero al ultimo.
 * @param {number|null} idPunto - punto del encargado; null para ver todos los puntos (administrador)
 * @param {Date} [fechaReferencia=new Date()]
 */
export async function listarAlertasRetencion(idPunto, fechaReferencia = new Date()) {
  const objetos = await prisma.objeto.findMany({
    where: {
      estado: 'en_custodia',
      alerta_enviada_en: { not: null },
      ...(idPunto ? { id_punto: idPunto } : {}),
    },
    select: {
      id_objeto: true,
      descripcion: true,
      registrado_en: true,
      alerta_enviada_en: true,
      categoria: { select: { nombre: true } },
      punto: { select: { id_punto: true, nombre: true } },
    },
  });

  const UN_DIA_MS = 24 * 60 * 60 * 1000;

  const alertas = objetos.map((obj) => {
    const venceEl = calcularFechaVencimiento(obj.registrado_en, obj.alerta_enviada_en);
    const diasRestantes = Math.max(0, Math.ceil((venceEl - fechaReferencia) / UN_DIA_MS));

    return {
      id_objeto: obj.id_objeto,
      descripcion: obj.descripcion,
      categoria: obj.categoria.nombre,
      id_punto: obj.punto.id_punto,
      punto_acopio: obj.punto.nombre,
      registrado_en: obj.registrado_en,
      alerta_enviada_en: obj.alerta_enviada_en,
      vence_el: venceEl,
      dias_restantes: diasRestantes,
    };
  });

  return alertas.sort((a, b) => a.vence_el - b.vence_el);
}

/**
 * Revision diaria que ejecuta el cron: primero avisa y despues marca los vencidos.
 * @param {Date} [fechaReferencia=new Date()]
 * @returns {Promise<{ alertasEnviadas: number, objetosNoReclamados: number, ejecutado_en: Date }>}
 */
export async function ejecutarRevisionRetencion(fechaReferencia = new Date()) {
  const resultadoAlertas = await procesarAlertasRetencion(fechaReferencia);
  const resultadoVencidos = await procesarObjetosVencidos(fechaReferencia);

  return {
    alertasEnviadas: resultadoAlertas.objetosAlertados,
    objetosNoReclamados: resultadoVencidos.objetosVencidos,
    ejecutado_en: fechaReferencia,
  };
}
