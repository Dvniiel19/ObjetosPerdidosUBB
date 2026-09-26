import { Router } from 'express';

const router = Router();

router.get('/algunaRuta', (req, res) => {
  res.json({ estado: 'ok' });
});

export default router;
