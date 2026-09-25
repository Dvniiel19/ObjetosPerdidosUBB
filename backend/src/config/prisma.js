const { PrismaClient } = require('@prisma/client');

// Instancia única compartida por toda la app (evita agotar conexiones)
const prisma = new PrismaClient();

module.exports = prisma;
