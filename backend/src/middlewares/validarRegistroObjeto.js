import { z } from 'zod';

const registroObjetoSchema = z.object({
  id_categoria: z.number()
    .int()
    .positive()
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

  fotografias: z.array(
    z.object({
      archivo_url: z.string()
        .trim()
        .url('La fotografía debe tener una URL válida')
        .refine(
          (url) => /^https?:\/\//i.test(url),
          'La URL debe usar HTTP o HTTPS',
        ),
    }).strict(),
  )
    .max(3, 'Se permiten hasta 3 fotografías')
    .default([]),
}).strict();

export function validarRegistroObjeto(req, res, next) {
  const resultado = registroObjetoSchema.safeParse(req.body);

  if (!resultado.success) {
    return res.status(400).json({
      mensaje: 'Los datos del objeto no son válidos',
      errores: resultado.error.issues.map((error) => ({
        campo: error.path.join('.') || 'body',
        mensaje: error.message,
      })),
    });
  }

  req.datosObjeto = resultado.data;

  return next();
}