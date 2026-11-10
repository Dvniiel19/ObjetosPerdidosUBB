import prisma from '../config/prisma.js';

/**
 * @param {number} idObjeto 
 * @returns {Promise<{ elegible: boolean, motivo?: string, objeto?: any }>}
 */
export async function validarElegibilidadDestruccion(idObjeto) {
  const objeto = await prisma.objeto.findUnique({
    where: { id_objeto: idObjeto },
    include: {
      categoria: true,
      punto: true,
      reclamos: {
        where: {
          estado: {
            in: ['en_revision', 'aprobado'],
          },
        },
      },
    },
  });

  if (!objeto) {
    return { elegible: false, motivo: 'El objeto especificado no existe en el sistema.' };
  }

  if (objeto.estado !== 'no_reclamado') {
    return {
      elegible: false,
      motivo: `El objeto no puede ser destruido. Su estado actual es '${objeto.estado}' y debe ser 'no_reclamado'.`,
    };
  }

  if (objeto.reclamos.length > 0) {
    return {
      elegible: false,
      motivo: 'El objeto está protegido porque tiene reclamos activos (en revisión o aprobados). Resuelva los reclamos primero.',
    };
  }

  return { elegible: true, objeto };
}

export async function obtenerObjetosCandidatosDestruccion() {
  const objetos = await prisma.objeto.findMany({
    where: { estado: 'no_reclamado' },
    include: {
      categoria: { select: { nombre: true } },
      punto: { select: { nombre: true } },
      reclamos: {
        where: {
          estado: { in: ['en_revision', 'aprobado'] },
        },
        select: { id_reclamo: true, estado: true },
      },
    },
    orderBy: { registrado_en: 'asc' },
  });

  return objetos.map((obj) => {
    const tieneReclamosActivos = obj.reclamos.length > 0;
    return {
      id_objeto: obj.id_objeto,
      descripcion: obj.descripcion,
      categoria: obj.categoria.nombre,
      punto_acopio: obj.punto.nombre,
      registrado_en: obj.registrado_en,
      elegible: !tieneReclamosActivos,
      motivo_bloqueo: tieneReclamosActivos
        ? 'Posee reclamos activos en revisión o aprobados'
        : null,
    };
  });
}

export async function registrarDestruccionObjeto(idObjeto, idAdministrador, archivoUrl) {
  const validacion = await validarElegibilidadDestruccion(idObjeto);
  
  if (!validacion.elegible) {
    await prisma.bitacora.create({
      data: {
        id_usuario: idAdministrador,
        accion: 'registrar_destruccion',
        recurso: `OBJETO:${idObjeto}`,
        resultado: 'denegado',
        motivo: validacion.motivo,
      },
    });
    throw new Error(`Operación denegada: ${validacion.motivo}`);
  }

  return prisma.$transaction(async (tx) => {
    const numeroUnico = `ACTA-${Date.now()}-${idObjeto}`;

    const acta = await tx.actaDestruccion.create({
      data: {
        numero_acta: numeroUnico,
        responsable: idAdministrador,
        ejecutada_en: new Date(),
        archivo_url: archivoUrl,
      },
    });

    const objetoDadoDeBaja = await tx.objeto.update({
      where: { id_objeto: idObjeto },
      data: {
        estado: 'dado_de_baja',
        id_acta: acta.id_acta,
        publicado: false,
      },
    });

    await tx.bitacora.create({
      data: {
        id_usuario: idAdministrador,
        accion: 'registrar_destruccion',
        recurso: `OBJETO:${idObjeto}`,
        resultado: 'permitido',
        motivo: `Objeto dado de baja. Acta emitida: ${numeroUnico}`,
      },
    });

    return { acta, objetoId: objetoDadoDeBaja.id_objeto };
  });
}


export async function listarActasDestruccion() {
  return prisma.actaDestruccion.findMany({
    include: {
      firmante: {
        select: { id_usuario: true, nombre: true, correo: true },
      },
      objetos: {
        select: { id_objeto: true, descripcion: true, registrado_en: true },
      },
    },
    orderBy: { ejecutada_en: 'desc' },
  });
}