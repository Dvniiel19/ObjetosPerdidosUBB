import { Router } from 'express';
import { mostrarPuntos, registrarPunto, asignarEncargadoPunto, desactivarPuntoAcopio, mostrarEncargados, mostrarTodosLosPuntos } from '../controllers/puntoController.js';
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

// PATCH /api/puntos/:id/desactivar, solo admin
router.patch('/:id/desactivar', autenticar, permitirRoles('administrador'), validar(idPuntoSchema, 'params'), desactivarPuntoAcopio,
);

// GET /api/puntos/todos (solo administrador)
router.get('/todos', autenticar, permitirRoles('administrador'), mostrarTodosLosPuntos);

// GET /api/puntos/encargados (solo administrador)
router.get('/encargados', autenticar, permitirRoles('administrador'), mostrarEncargados);
export default router;
