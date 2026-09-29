import { Router } from 'express';
import { procesarEntregaObjeto } from '../controllers/reclamosController.js';
import { usuarioPrueba } from '../middlewares/usuarioPrueba.js';

const router = Router();

// Ruta para procesar la verificación de propiedad y entrega irreversible
router.post('/reclamos/:id/entregar', usuarioPrueba, procesarEntregaObjeto);

export default router;