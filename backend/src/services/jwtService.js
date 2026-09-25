const jwt = require('jsonwebtoken');

// Configuración leída una sola vez desde el .env
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRY = process.env.JWT_EXPIRY || '8h';

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET no está definido en el .env');
}

/**
 * Genera un token JWT con los datos mínimos del usuario.
 * Se le puede pasar el usuario completo que devuelve Prisma:
 * solo se usan id_usuario y rol.
 * @param {object} usuario
 * @param {number} usuario.id_usuario
 * @param {string} usuario.rol - "usuario", "encargado" o "administrador"
 * @returns {string} Token JWT firmado
 */
const generarToken = ({ id_usuario, rol }) => {
    const payload = { id_usuario, rol };

    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRY,
        algorithm: 'HS256',
    });
};

/**
 * Verifica un token JWT y devuelve su contenido.
 * Recibe solo el token (sin "Bearer "); eso lo quita el middleware.
 * @param {string} token
 * @returns {object} Payload: id_usuario, rol, iat, exp
 * @throws {Error} Con status 401 si el token expiró o es inválido
 */
const validarToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            const err = new Error('Token expirado');
            err.status = 401;
            throw err;
        }
        if (error.name === 'JsonWebTokenError') {
            const err = new Error('Token inválido');
            err.status = 401;
            throw err;
        }
        // Cualquier otro error es un bug de programación: que se vea
        throw error;
    }
};

module.exports = {
    generarToken,
    validarToken,
};