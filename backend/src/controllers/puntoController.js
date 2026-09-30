import {listarPuntos} from '../services/puntoService.js';

//GET /api/puntos
export async function mostrarPuntos(req, res, next){
    try{
        const puntos = await listarPuntos();
        return res.json(puntos);
    } catch(error){
        return next(error);
    }
}
