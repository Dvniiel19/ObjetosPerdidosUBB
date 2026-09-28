import {obtenerObjetoParaEditar, editarObjeto} from '../services/editarObjetoService.js';

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