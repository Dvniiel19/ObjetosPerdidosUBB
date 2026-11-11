import prisma from '../config/prisma.js';
import { errorConCodigo } from '../utils/errorConCodigo.js';

// Datos de un usuario que se muestran en el historial
const DATOS_USUARIO = {
  id_usuario: true,
  nombres: true,
  apellidos: true,
  correo_institucional: true,
  rol: true,
};

/**
 * GET /api/historial/objetos/:id (solo administrador, Req 05)
 * Devuelve el estado actual del objeto y su linea de tiempo completa:
 * registro, correcciones y eventos de la Bitacora del objeto y de sus reclamos.
 * @param {number} idObjeto
 */
export async function obtenerHistorialObjeto(idObjeto) {
  const objeto = await prisma.objeto.findUnique({
    where: { id_objeto: idObjeto },
    include: {
      categoria: { select: { nombre: true } },
      punto: { select: { id_punto: true, nombre: true } },
      registrador: { select: DATOS_USUARIO },
      acta: {
        include: { firmante: { select: DATOS_USUARIO } },
      },
      reclamos: {
        // Las rutas de evidencia son archivos privados: no se incluyen
        select: {
          id_reclamo: true,
          rut_reclamante: true,
          nombre_reclamante: true,
          estado: true,
          motivo_decision: true,
          creado_en: true,
          entregado_en: true,
          numero_comprobante: true,
          encargado: { select: DATOS_USUARIO },
        },
        orderBy: { creado_en: 'asc' },
      },
      historial: {
        include: { encargado: { select: DATOS_USUARIO } },
        orderBy: { modificado_en: 'asc' },
      },
    },
  });

  if (!objeto) {
    throw errorConCodigo('El objeto no existe', 404);
  }

  // Eventos de la Bitacora del objeto y de cada uno de sus reclamos
  const recursos = [
    `OBJETO:${idObjeto}`,
    ...objeto.reclamos.map((reclamo) => `RECLAMO:${reclamo.id_reclamo}`),
  ];

  const eventosBitacora = await prisma.bitacora.findMany({
    where: { recurso: { in: recursos } },
    include: { usuario: { select: DATOS_USUARIO } },
    orderBy: { registrado_en: 'asc' },
  });

  const lineaDeTiempo = [
    {
      fecha: objeto.registrado_en,
      origen: 'objeto',
      tipo: 'registro',
      descripcion: 'Objeto registrado en el punto de acopio',
      resultado: 'permitido',
      usuario: objeto.registrador,
      detalle: { hallado_en: objeto.hallado_en, lugar_hallazgo: objeto.lugar_hallazgo },
    },
    ...objeto.historial.map((correccion) => ({
      fecha: correccion.modificado_en,
      origen: 'historial_objeto',
      tipo: 'correccion',
      descripcion: correccion.motivo,
      resultado: 'permitido',
      usuario: correccion.encargado,
      detalle: { valores_anteriores: correccion.valores_anteriores },
    })),
    ...eventosBitacora.map((evento) => ({
      fecha: evento.registrado_en,
      origen: 'bitacora',
      tipo: evento.accion,
      descripcion: evento.motivo,
      resultado: evento.resultado,
      // null cuando la accion la hizo el sistema (cron)
      usuario: evento.usuario,
      detalle: { recurso: evento.recurso, id_evento: evento.id_evento },
    })),
  ];

  // Orden por fecha; si dos eventos tienen la misma fecha se mantiene el orden de arriba
  lineaDeTiempo.sort((a, b) => a.fecha - b.fecha);

  const { historial, ...datosObjeto } = objeto;

  return {
    objeto: datosObjeto,
    linea_de_tiempo: lineaDeTiempo,
  };
}
