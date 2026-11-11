import { pedir } from './api.js';

// Servicios del RF1: retención, destrucción segura, historial y reportes.
// Todas estas rutas responden { exito, datos }, así que aquí se devuelve solo "datos".

// GET /api/retencion/alertas (Encargado: su punto · Administrador: todos)
export async function listarAlertasRetencion() {
  const respuesta = await pedir('/retencion/alertas');
  return respuesta.datos;
}

// GET /api/destrucciones/candidatos (solo Administrador)
export async function listarCandidatosDestruccion() {
  const respuesta = await pedir('/destrucciones/candidatos');
  return respuesta.datos;
}

// GET /api/destrucciones (solo Administrador): actas registradas
export async function listarActasDestruccion() {
  const respuesta = await pedir('/destrucciones');
  return respuesta.datos;
}

// POST /api/destrucciones (solo Administrador)
// El responsable y la fecha los pone el servidor.
export function registrarDestruccion(idObjeto, archivoUrl) {
  return pedir('/destrucciones', {
    metodo: 'POST',
    body: { id_objeto: idObjeto, archivo_url: archivoUrl },
  });
}

// GET /api/historial/objetos/:id (solo Administrador)
export async function obtenerHistorialObjeto(idObjeto) {
  const respuesta = await pedir(`/historial/objetos/${idObjeto}`);
  return respuesta.datos;
}

// GET /api/reportes/estadisticas (solo Administrador)
export async function obtenerEstadisticas() {
  const respuesta = await pedir('/reportes/estadisticas');
  return respuesta.datos;
}
