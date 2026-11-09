import prisma from '../config/prisma.js';

/**
 * Servicio para gestionar la lógica de negocio de devoluciones y entregas.
 * Conectado a la base de datos mediante Prisma.
 */
export const procesarEntregaService = async (id, datosEntrega, usuario) => {
  const { rutCedulaValidada, propiedadAcreditada, metodosAplicados } = datosEntrega;

  // Autorización por perfil (defensa en profundidad; la ruta ya exige encargado autenticado)
  if (usuario?.rol !== 'encargado') {
    throw new Error("Entrega denegada: Solo un Encargado del punto de custodia puede confirmar la entrega.");
  }

  // Resultados registrados en el sistema de verificaciones realizadas presencialmente
  if (!rutCedulaValidada) {
    throw new Error("Verificación rechazada: Se requiere registrar la validación del RUT de la cédula como aprobada.");
  }

  if (!propiedadAcreditada) {
    throw new Error("Verificación rechazada: Se requiere registrar la acreditación de propiedad como aprobada.");
  }

  // Buscar el reclamo real en la BD
  const reclamo = await prisma.reclamo.findUnique({
    where: { id_reclamo: Number(id) },
    include: {
      objeto: {
        include: {
          categoria: true,
        },
      },
      encargado: true,
    },
  });

  if (!reclamo) {
    throw new Error("El reclamo solicitado no existe.");
  }

  // Verificar que el encargado pertenezca al punto donde está el objeto
  if (usuario.id_punto !== reclamo.objeto.id_punto) {
    throw new Error("Entrega denegada: El Encargado no pertenece al punto de custodia donde se encuentra el objeto.");
  }

  // Irreversibilidad / precondiciones de estado
  if (reclamo.objeto.estado !== "en_custodia") {
    throw new Error("El objeto ya no está en custodia y no puede entregarse.");
  }

  if (reclamo.estado === "entregado") {
    throw new Error("El reclamo ya fue entregado de forma irreversible.");
  }

  if (reclamo.estado !== "aprobado") {
    throw new Error("El reclamo debe estar en estado 'aprobado' para poder confirmar la entrega.");
  }

  // Validar que se aplique al menos un método válido según la categoría
  const metodosCategoria = reclamo.objeto.categoria.metodos_verificacion ?? [];
  const metodos = Array.isArray(metodosAplicados) ? metodosAplicados : [];
  const metodosValidos = metodos.filter((metodo) => metodosCategoria.includes(metodo));

  if (metodosValidos.length === 0) {
    throw new Error(
      `Verificación rechazada: Ningún método aplicado es válido para la categoría '${reclamo.objeto.categoria.nombre}'. Métodos aceptados: ${metodosCategoria.join(', ')}.`,
    );
  }

  // Generar número de comprobante único
  const fecha = new Date();
  const numeroComprobante = `ENT-${fecha.getFullYear()}${String(fecha.getMonth() + 1).padStart(2, '0')}${String(fecha.getDate()).padStart(2, '0')}-${reclamo.id_reclamo}`;

  // Ejecutar la entrega en una transacción atómica
  const resultado = await prisma.$transaction(async (tx) => {
    // 1. Actualizar el objeto a estado "entregado" (irreversible)
    await tx.objeto.update({
      where: { id_objeto: reclamo.id_objeto },
      data: { estado: "entregado" },
    });

    // 2. Actualizar el reclamo con la fecha de entrega y comprobante
    const reclamoActualizado = await tx.reclamo.update({
      where: { id_reclamo: reclamo.id_reclamo },
      data: {
        estado: "entregado",
        entregado_en: fecha,
        numero_comprobante: numeroComprobante,
      },
    });

    // 3. Registrar en bitácora (actor autenticado que confirma la entrega)
    await tx.bitacora.create({
      data: {
        id_usuario: usuario.id_usuario,
        accion: "confirmar_entrega",
        recurso: `RECLAMO:${reclamo.id_reclamo};OBJETO:${reclamo.id_objeto};COMPROBANTE:${numeroComprobante}`,
        resultado: "permitido",
      },
    });

    return reclamoActualizado;
  });

  return {
    message: "Objeto entregado exitosamente de forma irreversible",
    estado: "entregado",
    comprobanteEntrega: {
      // Datos del reclamante desde el registro del sistema (no desde el cliente)
      reclamante: reclamo.nombre_reclamante,
      rutReclamante: reclamo.rut_reclamante,
      fechaEntrega: resultado.entregado_en.toISOString(),
      metodosVerificacionUtilizados: metodosValidos,
      verificaciones: {
        identidadRutCedulaAprobada: true,
        propiedadAcreditada: true,
      },
      numeroComprobante: resultado.numero_comprobante,
    },
  };
};
