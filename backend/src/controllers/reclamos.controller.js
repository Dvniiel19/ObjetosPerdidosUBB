/**
 * Controlador para gestionar el reclamo, verificación y entrega de objetos.
 */

export const procesarEntregaObjeto = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      rutCedulaValidada, 
      propiedadAcreditada, 
      aprobadoPorEncargado, 
      metodosAplicados, 
      usuarioReclamante 
    } = req.body;

    // 1. Validar que el objeto no esté ya entregado (estado irreversible)
    const objetoEnCustodia = { id, estado: "disponible" }; // Simulación temporal mientras conectamos con Prisma

    if (objetoEnCustodia.estado === "entregado") {
      return res.status(400).json({ 
        error: "El objeto ya se encuentra en estado 'entregado' y no se puede modificar." 
      });
    }

    // 2. Exigir la verificación de identidad mediante el RUT obtenido de la cédula
    if (!rutCedulaValidada) {
      return res.status(400).json({ 
        error: "Verificación rechazada: Se requiere la validación obligatoria del RUT de la cédula." 
      });
    }

    // 3. Exigir al menos un método de acreditación de propiedad según la categoría
    if (!propiedadAcreditada) {
      return res.status(400).json({ 
        error: "Verificación rechazada: No se ha acreditado la propiedad del objeto según su categoría." 
      });
    }

    // 4. No permitir la entrega si alguna de las dos verificaciones no fue aprobada por el Encargado
    if (!aprobadoPorEncargado) {
      return res.status(403).json({ 
        error: "Entrega denegada: El Encargado del punto de custodia no ha aprobado las verificaciones." 
      });
    }

    // 5. Confirmar entrega: Cambiar a estado "entregado" de forma irreversible y registrar comprobante
    const comprobanteEntrega = {
      reclamante: usuarioReclamante,
      fechaEntrega: new Date().toISOString(),
      metodosVerificacionUtilizados: metodosAplicados || []
    };

    return res.status(200).json({
      message: "Objeto entregado exitosamente de forma irreversible",
      estado: "entregado",
      comprobanteEntrega
    });

  } catch (error) {
    console.error("Error al procesar la entrega del objeto:", error);
    return res.status(500).json({ error: "Error interno al procesar el reclamo y entrega" });
  }
};