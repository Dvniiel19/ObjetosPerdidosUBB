
const MAX_INTENTOS = 10;
const BLOQUEO_MINUTOS = 15;
const BLOQUEO_MS = BLOQUEO_MINUTOS * 60000;

// Control de intentos fallidos de login, en memoria (se pierde al reiniciar el servidor).
// Clave: correo del usuario.
// Valor: { fallidos, ultimoFallo, bloqueadoHasta }
//   fallidos:       cantidad de intentos fallidos seguidos
//   ultimoFallo:    marca de tiempo (ms) del ultimo intento fallido
//   bloqueadoHasta: marca de tiempo (ms) hasta la que la cuenta esta bloqueada
const intentos = new Map();

// Un registro vence cuando termino su bloqueo, o cuando no esta bloqueado y ya pasaron BLOQUEO_MINUTOS desde su ultimo fallo 
function estaVencido(registro, ahora){
    if(registro.bloqueadoHasta){
        return registro.bloqueadoHasta <= ahora;
    }
    return ahora - registro.ultimoFallo > BLOQUEO_MS;
}

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
    const ahora = Date.now();
    let registro = intentos.get(correo);

    if(!registro || estaVencido(registro, ahora)){
        registro = {fallidos: 0, ultimoFallo: ahora, bloqueadoHasta: null};
    }

    registro.fallidos += 1;
    registro.ultimoFallo = ahora;

    if(registro.fallidos >= MAX_INTENTOS){
        registro.bloqueadoHasta = ahora + BLOQUEO_MS;
    }

    intentos.set(correo, registro);
}

export function resetearIntentos(correo){
    intentos.delete(correo);
}

// Limpieza periodica de registros vencidos. Sin esto el Map crece con cada
// correo que falla y nunca vuelve a intentar (se podria llenar la memoria
// mandando muchos correos inventados).
function limpiarVencidos(){
    const ahora = Date.now();

    for(const [correo, registro] of intentos){
        if(estaVencido(registro, ahora)){
            intentos.delete(correo);
        }
    }
}

// unref: el timer no impide que node termine (tests, scripts)
setInterval(limpiarVencidos, BLOQUEO_MS).unref();
