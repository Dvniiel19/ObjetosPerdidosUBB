import { Router } from 'express';

import { usuarioPrueba } from '../middlewares/usuarioPrueba.js';
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
  usuarioPrueba,
  validarRegistroObjeto,
  registrarObjeto,
);

export default router;