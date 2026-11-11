import { Router } from 'express';
import objetosRoutes from './objetosRoutes.js';
import categoriaRoutes from './categoriaRoutes.js';
import puntoRoutes from './puntoRoutes.js';
import reclamosRoutes from './reclamosRoutes.js';
import destruccionRoutes from './destruccionRoutes.js';
import authRoutes from './authRoutes.js';
import retencionRoutes from './retencionRoutes.js';
import historialRoutes from './historialRoutes.js';
import reportesRoutes from './reportesRoutes.js';
import inventarioRoutes from './inventarioRoutes.js';

const router = Router();

// Rutas institucionales del sistema
router.use('/auth', authRoutes);
router.use('/objetos', objetosRoutes);
router.use('/categoria', categoriaRoutes);
router.use('/puntos', puntoRoutes);
router.use(reclamosRoutes);
router.use('/destrucciones', destruccionRoutes);
router.use('/retencion', retencionRoutes);
router.use('/historial', historialRoutes);
router.use('/reportes', reportesRoutes);
router.use('/inventario', inventarioRoutes);

export default router;