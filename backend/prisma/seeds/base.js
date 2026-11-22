// Datos base compartidos: categorias, puntos de acopio y usuarios.
// Devuelve los registros creados para que los otros seeds los usen.

import bcrypt from 'bcryptjs';

// Clave de prueba para todos los usuarios del seed (solo desarrollo local)
export const CLAVE_PRUEBA = 'clave123';

export async function seedBase(prisma) {
  const clave_hash = await bcrypt.hash(CLAVE_PRUEBA, 10);

  const nombresCategorias = [
    'Electronica',
    'Ropa y accesorios',
    'Documentos y tarjetas',
    'Llaves',
    'Mochilas y bolsos',
    'Utiles y libros',
    'Otros',
  ];

  const metodosPorCategoria = {
    'Electronica': ['Numero de serie', 'Boleta de compra', 'Fotografia con el objeto'],
    'Ropa y accesorios': ['Boleta de compra', 'Fotografia con el objeto', 'Marca y talla'],
    'Documentos y tarjetas': ['Nombre del titular', 'Fotografia del documento', 'Numero de documento'],
    'Llaves': ['Descripcion detallada', 'Fotografia con el objeto', 'Numero de llave'],
    'Mochilas y bolsos': ['Boleta de compra', 'Fotografia con el objeto', 'Contenido de la mochila'],
    'Utiles y libros': ['Boleta de compra', 'Fotografia con el objeto', 'Nombre o numero de serie'],
    'Otros': ['Descripcion detallada', 'Fotografia con el objeto', 'Boleta de compra'],
  };

  const categorias = {};
  for (const nombre of nombresCategorias) {
    categorias[nombre] = await prisma.categoria.create({
      data: {
        nombre,
        metodos_verificacion: metodosPorCategoria[nombre] || [],
      },
    });
  }

  const puntos = {
    biblioteca: await prisma.puntoAcopio.create({
      data: {
        nombre: 'Biblioteca Central',
        codigo: 'BIB',
        ubicacion: 'Primer piso, mesón de atención',
        latitud: -36.821582,
        longitud: -73.011741,
        publicado: true,
      },
    }),
    face: await prisma.puntoAcopio.create({
      data: {
        nombre: 'FACE',
        codigo: 'FACE',
        ubicacion: 'Facultad de Ciencias Empresariales, secretaría',
        latitud: -36.821797,
        longitud: -73.01121,
        publicado: true,
      },
    }),
    salasAC: await prisma.puntoAcopio.create({
      data: {
        nombre: 'Salas AC',
        codigo: 'SAC',
        ubicacion: 'Edificio de salas AC, primer piso',
        latitud: -36.822548,
        longitud: -73.01114,
        publicado: true,
      },
    }),
    arquitectura: await prisma.puntoAcopio.create({
      data: {
        nombre: 'Arquitectura',
        codigo: 'ARQ',
        ubicacion: 'Facultad de Arquitectura, hall de entrada',
        latitud: -36.821262,
        longitud: -73.01331,
        publicado: true,
      },
    }),
    gantes: await prisma.puntoAcopio.create({
      data: {
        nombre: 'Gantes',
        codigo: 'GAN',
        ubicacion: 'Edificio Gantes, primer piso',
        latitud: -36.821722,
        longitud: -73.014268,
        publicado: true,
      },
    }),
    casino: await prisma.puntoAcopio.create({
      data: {
        nombre: 'Casino',
        codigo: 'CAS',
        ubicacion: 'Casino, junto a la caja',
        latitud: -36.823004,
        longitud: -73.010456,
        publicado: true,
      },
    }),
    gimnasio: await prisma.puntoAcopio.create({
      data: {
        nombre: 'Gimnasio',
        codigo: 'GIM',
        ubicacion: 'Gimnasio, acceso principal',
        latitud: -36.822048,
        longitud: -73.015292,
        publicado: true,
      },
    }),
  };

  const usuarios = {
    admin: await prisma.usuario.create({
      data: {
        correo_institucional: 'admin@ubiobio.cl',
        rut: '11111111-1',
        clave_hash,
        nombres: 'Ana',
        apellidos: 'Administradora',
        rol: 'administrador',
      },
    }),
    encargadoBiblioteca: await prisma.usuario.create({
      data: {
        correo_institucional: 'encargado.biblioteca@ubiobio.cl',
        rut: '22222222-2',
        clave_hash,
        nombres: 'Bruno',
        apellidos: 'Encargado',
        rol: 'encargado',
        id_punto: puntos.biblioteca.id_punto,
      },
    }),
    encargadoFace: await prisma.usuario.create({
      data: {
        correo_institucional: 'encargado.face@ubiobio.cl',
        rut: '33333333-3',
        clave_hash,
        nombres: 'Carla',
        apellidos: 'Encargada',
        rol: 'encargado',
        id_punto: puntos.face.id_punto,
      },
    }),
    estudiante: await prisma.usuario.create({
      data: {
        correo_institucional: 'estudiante@alumnos.ubiobio.cl',
        rut: '44444444-4',
        clave_hash,
        nombres: 'Diego',
        apellidos: 'Estudiante',
        rol: 'usuario',
      },
    }),
  };

  console.log(
    `Base: ${nombresCategorias.length} categorias, ${Object.keys(puntos).length} puntos, ${Object.keys(usuarios).length} usuarios`
  );

  return { categorias, puntos, usuarios };
}
