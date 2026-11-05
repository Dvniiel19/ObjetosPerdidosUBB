import crypto from 'node:crypto';
import multer from 'multer';

import {
  CARPETA_FOTOS_OBJETOS,
  FORMATOS_PERMITIDOS,
  MAX_FOTOGRAFIAS,
  TAMANO_MAXIMO_FOTO,
  TAMANO_MAXIMO_FOTO_MB,
} from '../config/almacenamiento.js';
import { eliminarArchivos, esImagenValida } from '../utils/archivos.js';

// Nombre del campo del formulario (form-data) que trae los archivos
const CAMPO_FOTOGRAFIAS = 'fotografias';

// multer guarda cada archivo en disco con un nombre aleatorio (UUID).
// Nunca se usa el nombre original: podria repetirse o traer caracteres peligrosos.
// Si la carpeta no existe, multer la crea.
const almacenamiento = multer.diskStorage({
  destination: CARPETA_FOTOS_OBJETOS,
  filename: (req, archivo, cb) => {
    cb(null, `${crypto.randomUUID()}${FORMATOS_PERMITIDOS[archivo.mimetype]}`);
  },
});

const recibirFotografias = multer({
  storage: almacenamiento,
  limits: {
    fileSize: TAMANO_MAXIMO_FOTO, // bytes por archivo
    files: MAX_FOTOGRAFIAS, // cantidad de archivos
    fields: 10, // cantidad de campos de texto
    fieldSize: 10 * 1024, // largo maximo de cada campo de texto
  },
  // Se ejecuta antes de guardar cada archivo: descarta formatos no permitidos
  fileFilter: (req, archivo, cb) => {
    if (!FORMATOS_PERMITIDOS[archivo.mimetype]) {
      return cb(new multer.MulterError('FORMATO_NO_PERMITIDO', archivo.fieldname));
    }

    return cb(null, true);
  },
}).array(CAMPO_FOTOGRAFIAS, MAX_FOTOGRAFIAS);

// Traduce los errores de multer a un mensaje entendible
function mensajeErrorMulter(error) {
  switch (error.code) {
    case 'LIMIT_FILE_SIZE':
      return `Cada fotografía puede pesar hasta ${TAMANO_MAXIMO_FOTO_MB} MB`;
    case 'LIMIT_FILE_COUNT':
      return `Se permiten hasta ${MAX_FOTOGRAFIAS} fotografías`;
    case 'LIMIT_UNEXPECTED_FILE':
      return error.field === CAMPO_FOTOGRAFIAS
        ? `Se permiten hasta ${MAX_FOTOGRAFIAS} fotografías`
        : `Las fotografías deben enviarse en el campo "${CAMPO_FOTOGRAFIAS}"`;
    case 'FORMATO_NO_PERMITIDO':
      return 'Solo se permiten fotografías JPG, PNG o WEBP';
    default:
      return 'No se pudieron recibir las fotografías';
  }
}

// Mismo formato de error que validarRegistroObjeto
function responderErrorFotografias(res, mensaje) {
  return res.status(400).json({
    error: 'Los datos del objeto no son válidos',
    detalles: [{ campo: CAMPO_FOTOGRAFIAS, mensaje }],
  });
}

// Recibe un formulario multipart/form-data: los campos de texto quedan en
// req.body y las fotografias (ya guardadas en disco) en req.files.
export function subirFotografias(req, res, next) {
  // Cuando termine la peticion, si la respuesta fue un error (400, 403, 500...)
  // o el cliente se desconecto, se borran las fotos guardadas para no dejar
  // archivos de objetos que nunca se registraron.
  res.on('close', () => {
    if ((res.statusCode >= 400 || !res.writableFinished) && req.files?.length) {
      eliminarArchivos(req.files);
    }
  });

  recibirFotografias(req, res, async (error) => {
    if (error instanceof multer.MulterError) {
      return responderErrorFotografias(res, mensajeErrorMulter(error));
    }

    if (error) {
      return next(error);
    }

    try {
      for (const archivo of req.files ?? []) {
        if (!(await esImagenValida(archivo.path, archivo.mimetype))) {
          return responderErrorFotografias(
            res,
            `El archivo "${archivo.originalname}" no es una imagen válida`,
          );
        }
      }

      return next();
    } catch (errorLectura) {
      return next(errorLectura);
    }
  });
}
