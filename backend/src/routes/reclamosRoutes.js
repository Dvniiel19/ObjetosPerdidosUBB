import { Router } from 'express';
import { procesarEntregaObjeto } from '../controllers/reclamosController.js';
import { crearReclamo } from '../controllers/crearReclamoController.js';
import { usuarioPrueba } from '../middlewares/usuarioPrueba.js';
import { validarReclamo } from '../middlewares/validarReclamo.js';

const router = Router();

// Ruta para crear un reclamo (solicitud de devolución)
router.post('/reclamos', validarReclamo, crearReclamo);

// Ruta para procesar la verificación de propiedad y entrega irreversible
router.post('/reclamos/:id/entregar', usuarioPrueba, procesarEntregaObjeto);

export default router;