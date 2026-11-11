import { Router } from 'express';
import { autenticar, permitirRoles } from '../middlewares/authMiddleware.js';
import { validar } from '../middlewares/validar.js';
import { inventarioQuerySchema } from '../schemas/inventarioSchema.js';
import { mostrarInventario } from '../controllers/inventarioController.js';

const router = Router();

// GET /api/inventario?texto=&estado= (solo encargado, objetos de su punto)
router.get(
  '/',
  autenticar,
  permitirRoles('encargado'),
  validar(inventarioQuerySchema, 'query'),
  mostrarInventario,
);

export default router;