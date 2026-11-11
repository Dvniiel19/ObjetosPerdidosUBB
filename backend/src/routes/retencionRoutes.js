import { Router } from 'express';
import { verAlertasRetencion } from '../controllers/retencionController.js';
import { autenticar, permitirRoles } from '../middlewares/authMiddleware.js';

const router = Router();

// GET /api/retencion/alertas (Req 05: avisos de objetos por vencer)
// Encargado: objetos de su punto. Administrador: todos.
router.get('/alertas', autenticar, permitirRoles('encargado', 'administrador'), verAlertasRetencion);

export default router;
