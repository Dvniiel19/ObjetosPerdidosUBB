import { Router } from 'express';
import { listarCatalogo } from '../controllers/objetosController.js';

const router = Router();

// Catálogo público de objetos (acepta ?texto= para buscar)
router.get('/objetos', listarCatalogo);

router.get('/algunaRuta', (req, res) => {
  res.json({ estado: 'ok' });
});

export default router;
