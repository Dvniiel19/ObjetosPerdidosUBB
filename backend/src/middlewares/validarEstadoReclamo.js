import { estadoReclamoSchema } from '../schemas/estadoReclamoSchema.js';

export function validarEstadoReclamo(req, res, next) {
  const resultado = estadoReclamoSchema.safeParse(req.body);

  if (!resultado.success) {
    return res.status(400).json({
      mensaje: 'Los datos del estado no son válidos',
      errores: resultado.error.issues.map((error) => ({
        campo: error.path.join('.') || 'body',
        mensaje: error.message,
      })),
    });
  }

  req.datosEstado = resultado.data;

  return next();
}
