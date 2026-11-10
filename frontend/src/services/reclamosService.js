import { pedir } from './api.js';

export function crearReclamoService(datos) {
  return pedir('/reclamos', { metodo: 'POST', body: datos });
}

export function cambiarEstadoReclamoService(id, idUsuario, datos) {
  return pedir(`/reclamos/${id}/estado`, { metodo: 'PATCH', body: datos, idUsuario });
}

export function entregarReclamoService(id, idUsuario, datosValidacion) {
  return pedir(`/reclamos/${id}/entregar`, { metodo: 'POST', body: datosValidacion, idUsuario });
}
