import prisma from '../config/prisma.js';

/**
 * Verifica si el objeto cumple las condiciones para ser destruido de forma segura
 * 
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

  // Si pasa todos los filtros, es legalmente elegible para destrucción
    return { elegible: true, objeto };
}