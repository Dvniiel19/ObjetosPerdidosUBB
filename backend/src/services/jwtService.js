import jwt from 'jsonwebtoken';

// Configuracion leida una sola vez desde el .env
// (index.js carga el .env antes de importar cualquier otro archivo)
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRY = process.env.JWT_EXPIRY || '8h';

// Un secreto corto se puede adivinar por fuerza bruta a partir de cualquier token,
// y con el se podrian firmar tokens falsos (por ejemplo, de administrador)
const LARGO_MINIMO_SECRETO = 32;

if (!JWT_SECRET || JWT_SECRET.length < LARGO_MINIMO_SECRETO) {
  throw new Error(
    `JWT_SECRET debe estar definido en el .env y tener al menos ${LARGO_MINIMO_SECRETO} caracteres. `
    + 'Genera uno con: openssl rand -hex 32',
  );
}

/**
 * Genera un token JWT con los datos minimos del usuario.
 * Se le puede pasar el usuario completo que devuelve Prisma:
 * solo se usan id_usuario y rol.
 * @param {object} usuario
 * @param {number} usuario.id_usuario
 * @param {string} usuario.rol - "usuario", "encargado" o "administrador"
 * @returns {string} Token JWT firmado
 */
export function generarToken({ id_usuario, rol }) {
  const payload = { id_usuario, rol };

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRY,
    algorithm: 'HS256',
  });
}

/**
 * Verifica un token JWT y devuelve su contenido.
 * Recibe solo el token (sin "Bearer "); eso lo quita el middleware.
 * @param {string} token
 * @returns {object} Payload: id_usuario, rol, iat, exp
 * @throws {Error} Con statusCode 401 si el token expiro o es invalido
 */
export function validarToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      const err = new Error('Token expirado');
      err.statusCode = 401;
      throw err;
    }
    if (error.name === 'JsonWebTokenError') {
      const err = new Error('Token invalido');
      err.statusCode = 401;
      throw err;
    }
    // Cualquier otro error es un bug de programacion: que se vea
    throw error;
  }
}
