import { pedir } from "./api.js";

export function obtenerObjetoParaEditar(idObjeto, idUsuario){
    return pedir( `/objetos/${idObjeto}/editar`, {idUsuario});
}

export function guardarObjetoEditado(idObjeto, datos, idUsuario){
    return pedir(`/objetos/${idObjeto}`, {
        metodo: 'PUT',
        body: datos, idUsuario
    });
}

export function listarCategoria(){
    return pedir(`/categoria`);
}
