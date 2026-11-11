import prisma from '../config/prisma.js';
import { errorConCodigo } from '../utils/errorConCodigo.js';
import { DIAS_TOTAL_CUSTODIA, calcularFechaUmbral } from './retencionService.js';

// Reclamos que todavia pueden terminar en una entrega: protegen al objeto de la baja
const ESTADOS_RECLAMO_PENDIENTE = ['en_revision', 'aprobado'];

// Lo que se carga junto al objeto para poder revisar las reglas
const INCLUIR_RECLAMOS_PENDIENTES = {
  reclamos: {
    where: { estado: { in: ESTADOS_RECLAMO_PENDIENTE } },
    select: { id_reclamo: true, estado: true },
  },
};

// Fecha desde la cual el objeto cumple el plazo de custodia (registro + 365 dias)
function fechaFinCustodia(registradoEn) {
  const fecha = new Date(registradoEn);
  fecha.setDate(fecha.getDate() + DIAS_TOTAL_CUSTODIA);
  return fecha;
}

/**
 * Reglas del Req 05 para dar de baja un objeto. Las usan la elegibilidad,
 * los candidatos y el registro, para que las tres respondan lo mismo.
 * @param {object|null} objeto - con sus reclamos pendientes incluidos
 * @param {Date} [fechaReferencia=new Date()]
 * @returns {{ motivo: string, statusCode: number } | null} null si se puede dar de baja
 */
export function motivoNoElegible(objeto, fechaReferencia = new Date()) {
  if (!objeto) {
    return { motivo: 'El objeto no existe', statusCode: 404 };
  }

  if (objeto.estado !== 'no_reclamado') {
    return {
      motivo: `Solo se pueden dar de baja objetos no reclamados. Estado actual: '${objeto.estado}'`,
      statusCode: 409,
    };
  }

  // El plazo cuenta desde registrado_en
  const fechaLimite = calcularFechaUmbral(DIAS_TOTAL_CUSTODIA, fechaReferencia);
  if (objeto.registrado_en > fechaLimite) {
    const desde = fechaFinCustodia(objeto.registrado_en).toISOString().slice(0, 10);
    return {
      motivo: `El objeto todavia no cumple un año en custodia. Se podra dar de baja desde el ${desde}`,
      statusCode: 409,
    };
  }

  if (objeto.reclamos.length > 0) {
    return {
      motivo: 'El objeto tiene reclamos pendientes (en revision o aprobados). Resuelvalos antes de darlo de baja',
      statusCode: 409,
    };
  }

  return null;
}

/**
 * GET /api/destrucciones/elegibilidad/:id
 * @param {number} idObjeto
 * @returns {Promise<{ elegible: boolean, motivo: string|null, objeto: object }>}
 */
export async function validarElegibilidadDestruccion(idObjeto) {
  const objeto = await prisma.objeto.findUnique({
    where: { id_objeto: idObjeto },
    include: {
      categoria: { select: { nombre: true } },
      punto: { select: { nombre: true } },
      ...INCLUIR_RECLAMOS_PENDIENTES,
    },
  });

  const rechazo = motivoNoElegible(objeto);

  // Si el objeto no existe no hay nada que consultar
  if (rechazo?.statusCode === 404) {
    throw errorConCodigo(rechazo.motivo, 404);
  }

  return {
    elegible: !rechazo,
    motivo: rechazo?.motivo ?? null,
    objeto,
  };
}

// GET /api/destrucciones/candidatos: objetos no reclamados, elegibles o no
export async function obtenerObjetosCandidatosDestruccion() {
  const objetos = await prisma.objeto.findMany({
    where: { estado: 'no_reclamado' },
    include: {
      categoria: { select: { nombre: true } },
      punto: { select: { nombre: true } },
      ...INCLUIR_RECLAMOS_PENDIENTES,
    },
    orderBy: { registrado_en: 'asc' },
  });

  const ahora = new Date();

  return objetos.map((obj) => {
    const rechazo = motivoNoElegible(obj, ahora);
    return {
      id_objeto: obj.id_objeto,
      descripcion: obj.descripcion,
      categoria: obj.categoria.nombre,
      punto_acopio: obj.punto.nombre,
      registrado_en: obj.registrado_en,
      elegible: !rechazo,
      motivo_bloqueo: rechazo?.motivo ?? null,
    };
  });
}

