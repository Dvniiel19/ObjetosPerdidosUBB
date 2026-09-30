import objetosRoutes from './objetosRoutes.js';
import { Router } from 'express';
import editarObjetoRoutes from './editarObjetoRoutes.js';
import { listarCatalogo } from '../controllers/objetosController.js';
import { validar } from '../middlewares/validar.js';
import { catalogoQuerySchema } from '../schemas/objetosSchema.js';
import { ejecutarRevisionRetencion } from '../services/retencionService.js';
import categoriaRoutes from './categoriaRoutes.js';
import puntoRoutes from './puntoRoutes.js';
import reclamosRoutes from './reclamosRoutes.js';
import destruccionRoutes from './destruccionRoutes.js';

const router = Router();

// // Rutas de objetos
router.get('/objetos', validar(catalogoQuerySchema, 'query'), listarCatalogo);
router.use('/objetos', objetosRoutes);
router.use('/objetos', editarObjetoRoutes);
// // Ruta de categorias
router.use('/categoria', categoriaRoutes);
// Ruta de puntos de acopio
router.use('/puntos', puntoRoutes);
// Ruta de reclamos
router.use(reclamosRoutes);
//Ruta para probar el proceso de retencion
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
      hour12: false 
    });

    // Enviar el resultado
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
// Ruta de destruccion
router.use('/destrucciones', destruccionRoutes);
export default router;
