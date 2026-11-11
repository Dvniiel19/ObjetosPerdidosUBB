import prisma from '../config/prisma.js';

/**
 * Lista reclamos disponibles para gestión por el encargado (en su punto):
 * en revisión (aprobar/rechazar) o aprobados (verificar y entregar).
 */
export const listarReclamosDisponiblesService = async (usuario) => {
  if (usuario?.rol !== 'encargado' || !usuario.id_punto) {
    throw new Error('Solo un encargado con punto asignado puede ver los reclamos disponibles.');
  }

  return prisma.reclamo.findMany({
    where: {
      estado: { in: ['en_revision', 'aprobado'] },
      objeto: { id_punto: usuario.id_punto },
    },
    select: {
      id_reclamo: true,
      estado: true,
      rut_reclamante: true,
      nombre_reclamante: true,
      creado_en: true,
      id_objeto: true,
      objeto: {
        select: {
          descripcion: true,
        },
      },
    },
    orderBy: [{ estado: 'asc' }, { creado_en: 'desc' }],
  });
};

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

  // Ejecutar la entrega en una transacción atómica (actualizaciones condicionales para reforzar irreversibilidad)
  const resultado = await prisma.$transaction(async (tx) => {
    // 1. Actualizar el objeto a estado "entregado" solo si sigue en custodia
    const objetoActualizado = await tx.objeto.updateMany({
      where: { id_objeto: reclamo.id_objeto, estado: "en_custodia" },
      data: { estado: "entregado" },
    });
    if (objetoActualizado.count !== 1) {
      throw new Error("El objeto ya no está en custodia o ya fue entregado. No se puede modificar.");
    }

    // 2. Actualizar el reclamo solo si sigue aprobado (irreversible una vez entregado)
    const reclamoActualizado = await tx.reclamo.updateMany({
      where: { id_reclamo: reclamo.id_reclamo, estado: "aprobado" },
      data: {
        estado: "entregado",
        entregado_en: fecha,
        numero_comprobante: numeroComprobante,
      },
    });
    if (reclamoActualizado.count !== 1) {
      throw new Error("El reclamo ya no está aprobado o ya fue entregado de forma irreversible.");
    }

    // 3. Registrar en bitácora (actor autenticado que confirma la entrega)
    await tx.bitacora.create({
      data: {
        id_usuario: usuario.id_usuario,
        accion: "confirmar_entrega",
        recurso: `RECLAMO:${reclamo.id_reclamo};OBJETO:${reclamo.id_objeto};COMPROBANTE:${numeroComprobante}`,
        resultado: "permitido",
      },
    });

    return { entregado_en: fecha, numero_comprobante: numeroComprobante };
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
