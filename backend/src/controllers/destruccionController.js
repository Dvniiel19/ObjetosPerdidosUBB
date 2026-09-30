
import { registrarDestruccionObjeto } from '../services/destruccionService.js';
export async function crearDestruccion(req, res) {
    try {
    // Obtener el id del administrador, usando 1 por defecto
    const idAdministrador = parseInt(req.header('x-usuario-id')) || 1;
    const { id_objeto, archivo_url } = req.body;
    if (!id_objeto || !archivo_url) {
    return res.status(400).json({ error: 'Faltan datos requeridos (id_objeto, archivo_url)' });
    }
    const resultado = await registrarDestruccionObjeto(Number(id_objeto), idAdministrador, archivo_url);
    res.status(201).json({ exito: true, mensaje: 'Objeto dado de baja exitosamente', datos: resultado });
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
}