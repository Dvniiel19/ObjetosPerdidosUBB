
const MAX_INTENTOS = 10;
const BLOQUEO_MINUTOS = 15;

const intentos = new Map();

export function minutosDeBloqueo(correo){
    const registro = intentos.get(correo);

    if(!registro?.bloqueadoHasta){
        return 0;
    }

    const restante = registro.bloqueadoHasta - Date.now();

    if(restante <=0){
        intentos.delete(correo);
        return 0;
    }
    return Math.ceil(restante / 60000); //ceil para redondear hacia arriba y que no quede 0.1 minutos
}

export function registrarFallo(correo){
    const registro = intentos.get(correo) ?? {fallidos: 0, bloqueadoHasta: null};
    registro.fallidos += 1;

    if(registro.fallidos >= MAX_INTENTOS){
        registro.bloqueadoHasta = Date.now() + BLOQUEO_MINUTOS * 60000;
    }

    intentos.set(correo, registro);
}

export function resetearIntentos(correo){
    intentos.delete(correo);
}