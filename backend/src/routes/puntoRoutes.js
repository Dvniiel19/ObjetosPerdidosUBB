import {Router} from 'express';
import {mostrarPuntos} from '../controllers/puntoController.js';

const router = Router();

router.get('/', mostrarPuntos);

export default router;
