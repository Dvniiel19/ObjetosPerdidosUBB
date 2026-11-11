import { obtenerHistorialObjeto } from '../services/historialService.js';

// GET /api/historial/objetos/:id
export async function verHistorialObjeto(req, res, next) {
    try {
        const historial = await obtenerHistorialObjeto(req.params.id);
        return res.json({ exito: true, datos: historial });
    } catch (error) {
        return next(error);
    }
}
