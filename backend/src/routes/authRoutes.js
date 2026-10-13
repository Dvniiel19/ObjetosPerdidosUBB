import { Router } from 'express';
import { validar } from '../middlewares/validar.js';
import { loginSchema } from '../schemas/authSchemas.js';
import { login } from '../controllers/authController.js';

const router = Router();

// POST /api/auth/login
router.post('/login', validar(loginSchema), login);

export default router;
