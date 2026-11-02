import {listarPuntos, crearPunto, asignarEncargado, desactivarPunto, listarEncargados, obtenerTodosLosPuntos } from '../services/puntoService.js';

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

export async function desactivarPuntoAcopio(req,res,next){
    try{
        const punto = await desactivarPunto(req.params.id);
        return res.json(punto);
    } catch (error){
        return next(error);
    }
}

// GET /api/puntos/todos
export async function mostrarTodosLosPuntos(req, res, next){
    try{
        const puntos= await obtenerTodosLosPuntos();
        return res.json(puntos);
    } catch(error){
        return next(error);
    }
}

// GET /api/puntos/encargados
export async function mostrarEncargados(req, res, next){
    try{
        const encargados= await listarEncargados();
        return res.json(encargados);
    } catch(error){
        return next(error);
    }
}
