import { Router } from 'express';
import { crearDestruccion } from '../controllers/destruccionController.js';
const router = Router();
router.post('/', crearDestruccion);
export default router;