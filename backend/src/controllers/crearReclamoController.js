import { crearReclamoService } from '../services/crearReclamoService.js';

/**
 * Controlador para gestionar la creación de reclamos (solicitud de devolución).
 */
export const crearReclamo = async (req, res, next) => {
  try {
    const resultado = await crearReclamoService(req.datosReclamo);

    return res.status(201).json(resultado);
  } catch (error) {
    console.error("Error al crear el reclamo:", error);

    if (error.message.includes("no existe") || error.message.includes("no está disponible") || error.message.includes("No hay un encargado")) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(500).json({ error: "Error interno al crear el reclamo" });
  }
};
