import { validarToken } from '../services/jwtService.js';
import { obtenerUsuarioDeSesion } from '../services/authService.js';
import { errorConCodigo } from '../utils/errorConCodigo.js';

// Lee el header "Authorization: Bearer <token>" y deja al usuario de la sesion en req.usuario
export async function autenticar(req, res, next) {
  try {
    const [tipo, token] = (req.get('authorization') ?? '').split(' ');

    if (tipo !== 'Bearer' || !token) {
      throw errorConCodigo('Debes iniciar sesion', 401);
    }

    const contenido = validarToken(token);

    // Se busca al usuario en la base de datos para usar su rol y oficina actuales
    // (y rechazar la sesion si la cuenta fue desactivada)
    req.usuario = await obtenerUsuarioDeSesion(contenido.id_usuario);

    return next();
  } catch (error) {
    return next(error);
  }
}

// Se usa despues de autenticar, por ejemplo: permitirRoles('encargado', 'administrador')
export function permitirRoles(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.usuario?.rol)) {
      return next(errorConCodigo('No tienes permiso para realizar esta accion', 403));
    }

    return next();
  };
}
