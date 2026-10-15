import { Router } from 'express';

import { autenticar, permitirRoles } from '../middlewares/authMiddleware.js';
import { usuarioPrueba } from '../middlewares/usuarioPrueba.js';
import { validar } from '../middlewares/validar.js';
import { validarRegistroObjeto } from '../middlewares/validarRegistroObjeto.js';
import { catalogoQuerySchema, idObjetoSchema, correccionObjetoSchema } from '../schemas/objetosSchema.js';
import { listarCatalogo, registrarObjeto, mostrarObjetoParaEditar, guardarObjetoEditado } from '../controllers/objetosController.js';

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
//GET /api/objetos/:id/editar

router.get(
    '/:id/editar',
    autenticar,
    permitirRoles('encargado'),
    validar(idObjetoSchema, 'params'),
    mostrarObjetoParaEditar,
);

// PUT /api/objetos/:id

router.put(
    '/:id',
    autenticar,
    permitirRoles('encargado'),
    validar(idObjetoSchema, 'params'),
    validar(correccionObjetoSchema),
    guardarObjetoEditado,
);

export default router;
