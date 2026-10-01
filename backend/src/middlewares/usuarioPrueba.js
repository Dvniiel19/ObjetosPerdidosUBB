import prisma from '../config/prisma.js';

// TEMPORAL: simula el login mientras no exista.
// En Postman se manda el header  x-usuario-id: <id del usuario>
// Cuando exista el login real, se cambia este middleware por el que lee el token.

import {errorConCodigo} from '../utils/errorConCodigo.js';

export async function usuarioPrueba(req, res, next) {
  try {
    if (process.env.NODE_ENV === 'production') {
      throw errorConCodigo('El usuario de prueba no esta disponible en produccion', 403);
    }

    const idUsuario = Number(req.get('x-usuario-id'));

    if (!Number.isInteger(idUsuario) || idUsuario <= 0) {
      throw errorConCodigo('Falta el header x-usuario-id con un id de usuario valido', 401);
    }

    const usuario = await prisma.usuario.findUnique({
      where: { id_usuario: idUsuario },
      select: { id_usuario: true, rol: true, id_punto: true, activo: true },
    });

    if (!usuario || !usuario.activo) {
      throw errorConCodigo('El usuario de prueba no existe o esta inactivo', 401);
    }

    req.usuario = {
      id_usuario: usuario.id_usuario,
      rol: usuario.rol,
      id_punto: usuario.id_punto,
    };

    return next();
  } catch (error) {
    return next(error);
  }
}
