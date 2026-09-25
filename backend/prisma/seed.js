// Seed de datos de prueba para desarrollo local.
// Uso: npx prisma db seed   (desde la carpeta backend)
//
// Cada area del sistema tiene su propio archivo en prisma/seeds/.
// Para agregar el tuyo: crea el archivo en seeds/ y agrega su llamada abajo,
// respetando el orden (primero lo que otras tablas necesitan).

import prismaPkg from '../src/generated/prisma/index.js';
import { seedBase } from './seeds/base.js';
import { seedObjetos } from './seeds/objetos.js';

const { PrismaClient } = prismaPkg;
const prisma = new PrismaClient();

// Todas las tablas, para vaciarlas antes de cargar datos nuevos.
// RESTART IDENTITY reinicia los ids en 1 para que los datos sean siempre iguales.
const TABLAS = [
  'BITACORA',
  'FOTOGRAFIA',
  'RECLAMO',
  'REPORTE_PERDIDA',
  'OBJETO',
  'ACTA_DESTRUCCION',
  'USUARIO',
  'PUNTO_ACOPIO',
  'CATEGORIA',
];

async function limpiarBaseDeDatos() {
  const lista = TABLAS.map((tabla) => `"${tabla}"`).join(', ');
  await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${lista} RESTART IDENTITY CASCADE`);
}

async function main() {
  console.log('Limpiando base de datos...');
  await limpiarBaseDeDatos();

  // 1. Datos base que usan todas las areas
  const base = await seedBase(prisma);

  // 2. Objetos en custodia
  await seedObjetos(prisma, base);

  // 3. Aqui van los seeds de las demas areas (reportes, reclamos, etc.)

  console.log('Seed completado.');
}

main()
  .catch((error) => {
    console.error('Error en el seed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
