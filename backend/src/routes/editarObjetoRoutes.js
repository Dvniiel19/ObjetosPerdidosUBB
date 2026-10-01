import {Router} from 'express';
import {usuarioPrueba} from '../middlewares/usuarioPrueba.js';
import {validar} from '../middlewares/validar.js';
import { idObjetoSchema, correccionObjetoSchema } from '../schemas/objetosSchema.js';
import {mostrarObjetoParaEditar, guardarObjetoEditado} from '../controllers/editarObjetoController.js';

const router = Router();

//GET /api/objetos/:id/editar

router.get(
    '/:id/editar',
    usuarioPrueba,
    validar(idObjetoSchema, 'params'),
    mostrarObjetoParaEditar,
);

// PUT /api/objetos/:id/editar

router.put(
    '/:id',
    usuarioPrueba,
    validar(idObjetoSchema, 'params'),
    validar(correccionObjetoSchema),
    guardarObjetoEditado,
);

export default router;

