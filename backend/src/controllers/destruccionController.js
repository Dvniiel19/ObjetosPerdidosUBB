import {
    registrarDestruccionObjeto,
    obtenerObjetosCandidatosDestruccion,
    validarElegibilidadDestruccion,
    listarActasDestruccion,
} from '../services/destruccionService.js';

export async function crearDestruccion(req, res) {
    try {
    const idAdministrador = req.usuario?.id_usuario || parseInt(req.header('x-usuario-id')) || 1;
    const { id_objeto, archivo_url } = req.body;

    const resultado = await registrarDestruccionObjeto(Number(id_objeto), idAdministrador, archivo_url);
    res.status(201).json({
    exito: true,
    mensaje: 'Objeto dado de baja exitosamente',
    datos: resultado,
    });
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
}

export async function listarCandidatos(req, res) {
    try {
    const candidatos = await obtenerObjetosCandidatosDestruccion();
    res.json({ exito: true, datos: candidatos });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
}

export async function consultarElegibilidad(req, res) {
    try {
    const idObjeto = Number(req.params.id);
    const resultado = await validarElegibilidadDestruccion(idObjeto);
    res.json({ exito: true, datos: resultado });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
}

export async function listarActas(req, res) {
    try {
    const actas = await listarActasDestruccion();
    res.json({ exito: true, datos: actas });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
}