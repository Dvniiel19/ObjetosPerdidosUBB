import { Router } from 'express';

import { validarRegistroObjeto } from '../middlewares/validarRegistroObjeto.js';
import { registrarObjeto } from '../controllers/objetosController.js';

const router = Router();

router.post(
  '/',
  validarRegistroObjeto,
  registrarObjeto,
);

export default router;