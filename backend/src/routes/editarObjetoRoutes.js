import {Router} from 'express';
import {autenticar, permitirRoles} from '../middlewares/authMiddleware.js';
import {validar} from '../middlewares/validar.js';
import { idObjetoSchema, correccionObjetoSchema } from '../schemas/objetosSchema.js';
import {mostrarObjetoParaEditar, guardarObjetoEditado} from '../controllers/editarObjetoController.js';

const router = Router();

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
