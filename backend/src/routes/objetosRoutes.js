import { Router } from 'express';

import { usuarioPrueba } from '../middlewares/usuarioPrueba.js';
import { validar } from '../middlewares/validar.js';
import { validarRegistroObjeto } from '../middlewares/validarRegistroObjeto.js';
import { catalogoQuerySchema, idObjetoSchema } from '../schemas/objetosSchema.js';
import { listarCatalogo, registrarObjeto, verDetalleObjeto } from '../controllers/objetosController.js';

const router = Router();

// Catálogo público: búsqueda por texto y filtros combinados
router.get(
  '/',
  validar(catalogoQuerySchema, 'query'),
  listarCatalogo,
);

// Detalle público de un objeto del catálogo
router.get(
  '/:id',
  validar(idObjetoSchema, 'params'),
  verDetalleObjeto,
);

router.post(
  '/',
  usuarioPrueba,
  validarRegistroObjeto,
  registrarObjeto,
);

export default router;