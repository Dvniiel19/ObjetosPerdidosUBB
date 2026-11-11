import { pedir } from './api.js';

// GET /api/inventario objetos del punto del encargado (el punto sale del token)
export function listarInventario({ texto = '', estado = 'en_custodia' } = {}) {
  const parametros = new URLSearchParams({ estado });
  if (texto.trim()) {
    parametros.set('texto', texto.trim());
  }
  return pedir(`/inventario?${parametros}`);
}