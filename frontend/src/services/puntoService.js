import { pedir } from './api.js';

// GET /api/puntos/todos (solo admin) todos los puntos con encargados y objetos en custodia
export function obtenerTodosLosPuntos() {
    return pedir('/puntos/todos');
}

// GET /api/puntos/encargados (solo admin) elegir el encargado para crear el punto
export function listarEncargados() {
    return pedir('/puntos/encargados');
}

// POST /api/puntos (solo admin) crear un punto
export function crearPunto(datos) {
    return pedir('/puntos', { metodo: 'POST', body: datos });
}

// PATCH /api/puntos/:id/desactivar (solo admin) desactivar punto
export function desactivarPunto(idPunto) {
    return pedir(`/puntos/${idPunto}/desactivar`, { metodo: 'PATCH' });
}

// POST /api/puntos/encargados (solo admin) crear la cuenta de un encargado
export function crearEncargado(datos) {
    return pedir('/puntos/encargados', { metodo: 'POST', body: datos });
}

// PATCH /api/puntos/:id/encargados (solo admin) mover un encargado a otro punto
export function cambiarPuntoEncargado(idPunto, idUsuario) {
    return pedir(`/puntos/${idPunto}/encargados`, { metodo: 'PATCH', body: { id_usuario: idUsuario } });
}

// PATCH /api/puntos/encargados/:id/desactivar (solo admin) desactivar la cuenta de un encargado
export function desactivarEncargado(idUsuario) {
    return pedir(`/puntos/encargados/${idUsuario}/desactivar`, { metodo: 'PATCH' });
}
