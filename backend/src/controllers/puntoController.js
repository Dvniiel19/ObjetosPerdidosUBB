import {listarPuntos, crearPunto, asignarEncargado } from '../services/puntoService.js';
//GET /api/puntos
export async function mostrarPuntos(req, res, next){
    try{
        const puntos = await listarPuntos();
        return res.json(puntos);
    } catch(error){
        return next(error);
    }
}

export async function registrarPunto(req, res, next){
    try{
        const punto = await crearPunto(req.body);
        return res.status(201).json(punto);
    } catch (error){
        return next(error);
    }
}

export async function asignarEncargadoPunto(req,res,next){
    try{
        const encargado = await asignarEncargado(req.params.id, req.body.id_usuario);
        return res.json(encargado);
    } catch (error){
        return next(error);
    }
}
