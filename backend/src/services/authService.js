import bcrypt from 'bcryptjs';
import prisma from '../config/prisma.js';
import { generarToken } from './jwtService.js';
import { errorConCodigo } from '../utils/errorConCodigo.js';
import { minutosDeBloqueo, registrarFallo, resetearIntentos } from '../utils/intentosLogin.js';

const MENSAJE_CREDENCIALES = 'Correo o contrasena incorrectos';

// Datos para el front
const DATOS_PUBLICOS = {
  id_usuario: true,
  nombres: true,
  apellidos: true,
  correo_institucional: true,
  rol: true,
  id_punto: true,
};

export async function iniciarSesion({ correo, contrasena }) {
  // Si el correo esta bloqueado por muchos intentos ni siquiera se revisa
  const minutos = minutosDeBloqueo(correo);
  if (minutos > 0) {
    throw errorConCodigo(`Demasiados intentos fallidos. Intenta de nuevo en ${minutos} minuto(s)`, 429);
  }

  // Buscar al usuario por su correo
  const usuario = await prisma.usuario.findUnique({
    where: { correo_institucional: correo },
    select: { ...DATOS_PUBLICOS, activo: true, clave_hash: true },
  });

  // Comparar la contrasena con el hash guardado
  const contrasenaCorrecta = usuario
    ? await bcrypt.compare(contrasena, usuario.clave_hash)
    : false;

  if (!contrasenaCorrecta) {
    registrarFallo(correo);
    throw errorConCodigo(MENSAJE_CREDENCIALES, 401);
  }

  // Datos buenos pero la cuenta esta desactivada
  if (!usuario.activo) {
    throw errorConCodigo('Tu cuenta esta desactivada. Acercate a una oficina de objetos perdidos', 403);
  }

  // Si todo esta bien se olvidan los fallos y se crea el token
  resetearIntentos(correo);

  const { activo, clave_hash, ...datosUsuario } = usuario;
  const token = generarToken(datosUsuario);

  return { token, usuario: datosUsuario };
}

// Busca al usuario de una sesion para validar que la sesion sigue siendo valida y que el usuario sigue activo
export async function obtenerUsuarioDeSesion(idUsuario) {
  const usuario = await prisma.usuario.findUnique({
    where: { id_usuario: idUsuario },
    select: { ...DATOS_PUBLICOS, activo: true },
  });

  if (!usuario || !usuario.activo) {
    throw errorConCodigo('Tu sesion ya no es valida. Inicia sesion nuevamente', 401);
  }

  const { activo, ...datosUsuario } = usuario;
  return datosUsuario;
}