import prisma from '../config/prisma.js';

export const DIAS_TOTAL_CUSTODIA = 365; 
export const DIAS_ALERTA_PREVIA = 30;  
export const DIAS_PARA_ALERTA = DIAS_TOTAL_CUSTODIA - DIAS_ALERTA_PREVIA; 

/**
 * @param {number} dias 
 * @param {Date} [fechaReferencia=new Date()]
 * @returns {Date}
 */
export function calcularFechaUmbral(dias, fechaReferencia = new Date()) {
  const fecha = new Date(fechaReferencia);
  fecha.setDate(fecha.getDate() - dias);
  return fecha;
}

/**
 * @param {Date} [fechaReferencia=new Date()]
 * @returns {Promise<{ objetosAlertados: number, ids: number[] }>}
 */
export async function procesarAlertasRetencion(fechaReferencia = new Date()) {
  const fechaUmbralAlerta = calcularFechaUmbral(DIAS_PARA_ALERTA, fechaReferencia);

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
 * @param {Date} [fechaReferencia=new Date()]
 * @returns {Promise<{ objetosVencidos: number, ids: number[] }>}
 */
export async function procesarObjetosVencidos(fechaReferencia = new Date()) {
  const fechaUmbralUnAno = calcularFechaUmbral(DIAS_TOTAL_CUSTODIA, fechaReferencia);

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

/**
 * @returns {Promise<{ alertasEnviadas: number, objetosNoReclamados: number, ejecutado_en: Date }>}
 */
export async function ejecutarRevisionRetencion() {
  const ahora = new Date();
  const resultadoVencidos = await procesarObjetosVencidos(ahora);
  const resultadoAlertas = await procesarAlertasRetencion(ahora);

  return {
    alertasEnviadas: resultadoAlertas.objetosAlertados,
    objetosNoReclamados: resultadoVencidos.objetosVencidos,
    ejecutado_en: ahora,
  };
}