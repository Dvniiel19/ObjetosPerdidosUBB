import prisma from '../config/prisma.js';

// Catalogo publico: solo objetos publicados y que siguen en custodia.
// Los no publicados, entregados, no reclamados o dados de baja no se muestran.
// Si viene "texto", filtra por descripcion o lugar de hallazgo (sin importar mayusculas).
export async function listarCatalogo({ texto } = {}) {
  const busqueda = texto?.trim();

  return prisma.objeto.findMany({
    where: {
      publicado: true,
      estado: 'en_custodia',
      ...(busqueda && {
        OR: [
          { descripcion: { contains: busqueda, mode: 'insensitive' } },
          { lugar_hallazgo: { contains: busqueda, mode: 'insensitive' } },
        ],
      }),
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

function validarContextoEncargado(encargado) {
  if (
    encargado?.rol !== 'encargado' ||
    !Number.isInteger(encargado.id_usuario) ||
    encargado.id_usuario <= 0 ||
    !Number.isInteger(encargado.id_punto) ||
    encargado.id_punto <= 0
  ) {
    const error = new Error(
      'Se requiere un encargado con un punto de acopio asignado',
    );

    error.statusCode = 403;
    throw error;
  }
}

async function validarCategoriaExistente(idCategoria) {
  const categoria = await prisma.categoria.findUnique({
    where: {
      id_categoria: idCategoria,
    },
    select: {
      id_categoria: true,
    },
  });

  if (!categoria) {
    const error = new Error('La categoría seleccionada no existe');

    error.statusCode = 400;
    throw error;
  }
}

export async function registrarObjeto(datos, encargado) {
  validarContextoEncargado(encargado);

 const fotografias = datos.fotografias ?? [];

if (fotografias.length > 3) {
  const error = new Error('Se permiten hasta 3 fotografías');

  error.statusCode = 400;
  throw error;
}

  await validarCategoriaExistente(datos.id_categoria);

  return prisma.objeto.create({
    data: {
      id_categoria: datos.id_categoria,
      descripcion: datos.descripcion,
      hallado_en: new Date(datos.hallado_en),
      lugar_hallazgo: datos.lugar_hallazgo,
      id_punto: encargado.id_punto,
      registrado_por: encargado.id_usuario,
      estado: 'en_custodia',
      fotografias: {
        create: fotografias.map((fotografia, indice) => ({
          posicion: indice + 1,
          archivo_url: fotografia.archivo_url,
        })),
      },
    },
  });
}