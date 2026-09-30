import prisma from '../config/prisma.js';

/**
 * Verifica si el objeto cumple las condiciones para ser destruido de forma segura
 * @param {number} idObjeto ID del objeto a evaluar
 * @returns {Promise<{ elegible: boolean, motivo?: string, objeto?: any }>}
 */
export async function validarElegibilidadDestruccion(idObjeto) {

  // 1. Buscar el objeto y trae también sus reclamos que estén 'en_revision'
const objeto = await prisma.objeto.findUnique({
    where: { id_objeto: idObjeto },
    include: {
        reclamos: {
        where: {
          estado: 'en_revision' // Solo bloquean los reclamos activos o pendientes
        }
        }
    }
});

  // 2. Verificar existencia
    if (!objeto) {
    return { elegible: false, motivo: 'El objeto especificado no existe en el sistema.' };
    }

  // 3. Validación de plazo legal (Solo se destruyen los no reclamados)
    if (objeto.estado !== 'no_reclamado') {
    return { 
    elegible: false, 
    motivo: `El objeto no puede ser destruido. Estado actual: '${objeto.estado}'. Debe estar catalogado como 'no_reclamado'.` 
    };
    }

  // 4. Validación de protección por reclamos activos
    if (objeto.reclamos.length > 0) {
    return { 
        elegible: false, 
        motivo: 'El objeto está protegido porque tiene reclamos pendientes en revisión, resuelva los reclamos primero.' 
    };
    }

  // Si pasa todos los filtros, es legalmente elegible para destruccion
    return { elegible: true, objeto };
}
/**
 * Registra la destrucción de un objeto:
 * crea el acta, da de baja el objeto y guarda la informacion
 */
export async function registrarDestruccionObjeto(idObjeto, idAdministrador, archivoUrl) {
  // Verificar nuevamente si el objeto puede ser destruido
  const validacion = await validarElegibilidadDestruccion(idObjeto);
  if (!validacion.elegible) {
    throw new Error(`Operación denegada: ${validacion.motivo}`);
  }

  // realizar todo dentro de una transaccion
  return prisma.$transaction(async (tx) => {
    const numeroUnico = `ACTA-${Date.now()}-${idObjeto}`;
    
    const acta = await tx.actaDestruccion.create({
      data: {
        numero_acta: numeroUnico,
        responsable: idAdministrador,
        ejecutada_en: new Date(),
        archivo_url: archivoUrl
      }
    });

    const objetoDadoDeBaja = await tx.objeto.update({
      where: { id_objeto: idObjeto },
      data: {
        estado: 'dado_de_baja',
        id_acta: acta.id_acta
      }
    });

    await tx.bitacora.create({
      data: {
        id_usuario: idAdministrador,
        accion: 'registrar_destruccion',
        recurso: `OBJETO:${idObjeto}`,
        resultado: 'permitido',
        motivo: `Objeto destruido. Respaldo: ${numeroUnico}`
      }
    });

    return { acta, objetoId: objetoDadoDeBaja.id_objeto };
  });
}