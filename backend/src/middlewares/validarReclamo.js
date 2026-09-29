import { crearReclamoSchema } from '../schemas/reclamosSchema.js';

export function validarReclamo(req, res, next) {
  const resultado = crearReclamoSchema.safeParse(req.body);

  if (!resultado.success) {
    return res.status(400).json({
      mensaje: 'Los datos del reclamo no son válidos',
      errores: resultado.error.issues.map((error) => ({
        campo: error.path.join('.') || 'body',
        mensaje: error.message,
      })),
    });
  }

  req.datosReclamo = resultado.data;

  return next();
}
