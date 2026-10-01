import {
  listarCatalogo as listarCatalogoService,
  registrarObjeto as registrarObjetoService,
} from '../services/objetosService.js';

export async function registrarObjeto(req, res, next) {
  try {
       const objeto = await registrarObjetoService(
      req.datosObjeto,
      req.usuario,
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
    // req.query ya viene validado por catalogoQuerySchema
    const { texto, categoria, punto, lugar, fecha_desde, fecha_hasta } = req.query;

    const objetos = await listarCatalogoService({
      texto,
      categoria,
      punto,
      fechaDesde: fecha_desde,
      fechaHasta: fecha_hasta,
      lugar,
    });

    return res.json({
      total: objetos.length,
      objetos,
    });
  } catch (error) {
    return next(error);
  }
}