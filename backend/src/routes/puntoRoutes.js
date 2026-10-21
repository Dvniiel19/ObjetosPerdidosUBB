import { Router } from 'express';
import { mostrarPuntos, registrarPunto, asignarEncargadoPunto } from '../controllers/puntoController.js';
import { autenticar, permitirRoles } from '../middlewares/authMiddleware.js';
import { validar } from '../middlewares/validar.js';
import { crearPuntoSchema, asignarEncargadoSchema, idPuntoSchema } from '../schemas/puntoSchema.js';

const router = Router();

// GET /api/puntos (publico, de Mati)
router.get('/', mostrarPuntos);

// POST /api/puntos (solo administrador)
router.post(
  '/',
  autenticar,
  permitirRoles('administrador'),
  validar(crearPuntoSchema),
  registrarPunto,
);

// PATCH /api/puntos/:id/encargados (solo administrador)
router.patch(
  '/:id/encargados',
  autenticar,
  permitirRoles('administrador'),
  validar(idPuntoSchema, 'params'),
  validar(asignarEncargadoSchema),
  asignarEncargadoPunto,
);

export default router;
