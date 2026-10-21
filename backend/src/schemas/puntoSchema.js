import { z } from 'zod';

export const crearPuntoSchema = z.object({
    nombre: z.string('El nombre es obligatorio')
    .trim()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(25, 'El nombre no puede superar los 25 caracteres'),
    ubicacion: z.string('La ubicacion es obligatoria')
    .trim()
    .min(5, 'La ubicacion debe tener al menos 5 caracteres')
    .max(50, 'La ubicacion no puede superar los 50 caracteres'),
}).strict();

export const asignarEncargadoSchema = z.object({
    id_usuario: z.number('El id del usuario es obligatorio')
    .int('El id debe ser un numero entero')
    .positive('El id debe ser un numero positivo'),
}).strict();

export const idPuntoSchema = z.object({
    id: z.coerce.number().int().positive('El id debe ser un numero entero positivo'),
}).strict();