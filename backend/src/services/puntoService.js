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

export async function crearPunto({ nombre, ubicacion, encargados}){
    const nombreRepetido = await prisma.puntoAcopio.findFirst({
        where: {nombre: {equals: nombre, mode: 'insensitive'}},
        select: {id_punto: true},
    });

    if(nombreRepetido){
        throw errorConCodigo('Ya existe un punto con ese nombre', 409);
    }
    // Buscar a todos los encargados en una sola consulta
    const usuarios = await prisma.usuario.findMany({
        where: { id_usuario: {in: encargados}},
        select: { id_usuario: true, rol: true},
    });

    const encontrados = usuarios.map((usuario) => usuario.id_usuario);
    const noExisten = encargados.filter((id) => !encontrados.includes(id));

    if( noExisten.length > 0){
        throw errorConCodigo('No existen los usuarios con id: ' + noExisten.join(', '), 404);
    }

    // Todos deben tener rol de encargado
    const noEncargados = usuarios
        .filter((usuario) => usuario.rol !== 'encargado')
        .map((usuario) => usuario.id_usuario);

    if(noEncargados.length > 0){
        throw errorConCodigo('Estos usuarios no tienen rol encargado: ' + noEncargados.join(', '), 400);    
    }

    //Crear el punto y asignar los encargados juntos

    return prisma.$transaction(async (tx) => {
        const punto = await tx.puntoAcopio.create({
            data: {nombre, ubicacion, habilitado: true, publicado: true},
        });

        await tx.usuario.updateMany({
            where: {id_usuario: {in: encargados}},
            data: {id_punto: punto.id_punto},
        });

        return tx.puntoAcopio.findUnique({
            where: {id_punto: punto.id_punto},
            select: {
                id_punto: true,
                nombre: true,
                ubicacion: true,
                habilitado: true,
                publicado: true,
                encargados: {
                    select: { id_usuario:true, nombres: true, apellidos: true, correo_institucional: true},
                },
            },
        });
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

export async function desactivarPunto(idPunto){
    const punto = await prisma.puntoAcopio.findUnique({
        where: {id_punto: idPunto},
        select: {id_punto: true, habilitado: true},
    });

    if(!punto){
        throw errorConCodigo('El punto no existe', 404);
    }

    if(!punto.habilitado){
        throw errorConCodigo('El punto ya esta desactivado', 409);
    }
    // Si tiene objetos en custodia no se puede:

    const objetosEnCustodia = await prisma.objeto.count({
        where: {id_punto: idPunto, estado: 'en_custodia'},
    });

    if(objetosEnCustodia > 0){
        throw errorConCodigo('No se puede desactivar el punto porque tiene objetos en custodia', 409);
    }

    return prisma.$transaction(async (tx) => {
        await tx.usuario.updateMany({
            where: {id_punto: idPunto},
            data: {id_punto: null},
        });

        return tx.puntoAcopio.update({
            where: {id_punto: idPunto},
            data: {habilitado: false, publicado: false},
            select: {id_punto: true, nombre: true, ubicacion: true, habilitado: true, publicado: true},
        });
    });
}

export async function obtenerTodosLosPuntos(){
    return prisma.puntoAcopio.findMany({
        select: {
            id_punto: true,
            nombre: true,
            ubicacion: true,
            habilitado: true,
            publicado: true,
            encargados: { 
                select: {id_usuario: true, nombres: true, apellidos: true},
            },
        // Cuantos objetos en custodia tiene cada punto, si tiene mas de 0 no se puede desactivar
            _count: {
                select: {objetos: {where: {estado: 'en_custodia'}}},
            },
    },
    orderBy: {nombre: 'asc'},
    });
}

export async function listarEncargados(){
    return prisma.usuario.findMany({
        where: {rol: 'encargado', activo: true},
        select: {
            id_usuario: true,
            nombres: true,
            apellidos: true,
            correo_institucional: true,
            punto: {select: {id_punto: true, nombre: true}},
        },
        orderBy: {apellidos: 'asc'},
    });
}