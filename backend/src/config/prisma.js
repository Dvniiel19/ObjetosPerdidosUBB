import prismaPkg from '../generated/prisma/index.js';

const { PrismaClient } = prismaPkg;

// Instancia única compartida por toda la app (evita agotar conexiones)
const prisma = new PrismaClient();

export default prisma;
