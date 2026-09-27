// Error con codigo http 

export function errorConCodigo(mensaje, statusCode){
    const error = Error(mensaje);
    error.statusCode = statusCode;
    return error;
}