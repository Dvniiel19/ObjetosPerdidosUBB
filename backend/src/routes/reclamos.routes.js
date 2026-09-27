import { Router } from 'express';

const router = Router();

// Ruta inicial para el registro de reclamos y verificación
router.post('/:id/reclamo', async (req, res) => {
  try {
    const { id } = req.params;
    const { rutReclamante, metodoAcreditacion } = req.body;

    return res.status(200).json({
      message: 'Solicitud de reclamo registrada correctamente',
      objectId: id,
      rutReclamante,
      metodoAcreditacion,
      status: 'PENDIENTE_VERIFICACION'
    });
  } catch (error) {
    return res.status(500).json({ error: 'Error al procesar el reclamo' });
  }
});

export default router;