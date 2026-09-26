import { ejecutarRevisionRetencion } from '../services/retencion.service.js';
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