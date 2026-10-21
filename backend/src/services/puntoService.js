import prisma from '../config/prisma.js';
import { errorConCodigo } from '../utils/errorConCodigo.js';

// Solo los puntos publicados se muestran a los usuarios.
export async function listarPuntos(){
    return prisma.puntoAcopio.findMany({
        where: { publicado: true },
        select: {
            id_punto: true, nombre: true, ubicacion: true},
            orderBy: { nombre: 'asc'},
    });
}

export async function crearPunto({ nombre, ubicacion}){
    const nombreRepetido = await prisma.puntoAcopio.findFirst({
        where: {nombre: {equals: nombre, mode: 'insensitive'}},
        select: {id_punto: true},
    });

    if(nombreRepetido){
        throw errorConCodigo('Ya existe un punto con ese nombre', 409);
    }

    return prisma.puntoAcopio.create({
        data: { nombre, ubicacion},
        select: { id_punto: true, nombre: true, ubicacion: true, publicado: true, habilitado: true },
    });
}

export async function asignarEncargado(id_punto, id_usuario){
    const punto = await prisma.puntoAcopio.findUnique({
        where: {id_punto: id_punto},
        select: {id_punto: true},
    });

    if(!punto){
        throw errorConCodigo('El punto no existe',404);
    }

    const usuario= await prisma.usuario.findUnique({
        where: {id_usuario: id_usuario},
        select: {rol: true},
    });

    if(!usuario){
        throw errorConCodigo('El usuario no existe',404);
    }

    if( usuario.rol !== 'encargado'){
        throw errorConCodigo('El usuario no tiene rol de encargado',400);
    }

    return prisma.usuario.update({
        where: {id_usuario: id_usuario},
        data: {id_punto: id_punto},
        select: {
            id_usuario: true,
            nombres: true,
            apellidos: true,
            correo_institucional: true,
            punto: {select: { id_punto:true, nombre: true}},
        },
    });
}