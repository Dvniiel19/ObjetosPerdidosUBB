import prisma from '../config/prisma.js';

/**
 * Servicio para gestionar la lógica de negocio de devoluciones y entregas.
 * Conectado a la base de datos mediante Prisma.
 */
export const procesarEntregaService = async (id, datosReclamo, usuario) => {
  const {
    rutCedulaValidada,
    propiedadAcreditada,
    aprobadoPorEncargado,
    metodosAplicados,
    usuarioReclamante
  } = datosReclamo;

  // Validar que el usuario sea un encargado
  if (usuario?.rol !== 'encargado') {
    throw new Error("Entrega denegada: Solo un Encargado del punto de custodia puede aprobar la entrega.");
  }

  // Validaciones de negocio (las que ya existían)
  if (!rutCedulaValidada) {
    throw new Error("Verificación rechazada: Se requiere la validación obligatoria del RUT de la cédula.");
  }

  if (!propiedadAcreditada) {
    throw new Error("Verificación rechazada: No se ha acreditado la propiedad del objeto según su categoría.");
  }

  if (!aprobadoPorEncargado) {
    throw new Error("Entrega denegada: El Encargado del punto de custodia no ha aprobado las verificaciones.");
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

  // Verificar que el objeto esté en custodia
  if (reclamo.objeto.estado !== "en_custodia") {
    throw new Error("El objeto ya se encuentra en estado 'entregado' y no se puede modificar.");
  }

  // Verificar que el reclamo esté aprobado antes de entregar
  if (reclamo.estado !== "aprobado") {
    throw new Error("El reclamo debe estar en estado 'aprobado' para poder entregar el objeto.");
  }

  // Validar que se aplique al menos un método de verificación según la categoría
  const metodosCategoria = reclamo.objeto.categoria.metodos_verificacion;
  const metodos = Array.isArray(metodosAplicados) ? metodosAplicados : [];

  if (metodos.length === 0) {
    throw new Error("Verificación rechazada: Se requiere al menos un método de acreditación de propiedad según la categoría del objeto.");
  }

  const metodosValidos = metodos.filter(metodo =>
    metodosCategoria.includes(metodo)
  );

  if (metodosValidos.length === 0) {
    throw new Error(`Verificación rechazada: Ningún método aplicado es válido para la categoría '${reclamo.objeto.categoria.nombre}'. Métodos aceptados: ${metodosCategoria.join(', ')}.`);
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

    // 3. Registrar en bitácora
    await tx.bitacora.create({
      data: {
        id_usuario: reclamo.atendido_por,
        accion: "entregar_objeto",
        recurso: `RECLAMO:${reclamo.id_reclamo}`,
        resultado: "permitido",
      },
    });

    return reclamoActualizado;
  });

  return {
    message: "Objeto entregado exitosamente de forma irreversible",
    estado: "entregado",
    comprobanteEntrega: {
      reclamante: usuarioReclamante,
      fechaEntrega: resultado.entregado_en.toISOString(),
      metodosVerificacionUtilizados: metodosAplicados || [],
      numeroComprobante: resultado.numero_comprobante,
    }
  };
};
