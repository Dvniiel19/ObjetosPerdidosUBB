import { pedir } from './api.js';

export function buscarObjetos(texto) {
  return pedir(`/objetos?texto=${encodeURIComponent(texto.trim())}`);
}
