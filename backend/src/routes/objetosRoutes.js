import { Router } from 'express';

import { usuarioPrueba } from '../middlewares/usuarioPrueba.js';
import { validarRegistroObjeto } from '../middlewares/validarRegistroObjeto.js';
import { registrarObjeto } from '../controllers/objetosController.js';

const router = Router();

router.post(
  '/',
  usuarioPrueba,
  validarRegistroObjeto,
  registrarObjeto,
);

export default router;