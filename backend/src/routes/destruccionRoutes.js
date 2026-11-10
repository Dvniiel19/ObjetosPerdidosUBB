import { Router } from 'express';
import {
    crearDestruccion,
    listarCandidatos,
    consultarElegibilidad,
    listarActas,
} from '../controllers/destruccionController.js';
import { validar } from '../middlewares/validar.js';
import { crearDestruccionSchema, idObjetoParamSchema } from '../schemas/destruccionSchema.js';

const router = Router();

router.get('/candidatos', listarCandidatos);

router.get('/elegibilidad/:id', validar(idObjetoParamSchema, 'params'), consultarElegibilidad);

router.get('/', listarActas);

router.post('/', validar(crearDestruccionSchema), crearDestruccion);

export default router;