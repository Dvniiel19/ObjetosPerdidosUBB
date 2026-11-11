import { cambiarEstadoReclamoService } from '../services/estadoReclamoService.js';

/**
 * Controlador para gestionar el cambio de estado de un reclamo.
 */
export const cambiarEstadoReclamo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const resultado = await cambiarEstadoReclamoService(id, req.datosEstado, req.usuario);

    return res.status(200).json(resultado);
  } catch (error) {
    console.error("Error al cambiar el estado del reclamo:", error);

    if (error.message.includes("Solo un Encargado") || error.message.includes("no pertenece")) {
      return res.status(403).json({ error: error.message });
    }

    if (error.message.includes("no existe") || error.message.includes("no puede ser modificado")) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(500).json({ error: "Error interno al cambiar el estado del reclamo" });
  }
};
