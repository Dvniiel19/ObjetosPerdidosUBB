import { z } from 'zod';

import { MIN_FOTOGRAFIAS } from '../config/almacenamiento.js';
import { construirUrlFotografia } from '../utils/archivos.js';

// Campos de texto del formulario. En multipart/form-data todo llega como texto,
// por eso id_categoria usa z.coerce (convierte "5" en 5).
// Las fotografias NO van aqui: llegan como archivos en req.files (subirFotografias).
const registroObjetoSchema = z.object({
  id_categoria: z.coerce.number({ message: 'La categoría debe ser un número' })
    .int('La categoría debe ser un número entero')
    .positive('Debes seleccionar una categoría')
    .max(32767),

  descripcion: z.string()
    .trim()
    .min(1, 'La descripción es obligatoria'),

  hallado_en: z.string()
    .datetime({
      offset: true,
      message: 'La fecha de hallazgo debe incluir hora y zona horaria',
    }),

  lugar_hallazgo: z.string()
    .trim()
    .min(1, 'El lugar de hallazgo es obligatorio'),
}).strict(); // rechaza campos que administra el servidor (id_punto, estado, etc.)

export function validarRegistroObjeto(req, res, next) {
  const resultado = registroObjetoSchema.safeParse(req.body ?? {});
  const archivos = req.files ?? [];

  const detalles = resultado.success
    ? []
    : resultado.error.issues.flatMap((issue) => {
      // Campo que no existe en el formulario o que asigna el servidor
      if (issue.code === 'unrecognized_keys') {
        return issue.keys.map((campo) => ({
          campo,
          mensaje: 'Este campo no se puede enviar: lo asigna el servidor o no existe',
        }));
      }

      return [{
        campo: issue.path.join('.') || 'body',
        mensaje: issue.message,
      }];
    });

  if (archivos.length < MIN_FOTOGRAFIAS) {
    detalles.push({
      campo: 'fotografias',
      mensaje: 'Debes adjuntar al menos una fotografía',
    });
  }

  if (detalles.length > 0) {
    return res.status(400).json({
      error: 'Los datos del objeto no son válidos',
      detalles,
    });
  }

  // El servidor genera la URL de cada foto; el orden de subida define la posicion
  req.datosObjeto = {
    ...resultado.data,
    fotografias: archivos.map((archivo) => ({
      archivo_url: construirUrlFotografia(archivo.filename),
    })),
  };

  return next();
}
