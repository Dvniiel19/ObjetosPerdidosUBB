// Prueba manual del servicio de catalogo (sin servidor).
// Uso: node scripts/probar-catalogo.js   (desde la carpeta backend)

import prisma from '../src/config/prisma.js';
import { listarCatalogo } from '../src/services/objetos.service.js';

const objetos = await listarCatalogo();

console.log(`Objetos en el catalogo: ${objetos.length}\n`);
console.table(
  objetos.map((o) => ({
    codigo: o.codigo,
    descripcion: o.descripcion,
    categoria: o.categoria.nombre,
    punto: o.punto.nombre,
    hallado: o.hallado_en.toISOString().slice(0, 10),
  }))
);

await prisma.$disconnect();
