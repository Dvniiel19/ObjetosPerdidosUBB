import { Router } from 'express';
import { verHistorialObjeto } from '../controllers/historialController.js';
import { autenticar, permitirRoles } from '../middlewares/authMiddleware.js';
import { validar } from '../middlewares/validar.js';
import { idObjetoHistorialSchema } from '../schemas/historialSchema.js';

const router = Router();

// El historial es de acceso exclusivo del administrador (Req 05)
router.use(autenticar, permitirRoles('administrador'));

// GET /api/historial/objetos/:id
router.get('/objetos/:id', validar(idObjetoHistorialSchema, 'params'), verHistorialObjeto);

export default router;
