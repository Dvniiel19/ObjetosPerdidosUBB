import { iniciarSesion } from '../services/authService.js';

// POST /api/auth/login, devuelve { token, usuario }
export async function login(req, res, next) {
  try {
    const resultado = await iniciarSesion(req.body);
    return res.json(resultado);
  } catch (error) {
    return next(error);
  }
}
