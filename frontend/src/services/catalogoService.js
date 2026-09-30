import { pedir } from './api.js';

// Solo se envían los filtros que el usuario completó.
export function buscarObjetos(filtros) {
  const parametros = new URLSearchParams();

  for (const [nombre, valor] of Object.entries(filtros)) {
    const limpio = String(valor ?? '').trim();
    if (limpio) parametros.set(nombre, limpio);
  }

  return pedir(`/objetos?${parametros}`);
}
