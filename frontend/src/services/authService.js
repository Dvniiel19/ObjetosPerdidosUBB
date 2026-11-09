import {pedir, guardarToken, obtenerToken, borrarToken} from './api.js';

const DOMINIOS = ['@alumnos.ubiobio.cl', '@ubiobio.cl', '@ubb.cl'];

export function esUBB(correo){
    const limpio = correo.trim().toLowerCase();
    return DOMINIOS.some((dominio)=> limpio.endsWith(dominio));
}

export async function login(correo, contrasena){
    const {token, usuario} = await pedir('/auth/login',{
        metodo: 'POST',
        body: {correo, contrasena},
    });
    guardarToken(token);
    return usuario;
}

export async function obtenerUsuarioActual(){
    if( !obtenerToken()){
        return null;
    }

    try{
        return await pedir('/auth/yo');
    } catch {
        borrarToken();
        return null;
    }
}

export function logout(){
    borrarToken();
}