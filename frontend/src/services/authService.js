import { pedir, guardarToken, obtenerToken, borrarToken } from './api.js';

// Muestra el rut con puntos y guion: 123456789 = 12.345.678-9
export function formatearRut(valor) {
    const limpio = valor.replace(/[^0-9kK]/g, '').toUpperCase().slice(0, 9);
    if (limpio.length <= 1) return limpio;
    const cuerpo = limpio.slice(0, -1).replace(/\D/g, '');
    const dv = limpio.slice(-1);
    return `${cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}-${dv}`;
}


export async function login(rut, contrasena, recordar = true) {
    const { token, usuario } = await pedir('/auth/login', {
        metodo: 'POST',
        body: { rut, contrasena },
    });
    guardarToken(token, recordar);
    return usuario;
}

export async function obtenerUsuarioActual() {
    if (!obtenerToken()) {
        return null;
    }

    try {
        return await pedir('/auth/yo');
    } catch {
        borrarToken();
        return null;
    }
}

export function logout() {
    borrarToken();
}