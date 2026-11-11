import fs from 'node:fs/promises';

import { RUTA_PUBLICA_FOTOS_OBJETOS } from '../config/almacenamiento.js';

// URL publica de una fotografia guardada, por ejemplo: /uploads/objetos/abc.jpg
export function construirUrlFotografia(nombreArchivo) {
  return `${RUTA_PUBLICA_FOTOS_OBJETOS}/${nombreArchivo}`;
}

// El tipo (mimetype) lo informa el navegador o Postman y se puede falsificar.
// Por eso tambien se revisan los primeros bytes del archivo ("firma"),
// que son distintos en cada formato de imagen.
function tieneFirmaDeImagen(bytes, mimetype) {
  switch (mimetype) {
    case 'image/jpeg':
      return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
    case 'image/png':
      return bytes.subarray(0, 8).equals(
        Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
      );
    case 'image/webp':
      return bytes.toString('ascii', 0, 4) === 'RIFF'
        && bytes.toString('ascii', 8, 12) === 'WEBP';
    default:
      return false;
  }
}

// Lee los primeros 12 bytes del archivo guardado y comprueba su firma
export async function esImagenValida(rutaArchivo, mimetype) {
  const archivo = await fs.open(rutaArchivo, 'r');

  try {
    const { buffer, bytesRead } = await archivo.read(Buffer.alloc(12), 0, 12, 0);
    return bytesRead === 12 && tieneFirmaDeImagen(buffer, mimetype);
  } finally {
    await archivo.close();
  }
}

// Borra archivos subidos por multer (cada uno trae su ruta en "path").
// Un error al borrar solo se informa en consola: no debe cambiar la respuesta.
export async function eliminarArchivos(archivos = []) {
  await Promise.all(
    archivos.map((archivo) => fs.rm(archivo.path, { force: true })
      .catch((error) => {
        console.error(`No se pudo eliminar el archivo ${archivo.path}:`, error.message);
      })),
  );
}
