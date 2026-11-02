
const API_URL = import.meta.env.VITE_API_URL;
const LLAVE_TOKEN = 'token';

export function guardarToken(token){
    localStorage.setItem(LLAVE_TOKEN, token);
}

export function obtenerToken(){
    return localStorage.getItem(LLAVE_TOKEN);
}

export function borrarToken(){
    localStorage.removeItem(LLAVE_TOKEN);
}

export async function pedir(ruta, {metodo = 'GET', body, idUsuario} = {}) {
    const headers = {'Content-Type': 'application/json'};

    //si hay sesion, se manda el token en cada peticion
    const token= obtenerToken();
    if(token){
        headers.Authorization = `Bearer ${token}`;
    }

    // TEMPORAL LAS RUTAS TODAVIA SE USAN EN PRUEBA @NACHO Y @MATII
    if (idUsuario) {
        headers['x-usuario-id'] = String(idUsuario);
    }

    const respuesta = await fetch(`${API_URL}${ruta}`, {
        method: metodo,
        headers,
        body: body ? JSON.stringify(body) : undefined,
    });

    const datos = await respuesta.json().catch(() => ({}));

    if (!respuesta.ok) {
        // Token vencido se avisa a toda la app para volver al login
        if (respuesta.status === 401 && token) {
            borrarToken();
            window.dispatchEvent(new Event('sesion-expirada'));
        }

        const error = new Error(datos.error ?? 'Error al comunicarse con el servidor');
        error.status = respuesta.status;
        error.detalles = datos.detalles ?? [];
        throw error;
    }

    return datos;

}