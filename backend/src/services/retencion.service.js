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