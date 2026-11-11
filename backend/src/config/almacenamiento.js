import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Configuracion del almacenamiento de archivos subidos (fotografias de objetos).
// Se lee una sola vez: index.js carga el .env antes de importar este archivo.

// Carpeta "backend/", calculada a partir de la ubicacion de este archivo
const CARPETA_BACKEND = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  '..',
);

// Carpeta raiz de los archivos subidos. Se cambia con UPLOADS_DIR en el .env
// (ruta absoluta, o relativa a la carpeta backend). Por defecto: backend/uploads
export const CARPETA_UPLOADS = path.resolve(
  CARPETA_BACKEND,
  process.env.UPLOADS_DIR || 'uploads',
);

// Las fotografias de los objetos se guardan en <UPLOADS_DIR>/objetos
export const CARPETA_FOTOS_OBJETOS = path.join(CARPETA_UPLOADS, 'objetos');

// Ruta publica con la que Express sirve esas fotografias.
// En la base de datos se guarda, por ejemplo: /uploads/objetos/<nombre>.jpg
export const RUTA_PUBLICA_FOTOS_OBJETOS = '/uploads/objetos';

// Req 02: "hasta 3 fotografias". El minimo esta pendiente de confirmar
// con el profesor; si se acepta registrar sin fotos, basta con poner 0.
export const MIN_FOTOGRAFIAS = 1;
export const MAX_FOTOGRAFIAS = 3;

// Tamano maximo por fotografia
export const TAMANO_MAXIMO_FOTO_MB = 5;
export const TAMANO_MAXIMO_FOTO = TAMANO_MAXIMO_FOTO_MB * 1024 * 1024;

// Formatos aceptados y la extension con la que se guarda cada uno
export const FORMATOS_PERMITIDOS = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
};
