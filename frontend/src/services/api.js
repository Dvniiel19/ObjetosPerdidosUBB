
const API_URL = import.meta.env.VITE_API_URL;

export async function pedir(ruta, {metodo = 'GET', body, idUsuario} ={}){
    const headers = { 'Content-Type': 'application/json'};

    if(idUsuario){
        headers['x-usuario-id'] = String(idUsuario); // mientras se implementa el login
    }

    const respuesta = await fetch(`${API_URL}${ruta}`, {
        method: metodo,
        headers,
        body: body ? JSON.stringify(body) : undefined,
    });

    const datos = await respuesta.json();

    if(!respuesta.ok){
        const error = new Error(datos.error ?? 'Error al comunicarse con el servidor');
        error.detalles = datos.detalles ?? []; 
        throw error; 
    }
    return datos;
}
