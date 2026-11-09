import { Router } from 'express';

import { autenticar, permitirRoles } from '../middlewares/authMiddleware.js';
import { subirFotografias } from '../middlewares/subirFotografias.js';
import { validar } from '../middlewares/validar.js';
import { validarRegistroObjeto } from '../middlewares/validarRegistroObjeto.js';
import { catalogoQuerySchema, idObjetoSchema, correccionObjetoSchema } from '../schemas/objetosSchema.js';
import { listarCatalogo, registrarObjeto, verDetalleObjeto, mostrarObjetoParaEditar, guardarObjetoEditado } from '../controllers/objetosController.js';

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

// Registro de objeto (Req 02). Recibe multipart/form-data con las fotografías.
// subirFotografias va después de autenticar: sin sesión no se guarda ningún archivo.
router.post(
  '/',
  autenticar,
  permitirRoles('encargado'),
  subirFotografias,
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
