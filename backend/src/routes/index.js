import { Router } from 'express';
import objetosRoutes from './objetosRoutes.js';
import categoriaRoutes from './categoriaRoutes.js';
import puntoRoutes from './puntoRoutes.js';
import reclamosRoutes from './reclamosRoutes.js';
import destruccionRoutes from './destruccionRoutes.js';
import authRoutes from './authRoutes.js';

const router = Router();

// Rutas institucionales del sistema
router.use('/auth', authRoutes);
router.use('/objetos', objetosRoutes);
router.use('/categoria', categoriaRoutes);
router.use('/puntos', puntoRoutes);
router.use(reclamosRoutes);
router.use('/destrucciones', destruccionRoutes);

export default router;