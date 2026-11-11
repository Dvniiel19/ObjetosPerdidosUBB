import prisma from '../config/prisma.js';
import { errorConCodigo } from '../utils/errorConCodigo.js';

// "12" o "BIB-12" se interpreta como numero de etiqueta
const PATRON_NUMERO = /^(?:[a-z]{2,6}\s*-\s*)?(\d+)$/i;

/* Inventario del punto del encargado: todo lo que tiene su oficina, publicado o no, el punto sale del token
 (nunca de la URL), asi un encargado no puede ver otro punto */
export async function listarInventario(encargado, { texto, estado }) {
  if (encargado?.rol !== 'encargado' || !encargado.id_punto) {
    throw errorConCodigo('Solo un encargado con oficina asignada puede ver el inventario', 403);
  }

  const where = { id_punto: encargado.id_punto };

  if (estado !== 'todos') {
    where.estado = estado;
  }

  if (texto) {
    const coincideNumero = PATRON_NUMERO.exec(texto);
    if (coincideNumero) {
      where.numero_en_punto = Number(coincideNumero[1]);
    } else {
      where.OR = [
        { descripcion: { contains: texto, mode: 'insensitive' } },
        { lugar_hallazgo: { contains: texto, mode: 'insensitive' } },
      ];
    }
  }

  return prisma.objeto.findMany({
    where,
    select: {
      id_objeto: true,
      numero_en_punto: true,
      descripcion: true,
      lugar_hallazgo: true,
      hallado_en: true,
      registrado_en: true,
      estado: true,
      publicado: true,
      categoria: { select: { nombre: true } },
      punto: { select: { codigo: true, nombre: true } },
      // Solo la foto de portada
      fotografias: {
        select: { archivo_url: true },
        orderBy: { posicion: 'asc' },
        take: 1,
      },
    },
    orderBy: { numero_en_punto: 'desc' },
  });
}