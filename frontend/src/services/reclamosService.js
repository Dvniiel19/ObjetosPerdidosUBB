import { pedir } from './api.js';

export function crearReclamoService(datos) {
  return pedir('/reclamos', { metodo: 'POST', body: datos });
}

export function cambiarEstadoReclamoService(id, datos) {
  return pedir(`/reclamos/${id}/estado`, { metodo: 'PATCH', body: datos });
}

export function entregarReclamoService(id, datosValidacion) {
  return pedir(`/reclamos/${id}/entregar`, { metodo: 'POST', body: datosValidacion });
}
