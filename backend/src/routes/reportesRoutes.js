import { Router } from 'express';
import { verEstadisticas } from '../controllers/reportesController.js';
import { autenticar, permitirRoles } from '../middlewares/authMiddleware.js';

const router = Router();

// Los reportes son solo para el administrador (Req 05)
router.use(autenticar, permitirRoles('administrador'));

// GET /api/reportes/estadisticas
router.get('/estadisticas', verEstadisticas);

export default router;
