import { Router } from 'express';
import { procesarEntregaObjeto } from '../controllers/reclamos.controller.js';

const router = Router();

// Ruta para procesar la verificación de propiedad y entrega irreversible
router.post('/:id/entregar', procesarEntregaObjeto);

export default router;