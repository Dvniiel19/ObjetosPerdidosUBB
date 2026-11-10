import { z } from 'zod';

export const crearDestruccionSchema = z.object({
    id_objeto: z.coerce
    .number({ invalid_type_error: 'El ID del objeto debe ser un numero entero' })
    .int('El ID del objeto debe ser un   entero')
    .positive('El ID del objeto debe ser mayor a 0'),
    archivo_url: z
    .string({ required_error: 'La URL del acta es obligatoria' })
    .url('La URL del acta de respaldo debe tener un formato valido (http:// o https://)')
    .trim(),
});

export const idObjetoParamSchema = z.object({
    id: z.coerce
    .number({ invalid_type_error: 'El ID del objeto debe ser un numero' })
    .int()
    .positive('El ID debe ser mayor a 0'),
});