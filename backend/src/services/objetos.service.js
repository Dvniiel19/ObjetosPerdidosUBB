import prisma from '../config/prisma.js';

// Catalogo publico: solo objetos publicados y que siguen en custodia.
// Los no publicados, entregados, no reclamados o dados de baja no se muestran.
export async function listarCatalogo() {
  return prisma.objeto.findMany({
    where: {
      publicado: true,
      estado: 'en_custodia',
    },
    select: {
      id_objeto: true,
      descripcion: true,
      hallado_en: true,
      lugar_hallazgo: true,
      categoria: { select: { id_categoria: true, nombre: true } },
      punto: { select: { id_punto: true, nombre: true, ubicacion: true } },
    },
    orderBy: { hallado_en: 'desc' },
  });
}
