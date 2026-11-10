import prisma from '../config/prisma.js';

/**
 * Servicio para cambiar el estado de un reclamo (aprobado/rechazado).
 * Solo un encargado del punto donde está el objeto puede realizar esta acción.
 */
export const cambiarEstadoReclamoService = async (id, datosEstado, usuario) => {
  const { estado, motivo } = datosEstado;

  // Validar que el usuario sea un encargado
  if (usuario?.rol !== 'encargado') {
    throw new Error("Solo un Encargado del punto de custodia puede aprobar o rechazar un reclamo.");
  }

  // Buscar el reclamo con su objeto y encargado
  const reclamo = await prisma.reclamo.findUnique({
    where: { id_reclamo: Number(id) },
    include: {
      objeto: true,
    },
  });

  if (!reclamo) {
    throw new Error("El reclamo solicitado no existe.");
  }

  // Verificar que el encargado pertenezca al punto donde está el objeto
  if (usuario.id_punto !== reclamo.objeto.id_punto) {
    throw new Error("El Encargado no pertenece al punto de custodia donde se encuentra el objeto.");
  }

  // Verificar que el reclamo esté en revisión
  if (reclamo.estado !== "en_revision") {
    throw new Error(`El reclamo no puede ser modificado porque su estado actual es '${reclamo.estado}'.`);
  }

  // Actualizar el estado en una transacción
  const resultado = await prisma.$transaction(async (tx) => {
    const reclamoActualizado = await tx.reclamo.update({
      where: { id_reclamo: reclamo.id_reclamo },
      data: {
        estado,
        motivo_decision: motivo || null,
      },
    });

    // Registrar en bitácora
    await tx.bitacora.create({
      data: {
        id_usuario: usuario.id_usuario,
        accion: estado === 'aprobado' ? 'aprobar_reclamo' : 'rechazar_reclamo',
        recurso: `RECLAMO:${reclamo.id_reclamo}`,
        resultado: 'permitido',
        motivo: motivo || null,
      },
    });

    return reclamoActualizado;
  });

  return {
    mensaje: estado === 'aprobado'
      ? "Reclamo aprobado exitosamente. El objeto puede ser entregado."
      : "Reclamo rechazado.",
    reclamo: {
      id_reclamo: resultado.id_reclamo,
      estado: resultado.estado,
      motivo_decision: resultado.motivo_decision,
    },
  };
};
