import { Router } from 'express';
import { procesarEntregaObjeto } from '../controllers/reclamosController.js';
import { crearReclamo } from '../controllers/crearReclamoController.js';
import { cambiarEstadoReclamo } from '../controllers/estadoReclamoController.js';
import { usuarioPrueba } from '../middlewares/usuarioPrueba.js';
import { validarReclamo } from '../middlewares/validarReclamo.js';
import { validarEstadoReclamo } from '../middlewares/validarEstadoReclamo.js';

const router = Router();

// Ruta para crear un reclamo (solicitud de devolución)
router.post('/reclamos', validarReclamo, crearReclamo);

// Ruta para aprobar o rechazar un reclamo
router.patch('/reclamos/:id/estado', usuarioPrueba, validarEstadoReclamo, cambiarEstadoReclamo);

// Ruta para procesar la verificación de propiedad y entrega irreversible
router.post('/reclamos/:id/entregar', usuarioPrueba, procesarEntregaObjeto);

export default router;