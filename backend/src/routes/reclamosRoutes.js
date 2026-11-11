import { Router } from 'express';
import { procesarEntregaObjeto, listarReclamosDisponibles } from '../controllers/reclamosController.js';
import { crearReclamo } from '../controllers/crearReclamoController.js';
import { cambiarEstadoReclamo } from '../controllers/estadoReclamoController.js';
import { autenticar, permitirRoles } from '../middlewares/authMiddleware.js';
import { validar } from '../middlewares/validar.js';
import { validarReclamo } from '../middlewares/validarReclamo.js';
import { validarEstadoReclamo } from '../middlewares/validarEstadoReclamo.js';
import { confirmarEntregaSchema, idReclamoParamSchema } from '../schemas/reclamosSchema.js';

const router = Router();

// Lista reclamos disponibles (en revisión o aprobados) del punto del encargado
router.get('/reclamos', autenticar, permitirRoles('encargado'), listarReclamosDisponibles);

// Ruta para crear un reclamo (solicitud de devolución)
router.post('/reclamos', autenticar, permitirRoles('encargado'), validarReclamo, crearReclamo);

// Ruta para aprobar o rechazar un reclamo
router.patch('/reclamos/:id/estado', autenticar, permitirRoles('encargado'), validarEstadoReclamo, cambiarEstadoReclamo);

// Ruta para confirmar entrega (registra verificaciones realizadas presencialmente)
router.post(
  '/reclamos/:id/entregar',
  autenticar,
  permitirRoles('encargado'),
  validar(idReclamoParamSchema, 'params'),
  validar(confirmarEntregaSchema),
  procesarEntregaObjeto,
);

export default router;