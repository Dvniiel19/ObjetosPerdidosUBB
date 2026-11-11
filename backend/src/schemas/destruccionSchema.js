import { z } from 'zod';

// Mayor id que acepta una columna Int de PostgreSQL. Un numero mas grande haria fallar a Prisma.
const ID_MAXIMO = 2147483647;

// Formato de Zod 4: los mensajes se pasan con { error: '...' }
const idObjeto = z.coerce
    .number({ error: 'El id del objeto debe ser un numero' })
    .int({ error: 'El id del objeto debe ser un numero entero' })
    .positive({ error: 'El id del objeto debe ser mayor a 0' })
    .max(ID_MAXIMO, { error: 'El id del objeto no es valido' });

// true si el texto es una direccion que empieza con http:// o https://
function esUrlHttp(texto) {
    try {
        const url = new URL(texto);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
        return false;
    }
}

// El acta la genera el sistema. El enlace es opcional: sirve para guardar
// tambien la copia firmada y escaneada. Vacio o ausente se guarda como null.
const enlaceCopiaFirmada = z
    .string({ error: 'El enlace a la copia firmada debe ser texto' })
    .trim()
    .refine((texto) => texto === '' || esUrlHttp(texto), {
        error: 'El enlace a la copia firmada debe empezar con http:// o https://',
    })
    .transform((texto) => texto || null)
    .nullish();

export const crearDestruccionSchema = z.object({
    id_objeto: idObjeto,
    archivo_url: enlaceCopiaFirmada,
}).strict();

export const idObjetoParamSchema = z.object({
    id: idObjeto,
}).strict();
