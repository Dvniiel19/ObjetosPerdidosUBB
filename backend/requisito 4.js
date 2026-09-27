/**
 * Requisito 04: Reclamo, verificación de propiedad y entrega
 * Gestiona el proceso completo de devolución y entrega de objetos.
 */
function procesarEntregaObjeto(reqBody, objetoEnCustodia) {
    const { rutCedulaValidado, propiedadAcreditada, aprobadoPorEncargado, metodosAplicados, usuarioReclamante } = reqBody;

    // 1. Validar que el objeto no esté ya entregado (estado irreversible)
    if (objetoEnCustodia.estado === "entregado") {
        throw new Error("El objeto ya se encuentra en estado 'entregado' y no se puede modificar.");
    }

    // 2. Exigir la verificación de identidad mediante el RUT obtenido de la cédula
    if (!rutCedulaValidado) {
        throw new Error("Verificación rechazada: Se requiere la validación obligatoria del RUT de la cédula.");
    }

    // 3. Exigir al menos un método de acreditación de propiedad según la categoría
    if (!propiedadAcreditada) {
        throw new Error("Verificación rechazada: No se ha acreditado la propiedad del objeto según su categoría.");
    }

    // 4. No permitir la entrega si alguna de las dos verificaciones no fue aprobada por el Encargado
    if (!aprobadoPorEncargado) {
        throw new Error("Entrega denegada: El Encargado del punto de custodia no ha aprobado las verificaciones.");
    }

    // 5. Confirmar entrega: Cambiar a estado "entregado" de forma irreversible y registrar datos
    objetoEnCustodia.estado = "entregado";
    objetoEnCustodia.comprobanteEntrega = {
        reclamante: usuarioReclamante,
        fechaEntrega: new Date().toISOString(),
        metodosVerificacionUtilizados: metodosAplicados || []
    };

    return {
        exito: true,
        mensaje: "Objeto entregado exitosamente. Comprobante generado.",
        objeto: objetoEnCustodia
    };
}

module.exports = { procesarEntregaObjeto };