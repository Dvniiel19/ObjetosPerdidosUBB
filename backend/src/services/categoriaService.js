import prisma from '../config/prisma.js';

export async function listarCategoria(){
    return prisma.categoria.findMany({
        select:{
            id_categoria: true, nombre: true},
            orderBy: { nombre:' asc'},
    });

}
