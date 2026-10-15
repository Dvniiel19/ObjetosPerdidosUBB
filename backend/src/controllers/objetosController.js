import {
  listarCatalogo as listarCatalogoService,
  obtenerDetalleObjeto as obtenerDetalleObjetoService,
  registrarObjeto as registrarObjetoService,
} from '../services/objetosService.js';
import {obtenerObjetoParaEditar, editarObjeto} from '../services/editarObjetoService.js';

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

//GET /api/objetos/:id/editar
export async function mostrarObjetoParaEditar(req, res, next){
    try{
        const objeto = await obtenerObjetoParaEditar(req.params.id, req.usuario);
        return res.json(objeto);
    } catch (error){
        return next(error);
    }
}

//PUT /api/objetos/:id/editar
export async function guardarObjetoEditado(req, res, next){
    try{
        const objeto = await editarObjeto(req.params.id, req.body, req.usuario);
        return res.json(objeto);
    } catch (error){
        return next(error);
    }
}
