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
router.use('/categoria', categoriaRoutes);
// ENDPOINT DEMO: Fuerza el proceso de retencion
router.post('/testing/forzar-retencion', async (req, res) => {
  try {
    const resultado = await ejecutarRevisionRetencion();
    res.json({ exito: true, resumen: resultado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default router;
