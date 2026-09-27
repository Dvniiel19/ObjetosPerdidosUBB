import { Router } from 'express';
import editarObjetoRoutes from './editarObjetoRoutes.js';
const router = Router();

router.get('/algunaRuta', (req, res) => {
  res.json({ estado: 'ok' });
});

router.use('/objetos', editarObjetoRoutes);

export default router;
