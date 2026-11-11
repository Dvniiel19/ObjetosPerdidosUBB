import { listarInventario } from '../services/inventarioService.js';

// GET /api/inventario
export async function mostrarInventario(req, res, next) {
  try {
    const objetos = await listarInventario(req.usuario, req.query);
    return res.json(objetos);
  } catch (error) {
    return next(error);
  }
}