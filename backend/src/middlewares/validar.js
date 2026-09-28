
export function validar(esquema, origen = 'body') {
  return (req, res, next) => {
    const resultado = esquema.safeParse(req[origen]);

    if (!resultado.success) {
      // errores que vienen en los issues
      const detalles = resultado.error.issues.map((issue) => ({
        campo: issue.path.join('.') || origen,
        mensaje: issue.message,
      }));

      return res.status(400).json({
        error: 'Error de validacion en los datos enviados',
        detalles,
      });
    }

    req[origen] = resultado.data;
    return next();
  };
}
