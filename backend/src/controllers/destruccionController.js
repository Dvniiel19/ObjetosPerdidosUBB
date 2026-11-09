import {
    registrarDestruccionObjeto,
    obtenerObjetosCandidatosDestruccion,
    validarElegibilidadDestruccion,
    listarActasDestruccion,
} from '../services/destruccionService.js';

// POST /api/destrucciones
export async function crearDestruccion(req, res, next) {
    try {
        // El responsable siempre es el administrador de la sesion (viene del token)
        const idAdministrador = req.usuario.id_usuario;
        const { id_objeto, archivo_url } = req.body;

        const resultado = await registrarDestruccionObjeto(id_objeto, idAdministrador, archivo_url);
        return res.status(201).json({
            exito: true,
            mensaje: 'Objeto dado de baja exitosamente',
            datos: resultado,
        });
    } catch (error) {
        return next(error);
    }
}

// GET /api/destrucciones/candidatos
export async function listarCandidatos(req, res, next) {
    try {
        const candidatos = await obtenerObjetosCandidatosDestruccion();
        return res.json({ exito: true, datos: candidatos });
    } catch (error) {
        return next(error);
    }
}

// GET /api/destrucciones/elegibilidad/:id
export async function consultarElegibilidad(req, res, next) {
    try {
        const resultado = await validarElegibilidadDestruccion(req.params.id);
        return res.json({ exito: true, datos: resultado });
    } catch (error) {
        return next(error);
    }
}

// GET /api/destrucciones
export async function listarActas(req, res, next) {
    try {
        const actas = await listarActasDestruccion();
        return res.json({ exito: true, datos: actas });
    } catch (error) {
        return next(error);
    }
}
