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
    const texto = typeof req.query.texto === 'string' ? req.query.texto : undefined;
    const lugar = typeof req.query.lugar === 'string' ? req.query.lugar : undefined;
    const categoria = req.query.categoria ? Number(req.query.categoria) : undefined;
    const punto = req.query.punto ? Number(req.query.punto) : undefined;
    const fechaDesde = typeof req.query.fecha_desde === 'string' ? req.query.fecha_desde : undefined;
    const fechaHasta = typeof req.query.fecha_hasta === 'string' ? req.query.fecha_hasta : undefined;

    const objetos = await listarCatalogoService({
      texto,
      categoria,
      punto,
      fechaDesde,
      fechaHasta,
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