// Prueba manual del servicio de catalogo (sin servidor).
// Uso (desde la carpeta backend):
//   node scripts/probarCatalogo.js            -> todo el catalogo
//   node scripts/probarCatalogo.js celular    -> busca "celular"

import prisma from '../src/config/prisma.js';
import { listarCatalogo } from '../src/services/objetosService.js';

const texto = process.argv.slice(2).join(' ');
const objetos = await listarCatalogo({ texto });

console.log(texto ? `Buscando: "${texto}"` : 'Catalogo completo');
console.log(`Objetos encontrados: ${objetos.length}\n`);
console.table(
  objetos.map((o) => ({
    id: o.id_objeto,
    descripcion: o.descripcion,
    categoria: o.categoria.nombre,
    punto: o.punto.nombre,
    hallado: o.hallado_en.toISOString().slice(0, 10),
  }))
);

await prisma.$disconnect();
