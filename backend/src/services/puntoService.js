import prisma from '../config/prisma.js';
import { errorConCodigo } from '../utils/errorConCodigo.js';
import bcrypt from 'bcryptjs';
import { randomInt } from 'node:crypto'; //Para generar clave aleatoria a los encargados


const CARACTERES_CLAVE = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';

const DATOS_ENCARGADO = {
    id_usuario: true,
    rut: true,
    nombres: true,
    apellidos: true,
    correo_institucional: true,
    activo: true,
    punto: { select: { id_punto: true, nombre: true } },
};

function generarClaveTemporal() {
    let clave = '';
    for (let i = 0; i < 8; i++) {
        clave += CARACTERES_CLAVE[randomInt(CARACTERES_CLAVE.length)];
    }
    return clave;
}

async function contarOtrosEncargados(tx, idPunto, idUsuario) {
    return tx.usuario.count({
        where: { id_punto: idPunto, rol: 'encargado', activo: true, NOT: { id_usuario: idUsuario } },
    });
}

// Solo los puntos publicados se muestran a los usuarios.
export async function listarPuntos(){
    return prisma.puntoAcopio.findMany({
        where: { publicado: true },
        select: {
            id_punto: true, nombre: true, ubicacion: true, latitud: true, longitud: true},
            orderBy: { nombre: 'asc'},
    });
}

export async function crearPunto({ nombre, codigo, ubicacion, latitud, longitud, encargados}){
    const nombreRepetido = await prisma.puntoAcopio.findFirst({
        where: {nombre: {equals: nombre, mode: 'insensitive'}},
        select: {id_punto: true},
    });

    if(nombreRepetido){
        throw errorConCodigo('Ya existe un punto con ese nombre', 409);
    }

    // El codigo tampoco se puede repetir, porque identifica los numeros de sus objetos
    const codigoRepetido = await prisma.puntoAcopio.findUnique({
        where: { codigo },
        select: { id_punto: true },
    });

    if(codigoRepetido){
        throw errorConCodigo('Ya existe un punto con ese codigo', 409);
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
            data: {nombre, codigo, ubicacion, latitud, longitud, habilitado: true, publicado: true},
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
                codigo: true,
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

export async function asignarEncargado(id_punto, id_usuario, admin){
    return prisma.$transaction(async (tx) => {
        const punto = await tx.puntoAcopio.findUnique({
            where: {id_punto: id_punto},
            select: {id_punto: true, habilitado: true},
        });

        if(!punto){
            throw errorConCodigo('El punto no existe',404);
        }

        if(!punto.habilitado){
            throw errorConCodigo('No se puede asignar un encargado a un punto deshabilitado',409);
        }

        const usuario= await tx.usuario.findUnique({
            where: {id_usuario: id_usuario},
            select: {
                rol: true,
                activo: true,
                id_punto: true,
                punto: {select: {nombre: true, habilitado: true}},
            },
        });

        if(!usuario){
            throw errorConCodigo('El usuario no existe',404);
        }

        if( usuario.rol !== 'encargado'){
            throw errorConCodigo('El usuario no tiene rol de encargado',400);
        }

        if(!usuario.activo){
            throw errorConCodigo('El encargado esta desactivado',409);
        }

        if(usuario.id_punto === id_punto){
            throw errorConCodigo('El encargado ya pertenece a ese punto',409);
        }

        // RF5: el punto no puede quedar sin encargado
        if(usuario.punto?.habilitado){
            const otros = await contarOtrosEncargados(tx, usuario.id_punto, id_usuario);

            if(otros === 0){
                throw errorConCodigo(`Es el unico encargado de ${usuario.punto.nombre}. Asigna otro encargado antes de moverlo`,409);
            }
        }

        const encargado = await tx.usuario.update({
            where: {id_usuario: id_usuario},
            data: {id_punto: id_punto},
            select: DATOS_ENCARGADO,
        });

        await tx.bitacora.create({
            data: {
                id_usuario: admin.id_usuario,
                accion: 'cambiar_punto_encargado',
                recurso: `USUARIO:${id_usuario}`,
                resultado: 'permitido',
            },
        });

        return encargado;
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
            codigo: true,
            ubicacion: true,
            latitud: true,
            longitud: true,
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
            rut: true,
            correo_institucional: true,
            punto: {select: {id_punto: true, nombre: true}},
        },
        orderBy: {apellidos: 'asc'},
    });
}

export async function crearEncargado({ rut, nombres, apellidos, correo, id_punto }, admin) {
    const claveTemporal = generarClaveTemporal();
    const clave_hash = await bcrypt.hash(claveTemporal, 10);

    return prisma.$transaction(async (tx) => {
        const punto = await tx.puntoAcopio.findUnique({
            where: { id_punto },
            select: { habilitado: true },
        });
        if (!punto) {
            throw errorConCodigo('El punto no existe', 404);
        }
        if (!punto.habilitado) {
            throw errorConCodigo('No se puede asignar un encargado a un punto deshabilitado', 409);
        }

        const rutRepetido = await tx.usuario.findUnique({ where: { rut }, select: { id_usuario: true } });
        if (rutRepetido) {
            throw errorConCodigo('Ya existe una cuenta con ese RUT', 409);
        }

        const correoRepetido = await tx.usuario.findUnique({
            where: { correo_institucional: correo },
            select: { id_usuario: true },
        });
        if (correoRepetido) {
            throw errorConCodigo('Ya existe una cuenta con ese correo', 409);
        }

        const encargado = await tx.usuario.create({
            data: { rut, nombres, apellidos, correo_institucional: correo, clave_hash, rol: 'encargado', id_punto },
            select: DATOS_ENCARGADO,
        });

        await tx.bitacora.create({
            data: {
                id_usuario: admin.id_usuario,
                accion: 'crear_encargado',
                recurso: `USUARIO:${encargado.id_usuario}`,
                resultado: 'permitido',
            },
        });

        // la clave solo se muestra aqui, en la bd queda el hash
        return { encargado, clave_temporal: claveTemporal };
    });
}

export async function desactivarEncargado(id_usuario, admin) {
    return prisma.$transaction(async (tx) => {
        const usuario = await tx.usuario.findUnique({
            where: { id_usuario },
            select: { rol: true, activo: true, id_punto: true, punto: { select: { nombre: true, habilitado: true } } },
        });
        if (!usuario) {
            throw errorConCodigo('El usuario no existe', 404);
        }
        if (usuario.rol !== 'encargado') {
            throw errorConCodigo('Solo se pueden desactivar encargados', 400);
        }
        if (!usuario.activo) {
            throw errorConCodigo('El encargado ya esta desactivado', 409);
        }

        if (usuario.punto?.habilitado) {
            const otros = await contarOtrosEncargados(tx, usuario.id_punto, id_usuario);
            if (otros === 0) {
                throw errorConCodigo(`Es el unico encargado de ${usuario.punto.nombre}. Asigna otro encargado antes de desactivarlo`, 409);
            }
        }

        const encargado = await tx.usuario.update({
            where: { id_usuario },
            data: { activo: false, id_punto: null },
            select: DATOS_ENCARGADO,
        });

        await tx.bitacora.create({
            data: {
                id_usuario: admin.id_usuario,
                accion: 'desactivar_encargado',
                recurso: `USUARIO:${id_usuario}`,
                resultado: 'permitido',
            },
        });

        return encargado;
    });
}
