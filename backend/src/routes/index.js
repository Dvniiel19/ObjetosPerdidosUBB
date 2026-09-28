import objetosRoutes from './objetosRoutes.js';
import { Router } from 'express';
import editarObjetoRoutes from './editarObjetoRoutes.js';
import { listarCatalogo } from '../controllers/objetosController.js';
import { ejecutarRevisionRetencion } from '../services/retencionService.js';
import categoriaRoutes from './categoriaRoutes.js';

const router = Router();

// Catálogo público de objetos (acepta ?texto= para buscar)
router.get('/objetos', listarCatalogo);


router.use('/objetos', objetosRoutes);
router.use('/objetos', editarObjetoRoutes);
// ENDPOINT PARA DEMO: Fuerza el proceso de retención
router.use('/categoria', categoriaRoutes);
// ENDPOINT DEMO: Fuerza el proceso de retencion
router.post('/testing/forzar-retencion', async (req, res) => {
  try {
    const resultado = await ejecutarRevisionRetencion();

    // fecha estilo local(DD-MM-YYYY HH:mm:ss)
    const fechaFormateada = resultado.ejecutado_en.toLocaleString('es-CL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false // Usar formato de 24 horas
    });

    // Sobrescribimos el formato antes de mandarlo en el JSON
    res.json({
      exito: true,
      resumen: {
        alertasEnviadas: resultado.alertasEnviadas,
        objetosNoReclamados: resultado.objetosNoReclamados,
        ejecutado_en: fechaFormateada
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default router;
