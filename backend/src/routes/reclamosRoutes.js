import { Router } from 'express';
import { procesarEntregaObjeto } from '../controllers/reclamosController.js';
import { crearReclamo } from '../controllers/crearReclamoController.js';
import { cambiarEstadoReclamo } from '../controllers/estadoReclamoController.js';
import { autenticar, permitirRoles } from '../middlewares/authMiddleware.js';
import { validar } from '../middlewares/validar.js';
import { crearReclamoSchema, idReclamoSchema } from '../schemas/reclamosSchema.js';
import { estadoReclamoSchema } from '../schemas/estadoReclamoSchema.js';

const router = Router();

// Ruta para crear un reclamo (solicitud de devolución)
router.post(
  '/reclamos',
  autenticar,
  validar(crearReclamoSchema),
  crearReclamo,
);

// Ruta para aprobar o rechazar un reclamo
router.patch(
  '/reclamos/:id/estado',
  autenticar,
  permitirRoles('encargado'),
  validar(idReclamoSchema, 'params'),
  validar(estadoReclamoSchema),
  cambiarEstadoReclamo,
);

// Ruta para procesar la verificación de propiedad y entrega irreversible
router.post(
  '/reclamos/:id/entregar',
  autenticar,
  permitirRoles('encargado'),
  validar(idReclamoSchema, 'params'),
  procesarEntregaObjeto,
);

export default router;