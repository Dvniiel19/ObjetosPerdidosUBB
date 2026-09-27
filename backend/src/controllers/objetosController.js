import {
  listarCatalogo as listarCatalogoService,
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

export async function listarCatalogo(req, res, next) {
  try {
    // ?texto= en la URL es opcional; si viene repetido o vacío se ignora
    const texto = typeof req.query.texto === 'string' ? req.query.texto : undefined;

    const objetos = await listarCatalogoService({ texto });

    return res.json({
      total: objetos.length,
      objetos,
    });
  } catch (error) {
    return next(error);
  }
}