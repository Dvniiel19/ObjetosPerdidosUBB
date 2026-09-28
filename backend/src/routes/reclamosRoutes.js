import { Router } from 'express';
import { procesarEntregaObjeto } from '../controllers/reclamosController.js';

const router = Router();

// Ruta para procesar la verificación de propiedad y entrega irreversible
router.post('/reclamos/:id/entregar', procesarEntregaObjeto);

export default router;