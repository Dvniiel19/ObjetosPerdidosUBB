import prisma from '../config/prisma.js';
import {errorConCodigo} from '../utils/errorConCodigo.js';

function validarEncargado(encargado){
    if(encargado?.rol !== 'encargado' || !encargado.id_punto){
        throw errorConCodigo('Solo un encargado con oficina asignada puede editar un objeto', 403);
    }
}

const camposEditables= ['id_categoria', 'descripcion', 'lugar_hallazgo', 'hallado_en'];

function sonIguales(a,b){
    if(a instanceof Date && b instanceof Date){
        return a.getTime() === b.getTime();
    }
    return a === b;
}

export async function obtenerObjetoParaEditar(idObjeto, encargado){
    validarEncargado(encargado);

    const objeto = await prisma.objeto.findUnique({
        where: {id_objeto: idObjeto},
        select:{
            id_objeto: true,
            id_categoria: true,
            descripcion: true,
            lugar_hallazgo: true,
            hallado_en: true,
            estado: true,
            id_punto: true,
        },
    });

    if(!objeto){
        throw errorConCodigo('El objeto no existe', 404);
    }

    if(objeto.id_punto !== encargado.id_punto){
        throw errorConCodigo('Solo puedes editar objetos de tu oficina', 403);
    }
    return objeto;
}

export async function editarObjeto(idObjeto, datos, encargado){
    const objeto = await obtenerObjetoParaEditar(idObjeto, encargado);

    if( objeto.estado !== 'en_custodia'){
        throw errorConCodigo('Solo se pueden editar objeos que esten en custodia', 409); // 
    }
    const nuevos = {...datos, hallado_en: new Date(datos.hallado_en)};
    const cambios = {}; 
    const valoresAnteriores = {};

    for( const campo of camposEditables){
        if(!sonIguales(objeto[campo], nuevos[campo])){
            cambios[campo] =nuevos[campo];
            valoresAnteriores[campo] = objeto[campo] instanceof Date
            ? objeto[campo].toISOString()
            : objeto[campo];
        };
    }

    if(Object.keys(cambios).length === 0){
        throw errorConCodigo('No hay cambios que registrar',400);
    }

    // Si cambia la categoria, validar que exista
    if(cambios.id_categoria!== undefined){
        const categoria = await prisma.categoria.findUnique({
            where: {id_categoria: cambios.id_categoria},
        });
        if(!categoria){
            throw errorConCodigo(' La categoria seleccionada no existe',400);
        }
    }

    // Actualizar el objeto y registrar el historial
    
    const [objetoEditable] = await prisma.$transaction([
        prisma.objeto.update({
            where: { id_objeto: idObjeto},
            data: cambios,
        }),
        prisma.historialObjeto.create({
            data: {
                id_objeto: idObjeto,
                modificado_por: encargado.id_usuario,
                motivo: datos.motivo,
                valores_anteriores: valoresAnteriores,
            },
        }),
    ]);

    return objetoEditable;
}
