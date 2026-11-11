import { pedir } from './api.js';

// GET /api/categoria: categorías para el formulario de registro
export function listarCategorias() {
  return pedir('/categoria');
}

// POST /api/objetos (solo Encargado): registra un objeto con sus fotografías.
// Se envía como FormData (multipart/form-data) porque incluye archivos.
// El punto de acopio, el autor y la fecha de registro los pone el servidor.
export function registrarObjeto({ id_categoria, descripcion, lugar_hallazgo, hallado_en, fotografias }) {
  const formulario = new FormData();
  formulario.append('id_categoria', id_categoria);
  formulario.append('descripcion', descripcion);
  formulario.append('lugar_hallazgo', lugar_hallazgo);
  formulario.append('hallado_en', hallado_en);

  // Todas las fotos van con el mismo nombre de campo: "fotografias"
  for (const archivo of fotografias) {
    formulario.append('fotografias', archivo);
  }

  return pedir('/objetos', { metodo: 'POST', body: formulario });
}
