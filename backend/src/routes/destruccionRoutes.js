import { Router } from 'express';
import {
    crearDestruccion,
    listarCandidatos,
    consultarElegibilidad,
    listarActas,
} from '../controllers/destruccionController.js';
import { autenticar, permitirRoles } from '../middlewares/authMiddleware.js';
import { validar } from '../middlewares/validar.js';
import { crearDestruccionSchema, idObjetoParamSchema } from '../schemas/destruccionSchema.js';

const router = Router();

// Todas las rutas de destruccion son solo para el administrador (Req 05).
// Sin token responde 401 y con otro rol responde 403.
router.use(autenticar, permitirRoles('administrador'));

// GET /api/destrucciones/candidatos
router.get('/candidatos', listarCandidatos);

// GET /api/destrucciones/elegibilidad/:id
router.get('/elegibilidad/:id', validar(idObjetoParamSchema, 'params'), consultarElegibilidad);

// GET /api/destrucciones (actas registradas)
router.get('/', listarActas);

// POST /api/destrucciones (dar de baja un objeto)
router.post('/', validar(crearDestruccionSchema), crearDestruccion);

export default router;
