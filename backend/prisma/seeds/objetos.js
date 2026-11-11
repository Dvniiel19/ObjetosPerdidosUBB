import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CARPETA_FOTOS_OBJETOS, RUTA_PUBLICA_FOTOS_OBJETOS } from '../../src/config/almacenamiento.js';

// Fotos de ejemplo (ilustraciones) guardadas junto al seed.
// Al correr el seed se copian a la carpeta de subidas (uploads/objetos, que no se sube a git).
const CARPETA_FOTOS_SEED = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fotos');

// Objetos en custodia para probar busqueda, filtros y coincidencias.
// Incluye algunos que NO deben aparecer en el catalogo publico
// (sin publicar, entregados o no reclamados) para probar que se esconden bien.

export async function seedObjetos(prisma, { categorias, puntos, usuarios }) {
  const bib = { punto: puntos.biblioteca, registrador: usuarios.encargadoBiblioteca };
  const face = { punto: puntos.face, registrador: usuarios.encargadoFace };

  const objetos = [
    // Visibles en el catalogo (publicados y en custodia)
    { ...bib, categoria: 'Electronica', descripcion: 'Celular iPhone negro con funda azul', foto: 'seed-celular.png', hallado_en: '2026-09-01T10:30:00', lugar_hallazgo: 'Sala de estudio, segundo piso biblioteca' },
    { ...bib, categoria: 'Electronica', descripcion: 'Audífonos inalámbricos blancos en estuche', foto: 'seed-audifonos.png', hallado_en: '2026-09-05T15:00:00', lugar_hallazgo: 'Biblioteca, mesas del primer piso' },
    { ...bib, categoria: 'Documentos y tarjetas', descripcion: 'Tarjeta TNE a nombre de estudiante', foto: 'seed-tarjeta.png', hallado_en: '2026-09-10T09:15:00', lugar_hallazgo: 'Entrada de la biblioteca' },
    { ...bib, categoria: 'Utiles y libros', descripcion: 'Calculadora científica Casio gris', foto: 'seed-calculadora.png', hallado_en: '2026-09-12T11:45:00', lugar_hallazgo: 'Sala de computación' },
    { ...face, categoria: 'Mochilas y bolsos', descripcion: 'Mochila negra marca Totto con cuadernos', foto: 'seed-mochila.png', hallado_en: '2026-09-03T13:20:00', lugar_hallazgo: 'FACE, sala de estudio' },
    { ...face, categoria: 'Llaves', descripcion: 'Llavero con tres llaves y un peluche rojo', foto: 'seed-llavero.png', hallado_en: '2026-09-08T14:00:00', lugar_hallazgo: 'FACE, pasillo segundo piso' },
    { ...face, categoria: 'Ropa y accesorios', descripcion: 'Polerón gris con capucha talla M', foto: 'seed-poleron.png', hallado_en: '2026-09-15T12:30:00', lugar_hallazgo: 'FACE, auditorio' },
    { ...face, categoria: 'Otros', descripcion: 'Botella metálica azul con stickers', foto: 'seed-botella.png', hallado_en: '2026-09-18T13:00:00', lugar_hallazgo: 'FACE, patio central' },
    { ...bib, punto: puntos.salasAC, categoria: 'Otros', descripcion: 'Paraguas negro plegable', foto: 'seed-paraguas.png', hallado_en: '2026-09-20T08:10:00', lugar_hallazgo: 'Salas AC, sala AC-12' },
    { ...bib, punto: puntos.salasAC, categoria: 'Electronica', descripcion: 'Cargador de notebook Lenovo', foto: 'seed-cargador.png', hallado_en: '2026-09-21T17:40:00', lugar_hallazgo: 'Salas AC, pasillo primer piso' },

    // NO visibles en el catalogo publico
    { ...bib, categoria: 'Documentos y tarjetas', descripcion: 'Billetera café con documentos', hallado_en: '2026-09-22T10:00:00', lugar_hallazgo: 'Biblioteca, baño primer piso', publicado: false },
    { ...face, categoria: 'Electronica', descripcion: 'Celular Samsung con pantalla trizada', hallado_en: '2026-08-20T13:30:00', lugar_hallazgo: 'FACE, laboratorio de computación', estado: 'entregado' },
    { ...bib, categoria: 'Ropa y accesorios', descripcion: 'Bufanda roja de lana', hallado_en: '2025-08-10T09:00:00', lugar_hallazgo: 'Biblioteca, perchero', estado: 'no_reclamado', registrado_en: '2025-08-10T10:00:00' },
  ];

  fs.mkdirSync(CARPETA_FOTOS_OBJETOS, { recursive: true });
  let conFoto = 0;
  // Ultimo numero usado en cada punto (id_punto -> numero)
  const contadores = {};

  for (const [i, obj] of objetos.entries()) {
    const idPunto = obj.punto.id_punto;
    contadores[idPunto] = (contadores[idPunto] ?? 0) + 1;

    const creado = await prisma.objeto.create({
      data: {
        numero_en_punto: contadores[idPunto],
        descripcion: obj.descripcion,
        hallado_en: new Date(obj.hallado_en),
        lugar_hallazgo: obj.lugar_hallazgo,
        estado: obj.estado ?? 'en_custodia',
        publicado: obj.publicado ?? true,
        ...(obj.registrado_en && { registrado_en: new Date(obj.registrado_en) }),
        id_categoria: categorias[obj.categoria].id_categoria,
        id_punto: obj.punto.id_punto,
        registrado_por: obj.registrador.id_usuario,
      },
    });

    // Foto de portada de ejemplo
    if (obj.foto) {
      fs.copyFileSync(path.join(CARPETA_FOTOS_SEED, obj.foto), path.join(CARPETA_FOTOS_OBJETOS, obj.foto));
      await prisma.fotografia.create({
        data: {
          id_objeto: creado.id_objeto,
          posicion: 1,
          archivo_url: `${RUTA_PUBLICA_FOTOS_OBJETOS}/${obj.foto}`,
        },
      });
      conFoto++;
    }
  }

  // Cada punto queda con su contador al dia, para que el proximo objeto siga la numeracion
  for (const [idPunto, ultimo] of Object.entries(contadores)) {
    await prisma.puntoAcopio.update({
      where: { id_punto: Number(idPunto) },
      data: { ultimo_numero: ultimo },
    });
  }

  console.log(`Objetos: ${objetos.length} creados (${conFoto} con foto de ejemplo)`);
}
