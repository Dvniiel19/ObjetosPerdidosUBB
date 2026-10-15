import { Router } from 'express';

import { autenticar, permitirRoles } from '../middlewares/authMiddleware.js';
import { validar } from '../middlewares/validar.js';
import { validarRegistroObjeto } from '../middlewares/validarRegistroObjeto.js';
import { catalogoQuerySchema } from '../schemas/objetosSchema.js';
import { listarCatalogo, registrarObjeto } from '../controllers/objetosController.js';

const router = Router();

// Catálogo público: búsqueda por texto y filtros combinados
router.get(
  '/',
  validar(catalogoQuerySchema, 'query'),
  listarCatalogo,
);

router.post(
  '/',
  autenticar,
  permitirRoles('encargado'),
  validarRegistroObjeto,
  registrarObjeto,
);

export default router;
