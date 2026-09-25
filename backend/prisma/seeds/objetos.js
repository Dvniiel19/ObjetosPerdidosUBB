// Objetos en custodia para probar busqueda, filtros y coincidencias.
// Incluye algunos que NO deben aparecer en el catalogo publico
// (sin publicar, entregados o no reclamados) para probar que se esconden bien.

export async function seedObjetos(prisma, { categorias, puntos, usuarios }) {
  const bib = { punto: puntos.biblioteca, registrador: usuarios.encargadoBiblioteca };
  const face = { punto: puntos.face, registrador: usuarios.encargadoFace };

  const objetos = [
    // Visibles en el catalogo (publicados y en custodia)
    { ...bib, categoria: 'Electronica', descripcion: 'Celular iPhone negro con funda azul', hallado_en: '2026-09-01T10:30:00', lugar_hallazgo: 'Sala de estudio, segundo piso biblioteca' },
    { ...bib, categoria: 'Electronica', descripcion: 'Audífonos inalámbricos blancos en estuche', hallado_en: '2026-09-05T15:00:00', lugar_hallazgo: 'Biblioteca, mesas del primer piso' },
    { ...bib, categoria: 'Documentos y tarjetas', descripcion: 'Tarjeta TNE a nombre de estudiante', hallado_en: '2026-09-10T09:15:00', lugar_hallazgo: 'Entrada de la biblioteca' },
    { ...bib, categoria: 'Utiles y libros', descripcion: 'Calculadora científica Casio gris', hallado_en: '2026-09-12T11:45:00', lugar_hallazgo: 'Sala de computación' },
    { ...face, categoria: 'Mochilas y bolsos', descripcion: 'Mochila negra marca Totto con cuadernos', hallado_en: '2026-09-03T13:20:00', lugar_hallazgo: 'FACE, sala de estudio' },
    { ...face, categoria: 'Llaves', descripcion: 'Llavero con tres llaves y un peluche rojo', hallado_en: '2026-09-08T14:00:00', lugar_hallazgo: 'FACE, pasillo segundo piso' },
    { ...face, categoria: 'Ropa y accesorios', descripcion: 'Polerón gris con capucha talla M', hallado_en: '2026-09-15T12:30:00', lugar_hallazgo: 'FACE, auditorio' },
    { ...face, categoria: 'Otros', descripcion: 'Botella metálica azul con stickers', hallado_en: '2026-09-18T13:00:00', lugar_hallazgo: 'FACE, patio central' },
    { ...bib, punto: puntos.salasAC, categoria: 'Otros', descripcion: 'Paraguas negro plegable', hallado_en: '2026-09-20T08:10:00', lugar_hallazgo: 'Salas AC, sala AC-12' },
    { ...bib, punto: puntos.salasAC, categoria: 'Electronica', descripcion: 'Cargador de notebook Lenovo', hallado_en: '2026-09-21T17:40:00', lugar_hallazgo: 'Salas AC, pasillo primer piso' },

    // NO visibles en el catalogo publico
    { ...bib, categoria: 'Documentos y tarjetas', descripcion: 'Billetera café con documentos', hallado_en: '2026-09-22T10:00:00', lugar_hallazgo: 'Biblioteca, baño primer piso', publicado: false },
    { ...face, categoria: 'Electronica', descripcion: 'Celular Samsung con pantalla trizada', hallado_en: '2026-08-20T13:30:00', lugar_hallazgo: 'FACE, laboratorio de computación', estado: 'entregado' },
    { ...bib, categoria: 'Ropa y accesorios', descripcion: 'Bufanda roja de lana', hallado_en: '2025-08-10T09:00:00', lugar_hallazgo: 'Biblioteca, perchero', estado: 'no_reclamado', registrado_en: '2025-08-10T10:00:00' },
  ];

  for (const [i, obj] of objetos.entries()) {
    await prisma.objeto.create({
      data: {
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
  }

  console.log(`Objetos: ${objetos.length} creados`);
}
