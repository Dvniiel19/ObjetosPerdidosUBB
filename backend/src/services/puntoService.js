import prisma from '../config/prisma.js';

// Solo los puntos publicados se muestran a los usuarios.
export async function listarPuntos(){
    return prisma.puntoAcopio.findMany({
        where: { publicado: true },
        select: {
            id_punto: true, nombre: true, ubicacion: true},
            orderBy: { nombre: 'asc'},
    });
}
