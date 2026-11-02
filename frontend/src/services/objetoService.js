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
