import objetosRoutes from './objetosRoutes.js';
import { Router } from 'express';
import { ejecutarRevisionRetencion } from '../services/retencionService.js';
import categoriaRoutes from './categoriaRoutes.js';
import puntoRoutes from './puntoRoutes.js';
import reclamosRoutes from './reclamosRoutes.js';
import destruccionRoutes from './destruccionRoutes.js';
import authRoutes from './authRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/objetos', objetosRoutes);
router.use('/categoria', categoriaRoutes);
router.use('/puntos', puntoRoutes);
router.use(reclamosRoutes);
router.post('/testing/forzar-retencion', async (req, res) => {
  try {
    const resultado = await ejecutarRevisionRetencion();
    const fechaFormateada = resultado.ejecutado_en.toLocaleString('es-CL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false 
    });
    res.json({
      exito: true,
      resumen: {
        alertasEnviadas: resultado.alertasEnviadas,
        objetosNoReclamados: resultado.objetosNoReclamados,
        ejecutado_en: fechaFormateada
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.use('/destrucciones', destruccionRoutes);
export default router;
