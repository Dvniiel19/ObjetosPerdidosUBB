// Middlewares de errores. Se registran al final de src/app.js.


// Ninguna ruta coincidio con la peticion
export function rutaNoEncontrada(req, res) {
  res.status(404).json({
    error: `Ruta no encontrada: ${req.method} ${req.originalUrl}`,
  });
}

// Traduce los codigos de error de prisma a codigos http  ayudantia3
function traducirErrorPrisma(err) {
  switch (err.code) {
    case 'P2002': {
      const campos = [].concat(err.meta?.target ?? []).join(', ');
      return {
        statusCode: 409,
        mensaje: `Conflicto: ya existe un registro con el mismo valor para ${campos || 'un campo unico'}`,
      };
    }
    case 'P2025':
      return {
        statusCode: 404,
        mensaje: 'El recurso solicitado no fue encontrado en la base de datos',
      };
    case 'P2003':
      return {
        statusCode: 400,
        mensaje: 'La relacion indicada no es valida (clave foranea inexistente)',
      };
    default:
      return null;
  }
}

// Para cualquier error que no haya sido manejado por los middlewares anteriores
export function manejarErrores(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  // El cuerpo de la peticion no es JSON valido 
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({
      error: 'El cuerpo de la peticion no es un JSON valido',
    });
  }

  const errorPrisma = traducirErrorPrisma(err);
  if (errorPrisma) {
    return res.status(errorPrisma.statusCode).json({ error: errorPrisma.mensaje });
  }

  const statusCode = err.statusCode ?? 500;

  if (statusCode >= 500) {
    console.error(err);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }

  return res.status(statusCode).json({ error: err.message });
}
