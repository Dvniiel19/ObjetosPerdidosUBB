import 'dotenv/config'; // debe ser el primer import
import app from './src/app.js';
import prisma from './src/config/prisma.js';

const PORT = Number(process.env.PORT) || 3000;

async function iniciarServidor() {
  try {
    await prisma.$connect();
    console.log('Conexion a PostgreSQL establecida');
  } catch (error) {
    console.error('No se pudo conectar a PostgreSQL:', error.message);
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}/api`);
  });
}

iniciarServidor();
