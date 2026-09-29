import prisma from '../config/prisma.js';

/**
 * Servicio para crear un reclamo (solicitud de devolución).
 * El reclamo se crea en estado 'en_revision' y se asigna al encargado
 * del punto donde el objeto está en custodia.
 */
export const crearReclamoService = async (datosReclamo) => {
  const { id_objeto, rut_reclamante, nombre_reclamante, evidencia_identidad, evidencia_propiedad } = datosReclamo;

  // Buscar el objeto y verificar que esté en custodia
  const objeto = await prisma.objeto.findUnique({
    where: { id_objeto },
    include: {
      punto: {
        include: {
          encargados: {
            where: { activo: true },
            take: 1,
          },
        },
      },
    },
  });

  if (!objeto) {
    throw new Error("El objeto solicitado no existe.");
  }

  if (objeto.estado !== "en_custodia") {
    throw new Error("El objeto no está disponible para reclamar.");
  }

  // Buscar al encargado del punto
  const encargado = objeto.punto.encargados[0];

  if (!encargado) {
    throw new Error("No hay un encargado asignado al punto de custodia de este objeto.");
  }

  // Crear el reclamo en una transacción
  const reclamo = await prisma.$transaction(async (tx) => {
    const nuevoReclamo = await tx.reclamo.create({
      data: {
        id_objeto,
        atendido_por: encargado.id_usuario,
        rut_reclamante,
        nombre_reclamante,
        evidencia_identidad,
        evidencia_propiedad,
        estado: "en_revision",
      },
    });

    // Registrar en bitácora
    await tx.bitacora.create({
      data: {
        id_usuario: encargado.id_usuario,
        accion: "crear_reclamo",
        recurso: `RECLAMO:${nuevoReclamo.id_reclamo}`,
        resultado: "permitido",
      },
    });

    return nuevoReclamo;
  });

  return {
    mensaje: "Reclamo creado exitosamente. Quedará en revisión por el Encargado.",
    reclamo: {
      id_reclamo: reclamo.id_reclamo,
      estado: reclamo.estado,
      rut_reclamante: reclamo.rut_reclamante,
      nombre_reclamante: reclamo.nombre_reclamante,
      creado_en: reclamo.creado_en,
    },
  };
};
