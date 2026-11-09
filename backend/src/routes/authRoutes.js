import { Router } from 'express';
import { validar } from '../middlewares/validar.js';
import { autenticar } from '../middlewares/authMiddleware.js';
import { loginSchema } from '../schemas/authSchemas.js';
import { login, usuarioActual } from '../controllers/authController.js';

const router = Router();

// POST /api/auth/login
router.post('/login', validar(loginSchema), login);

// GET /api/auth/yo
router.get('/yo', autenticar, usuarioActual);

export default router;
