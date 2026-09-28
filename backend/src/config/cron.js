import { ejecutarRevisionRetencion } from '../services/retencionService.js';
export async function tareaRevisionRetencion() {
  console.log('[CRON] Iniciando revisión automática del ciclo de retención...');
  
  try {
    const resumen = await ejecutarRevisionRetencion();
    
    console.log(
      `[CRON] Revisión completada con éxito: ${resumen.alertasEnviadas} alertas emitidas, ` +
      `${resumen.objetosNoReclamados} objetos transicionados a 'no_reclamado'.`
    );
  } catch (error) {
    console.error('[CRON Error] Falló la ejecución periódica de retención:', error.message);
  }
}

export const INTERVALO_DIARIO_MS = 24 * 60 * 60 * 1000;

// Referencia en memoria para el timer activo
let timerRetencion = null;

/**
 * @param {number} [intervaloMs=INTERVALO_DIARIO_MS] 
 * @param {boolean} [ejecutarAlInicio=true] 
 */
export function iniciarCronRetencion(intervaloMs = INTERVALO_DIARIO_MS, ejecutarAlInicio = true) {
  if (timerRetencion) {
    console.warn('[CRON] El programador de retencion ya esta activo. Se omite nuevo arranque.');
    return;
  }
  if (ejecutarAlInicio) {
    tareaRevisionRetencion();
  }

  timerRetencion = setInterval(tareaRevisionRetencion, intervaloMs);
  console.log(`[CRON] Scheduler de retencion activo (frecuencia: cada ${intervaloMs / 1000}s).`);
}

export function detenerCronRetencion() {
  if (timerRetencion) {
    clearInterval(timerRetencion);
    timerRetencion = null;
    console.log('[CRON] Scheduler de retencion detenido con exito.');
  }
}