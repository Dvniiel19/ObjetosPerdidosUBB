import { z } from 'zod';

// Mayor id que acepta una columna Int de PostgreSQL
const ID_MAXIMO = 2147483647;

export const idObjetoHistorialSchema = z.object({
    id: z.coerce
        .number({ error: 'El id del objeto debe ser un numero' })
        .int({ error: 'El id del objeto debe ser un numero entero' })
        .positive({ error: 'El id del objeto debe ser mayor a 0' })
        .max(ID_MAXIMO, { error: 'El id del objeto no es valido' }),
}).strict();
