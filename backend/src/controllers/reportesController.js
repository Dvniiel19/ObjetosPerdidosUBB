import { obtenerEstadisticas } from '../services/reportesService.js';

// GET /api/reportes/estadisticas
export async function verEstadisticas(req, res, next) {
    try {
        const estadisticas = await obtenerEstadisticas();
        return res.json({ exito: true, datos: estadisticas });
    } catch (error) {
        return next(error);
    }
}
