import {listarCategoria} from '../services/categoriaService.js';

//GET /api/categorias
export async function mostrarCategoria(req, res, next){
    try{
        const categoria = await listarCategoria();
        return res.json(categoria);
    } catch(error){
        return next(error); 
    }
}