// Deja en la Bitacora un intento de baja rechazado.
// Si la Bitacora falla, se avisa en consola pero se responde el rechazo original.
async function registrarRechazoEnBitacora(idObjeto, idAdministrador, motivo) {
  try {
    await prisma.bitacora.create({
      data: {
        id_usuario: idAdministrador,
        accion: 'registrar_destruccion',
        recurso: `OBJETO:${idObjeto}`,
        resultado: 'denegado',
        motivo,
      },
    });
  } catch (error) {
    console.error('No se pudo registrar el rechazo en la bitacora:', error);
  }
}

/**
 * POST /api/destrucciones: da de baja un objeto y emite su acta.
 * Todo ocurre en una transaccion: si algo falla, no queda ni el acta ni el cambio de estado.
 * @param {number} idObjeto
 * @param {number} idAdministrador - el usuario de la sesion
 * @param {string|null} [archivoUrl] - enlace opcional a la copia firmada del acta
 */
export async function registrarDestruccionObjeto(idObjeto, idAdministrador, archivoUrl) {
  try {
    return await prisma.$transaction(async (tx) => {
      // 1. Las reglas se revisan dentro de la transaccion
      const objeto = await tx.objeto.findUnique({
        where: { id_objeto: idObjeto },
        include: INCLUIR_RECLAMOS_PENDIENTES,
      });

      const rechazo = motivoNoElegible(objeto);
      if (rechazo) {
        throw errorConCodigo(rechazo.motivo, rechazo.statusCode);
      }

      // 2. Acta con fecha y responsable
      const numeroActa = `ACTA-${Date.now()}-${idObjeto}`;
      const acta = await tx.actaDestruccion.create({
        data: {
          numero_acta: numeroActa,
          responsable: idAdministrador,
          ejecutada_en: new Date(),
          archivo_url: archivoUrl ?? null,
        },
      });

      // 3. Solo se actualiza si el objeto sigue no reclamado y sin acta.
      // Si dos peticiones llegan al mismo tiempo, la segunda no encuentra el objeto (count = 0)
      // y la transaccion se deshace, incluida su acta.
      const { count } = await tx.objeto.updateMany({
        where: { id_objeto: idObjeto, estado: 'no_reclamado', id_acta: null },
        data: {
          estado: 'dado_de_baja',
          id_acta: acta.id_acta,
          publicado: false,
        },
      });

      if (count !== 1) {
        throw errorConCodigo('El objeto ya fue dado de baja en otra operacion', 409);
      }

      // 4. Trazabilidad
      await tx.bitacora.create({
        data: {
          id_usuario: idAdministrador,
          accion: 'registrar_destruccion',
          recurso: `OBJETO:${idObjeto}`,
          resultado: 'permitido',
          motivo: `Objeto dado de baja. Acta emitida: ${numeroActa}`,
        },
      });

      return { acta, objetoId: idObjeto };
    });
  } catch (error) {
    // Los rechazos se guardan fuera de la transaccion, porque ella ya se deshizo
    if (error.statusCode === 404 || error.statusCode === 409) {
      await registrarRechazoEnBitacora(idObjeto, idAdministrador, error.message);
    }
    throw error;
  }
}

// GET /api/destrucciones: actas registradas, de la mas nueva a la mas antigua
export async function listarActasDestruccion() {
  return prisma.actaDestruccion.findMany({
    include: {
      firmante: {
        select: {
          id_usuario: true,
          nombres: true,
          apellidos: true,
          correo_institucional: true,
        },
      },
      // Datos que necesita el acta imprimible (la genera el frontend con esto)
      objetos: {
        select: {
          id_objeto: true,
          numero_en_punto: true,
          descripcion: true,
          lugar_hallazgo: true,
          hallado_en: true,
          registrado_en: true,
          alerta_enviada_en: true,
          categoria: { select: { nombre: true } },
          punto: { select: { nombre: true, codigo: true } },
        },
      },
    },
    orderBy: { ejecutada_en: 'desc' },
  });
}
