import prisma from '../config/prisma.js';

/**
 * Servicio para registrar una solicitud de reclamo (devolución).
 * El reclamo queda en estado 'en_revision'.
 * - Encargado: debe pertenecer al punto de custodia del objeto; queda como atendido_por.
 * - Usuario/Administrador: se asigna atendido_por a un encargado activo del punto (responsable operativo).
 * La bitácora registra el usuario autenticado que realizó la acción en el sistema.
 */
export const crearReclamoService = async (datosReclamo, usuario) => {
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

  // Determinar encargado responsable (atendido_por) según perfil que registra
  let atendidoPorId;
  if (usuario?.rol === 'encargado') {
    if (usuario.id_punto !== objeto.id_punto) {
      throw new Error("Acción denegada: Solo el Encargado del punto de custodia del objeto puede registrar este reclamo.");
    }
    atendidoPorId = usuario.id_usuario;
  } else {
    const encargadoPunto = objeto.punto.encargados[0];
    if (!encargadoPunto) {
      throw new Error("No hay un encargado asignado al punto de custodia de este objeto.");
    }
    atendidoPorId = encargadoPunto.id_usuario;
  }

  // Crear el reclamo en una transacción
  const reclamo = await prisma.$transaction(async (tx) => {
    const nuevoReclamo = await tx.reclamo.create({
      data: {
        id_objeto,
        atendido_por: atendidoPorId,
        rut_reclamante,
        nombre_reclamante,
        evidencia_identidad,
        evidencia_propiedad,
        estado: "en_revision",
      },
    });

    // Registrar en bitácora: actor real en el sistema
    await tx.bitacora.create({
      data: {
        id_usuario: usuario?.id_usuario ?? atendidoPorId,
        accion: "crear_reclamo",
        recurso: `RECLAMO:${nuevoReclamo.id_reclamo}`,
        resultado: "permitido",
      },
    });

    return nuevoReclamo;
  });

  return {
    mensaje: "Solicitud de reclamo registrada. Quedará en revisión por el Encargado del punto de custodia.",
    reclamo: {
      id_reclamo: reclamo.id_reclamo,
      estado: reclamo.estado,
      rut_reclamante: reclamo.rut_reclamante,
      nombre_reclamante: reclamo.nombre_reclamante,
      creado_en: reclamo.creado_en,
    },
  };
};
