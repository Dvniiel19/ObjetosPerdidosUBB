import { pedir } from "./api.js";

export function obtenerObjetoParaEditar(idObjeto){
    return pedir( `/objetos/${idObjeto}/editar`);
}

export function guardarObjetoEditado(idObjeto, datos){
    return pedir(`/objetos/${idObjeto}`, {
        metodo: 'PUT',
        body: datos,
    });
}

export function listarCategoria(){
    return pedir(`/categoria`);
}

// Busca un objeto del punto del encargado por el numero de su etiqueta (12 en BIB-12)
export function obtenerObjetoPorNumero(numero){
    return pedir(`/objetos/numero/${numero}/editar`);
}
