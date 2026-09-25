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

  const categorias = {};
  for (const nombre of nombresCategorias) {
    categorias[nombre] = await prisma.categoria.create({ data: { nombre } });
  }

  const puntos = {
    biblioteca: await prisma.puntoAcopio.create({
      data: {
        nombre: 'Biblioteca Central',
        ubicacion: 'Primer piso, mesón de atención',
        publicado: true,
      },
    }),
    face: await prisma.puntoAcopio.create({
      data: {
        nombre: 'FACE',
        ubicacion: 'Facultad de Ciencias Empresariales, secretaría',
        publicado: true,
      },
    }),
    salasAC: await prisma.puntoAcopio.create({
      data: {
        nombre: 'Salas AC',
        ubicacion: 'Edificio de salas AC, primer piso',
        publicado: true,
      },
    }),
  };

  const usuarios = {
    admin: await prisma.usuario.create({
      data: {
        correo_institucional: 'admin@ubiobio.cl',
        clave_hash,
        nombres: 'Ana',
        apellidos: 'Administradora',
        rol: 'administrador',
      },
    }),
    encargadoBiblioteca: await prisma.usuario.create({
      data: {
        correo_institucional: 'encargado.biblioteca@ubiobio.cl',
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
