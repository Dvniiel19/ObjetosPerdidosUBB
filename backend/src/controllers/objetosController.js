import {
  registrarObjeto as registrarObjetoService,
} from '../services/objetosService.js';

export async function registrarObjeto(req, res, next) {
  try {
    const objeto = await registrarObjetoService(
      req.datosObjeto,
      req.user,
    );

    return res.status(201).json({
      mensaje: 'Objeto registrado correctamente',
      objeto,
    });
  } catch (error) {
    return next(error);
  }
}