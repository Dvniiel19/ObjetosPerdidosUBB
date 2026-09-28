import { pedir } from './api.js';

export function entregarReclamoService(id, datosValidacion) {
  return pedir(`/reclamos/${id}/entregar`, { metodo: 'POST', body: datosValidacion });
}
