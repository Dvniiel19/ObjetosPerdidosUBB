// Dirección de la API. En desarrollo viene del archivo .env (VITE_API_URL=http://localhost:3000/api)
// y en el servidor es simplemente "/api".
const API_URL = import.meta.env.VITE_API_URL ?? '/api';
const LLAVE_TOKEN = 'token';

export function guardarToken(token) {
  localStorage.setItem(LLAVE_TOKEN, token);
}

export function obtenerToken() {
  return localStorage.getItem(LLAVE_TOKEN);
}

export function borrarToken() {
  localStorage.removeItem(LLAVE_TOKEN);
}

// Convierte la ruta de un archivo guardado ("/uploads/objetos/abc.jpg") en una
// dirección que el navegador puede abrir. En desarrollo el backend está en otro
// puerto (3000), así que se le antepone su dirección; en el servidor no hace falta.
export function urlArchivo(ruta) {
  if (!ruta) return '';
  if (/^https?:\/\//i.test(ruta)) return ruta;
  const origen = /^https?:\/\//i.test(API_URL) ? new URL(API_URL).origin : '';
  return `${origen}${ruta}`;
}

// Hace una petición a la API y devuelve la respuesta ya convertida desde JSON.
// - body puede ser un objeto (se envía como JSON) o un FormData (para subir archivos).
// - Si la API responde con error, lanza un Error con: message, status y detalles.
export async function pedir(ruta, { metodo = 'GET', body } = {}) {
  const headers = {};
  const esFormulario = body instanceof FormData;

  // Con FormData NO se indica Content-Type: el navegador lo agrega solo,
  // junto con el separador que necesita el servidor para leer los archivos.
  if (body && !esFormulario) {
    headers['Content-Type'] = 'application/json';
  }

  // Si hay sesión, se manda el token en cada petición
  const token = obtenerToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let respuesta;
  try {
    respuesta = await fetch(`${API_URL}${ruta}`, {
      method: metodo,
      headers,
      body: esFormulario ? body : body ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error('No se pudo conectar con el servidor. Revisa tu conexión e inténtalo de nuevo.');
  }

  const datos = await respuesta.json().catch(() => ({}));

  if (!respuesta.ok) {
    // Token vencido: se avisa a toda la app para volver al login
    if (respuesta.status === 401 && token) {
      borrarToken();
      window.dispatchEvent(new Event('sesion-expirada'));
    }

    // La API usa dos formatos de error: { error, detalles } y { mensaje, errores }
    const error = new Error(datos.error ?? datos.mensaje ?? 'Error al comunicarse con el servidor');
    error.status = respuesta.status;
    error.detalles = datos.detalles ?? datos.errores ?? [];
    throw error;
  }

  return datos;
}
