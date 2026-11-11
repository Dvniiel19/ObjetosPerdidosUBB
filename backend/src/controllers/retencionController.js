import { listarAlertasRetencion } from '../services/retencionService.js';
import { errorConCodigo } from '../utils/errorConCodigo.js';

// GET /api/retencion/alertas
// El encargado ve solo su punto de acopio; el administrador ve todos.
export async function verAlertasRetencion(req, res, next) {
    try {
        const { rol, id_punto } = req.usuario;

        if (rol === 'encargado' && !id_punto) {
            throw errorConCodigo('No tienes un punto de acopio asignado', 403);
        }

        const idPunto = rol === 'encargado' ? id_punto : null;
        const alertas = await listarAlertasRetencion(idPunto);

        return res.json({ exito: true, datos: alertas });
    } catch (error) {
        return next(error);
    }
}
