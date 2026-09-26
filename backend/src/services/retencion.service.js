import prisma from '../config/prisma.js';

// Constantes de tiempo para el ciclo de vida del objeto
export const DIAS_TOTAL_CUSTODIA = 365; // 1 año legal
export const DIAS_ALERTA_PREVIA = 30;  // 30 días de anticipación
export const DIAS_PARA_ALERTA = DIAS_TOTAL_CUSTODIA - DIAS_ALERTA_PREVIA; // 335 días

/**
 * Calcula la fecha umbral restando una cantidad de días a una fecha de referencia.
 * Permite determinar con precisión cuándo un objeto entra en zona de alerta o vencimiento.
 * 
 * @param {number} dias - Cantidad de días hacia atrás.
 * @param {Date} [fechaReferencia=new Date()] - Fecha base (por defecto hoy).
 * @returns {Date}
 */
export function calcularFechaUmbral(dias, fechaReferencia = new Date()) {
  const fecha = new Date(fechaReferencia);
  fecha.setDate(fecha.getDate() - dias);
  return fecha;
}
/**
 * Identifica los objetos en custodia que han cumplido 335 días (a 30 días del año)
 * y que aún no han recibido alerta preventiva.
 * Actualiza el campo 'alerta_enviada_en' en la base de datos para no duplicar avisos.
 * 
 * @param {Date} [fechaReferencia=new Date()] - Permite simular fechas para pruebas.
 * @returns {Promise<{ objetosAlertados: number, ids: number[] }>}
 */
export async function procesarAlertasRetencion(fechaReferencia = new Date()) {
  const fechaUmbralAlerta = calcularFechaUmbral(DIAS_PARA_ALERTA, fechaReferencia);

  // 1. Buscar candidatos a alerta preventiva (30 días antes de cumplir el año)
  const candidatos = await prisma.objeto.findMany({
    where: {
      estado: 'en_custodia',
      alerta_enviada_en: null,
      registrado_en: {
        lte: fechaUmbralAlerta,
      },
    },
    select: {
      id_objeto: true,
      descripcion: true,
      registrado_en: true,
      punto: {
        select: {
          id_punto: true,
          nombre: true,
        },
      },
    },
  });

  if (candidatos.length === 0) {
    return { objetosAlertados: 0, ids: [] };
  }

  const idsParaAlertar = candidatos.map((obj) => obj.id_objeto);

  // 2. Registrar en la base de datos que la alerta fue emitida
  await prisma.objeto.updateMany({
    where: {
      id_objeto: { in: idsParaAlertar },
    },
    data: {
      alerta_enviada_en: fechaReferencia,
    },
  });

  return {
    objetosAlertados: idsParaAlertar.length,
    ids: idsParaAlertar,
  };
}
/**
 * Identifica los objetos en custodia que han cumplido el año completo (>= 365 días)
 * y realiza el cierre de ciclo transicionando su estado a 'no_reclamado'.
 * Además, retira el objeto del catálogo público (publicado = false).
 * 
 * @param {Date} [fechaReferencia=new Date()] - Permite simular fechas para pruebas.
 * @returns {Promise<{ objetosVencidos: number, ids: number[] }>}
 */
export async function procesarObjetosVencidos(fechaReferencia = new Date()) {
  const fechaUmbralUnAno = calcularFechaUmbral(DIAS_TOTAL_CUSTODIA, fechaReferencia);

  // 1. Buscar objetos que cumplieron el año de custodia
  const objetosVencidos = await prisma.objeto.findMany({
    where: {
      estado: 'en_custodia',
      registrado_en: {
        lte: fechaUmbralUnAno,
      },
    },
    select: {
      id_objeto: true,
    },
  });

  if (objetosVencidos.length === 0) {
    return { objetosVencidos: 0, ids: [] };
  }

  const idsVencidos = objetosVencidos.map((obj) => obj.id_objeto);

  // 2. Transición masiva al estado 'no_reclamado' y ocultamiento del catálogo
  await prisma.objeto.updateMany({
    where: {
      id_objeto: { in: idsVencidos },
    },
    data: {
      estado: 'no_reclamado',
      publicado: false,
    },
  });

  return {
    objetosVencidos: idsVencidos.length,
    ids: idsVencidos,
  };
}