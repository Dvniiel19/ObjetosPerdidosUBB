import { z } from 'zod';

// Mayor id que acepta una columna Int de PostgreSQL. Un numero mas grande haria fallar a Prisma.
const ID_MAXIMO = 2147483647;

// Formato de Zod 4: los mensajes se pasan con { error: '...' }
const idObjeto = z.coerce
    .number({ error: 'El id del objeto debe ser un numero' })
    .int({ error: 'El id del objeto debe ser un numero entero' })
    .positive({ error: 'El id del objeto debe ser mayor a 0' })
    .max(ID_MAXIMO, { error: 'El id del objeto no es valido' });

export const crearDestruccionSchema = z.object({
    id_objeto: idObjeto,
    archivo_url: z
        .string({ error: 'La URL del acta es obligatoria' })
        .trim()
        .pipe(z.url({
            protocol: /^https?$/,
            error: 'La URL del acta debe ser una direccion valida que empiece con http:// o https://',
        })),
}).strict();

export const idObjetoParamSchema = z.object({
    id: idObjeto,
}).strict();
