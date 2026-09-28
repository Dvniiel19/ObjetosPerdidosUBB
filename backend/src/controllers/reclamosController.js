import { procesarEntregaService } from '../services/reclamosService.js';

/**
 * Controlador para gestionar la recepción y respuesta HTTP del reclamo y entrega de objetos.
 */
export const procesarEntregaObjeto = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Llamamos a la capa de servicios para procesar la lógica de negocio (mock data)
    const resultado = await procesarEntregaService(id, req.body);
    
    return res.status(200).json(resultado);
  } catch (error) {
    console.error("Error al procesar la entrega del objeto:", error);
    
    // Manejo de errores personalizados lanzados desde el servicio
    if (error.message.includes("rechazada") || error.message.includes("ya se encuentra")) {
      return res.status(400).json({ error: error.message });
    }
    if (error.message.includes("denegada")) {
      return res.status(403).json({ error: error.message });
    }

    return res.status(500).json({ error: "Error interno al procesar el reclamo y entrega" });
  }
};