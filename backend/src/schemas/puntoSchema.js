import { z } from 'zod';
import {rutSchema} from './authSchemas.js';

const DOMINIOS_FUNCIONARIOS = ['@ubiobio.cl', '@ubb.cl'];

export const crearPuntoSchema = z.object({
    nombre: z.string('El nombre es obligatorio')
    .trim()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(25, 'El nombre no puede superar los 25 caracteres'),
    // Codigo corto del punto: va antes del numero de cada objeto (BIB-12)
    codigo: z.string('El codigo es obligatorio')
    .trim()
    .toUpperCase()
    .regex(/^[A-Z]{2,6}$/, 'El codigo debe tener entre 2 y 6 letras, sin numeros ni simbolos'),
    ubicacion: z.string('La ubicacion es obligatoria')
    .trim()
    .min(5, 'La ubicacion debe tener al menos 5 caracteres')
    .max(50, 'La ubicacion no puede superar los 50 caracteres'),
    latitud: z.number('La latitud debe ser un numero')
    .min(-90, 'La latitud debe estar entre -90 y 90')
    .max(90, 'La latitud debe estar entre -90 y 90')
    .optional(),
    longitud: z.number('La longitud debe ser un numero')
    .min(-180, 'La longitud debe estar entre -180 y 180')
    .max(180, 'La longitud debe estar entre -180 y 180')
    .optional(),
    encargados: z.array(
        z.number('Cada encargado debe ser un id con formato numerico')
        .int('Cada encargado debe ser un id con formato numerico entero')
        .positive('Cada encargado debe ser un id con formato numerico positivo'),
        'Los encargados son obligatorios',
    )
        .min(1, 'Debes asignar al menos un encargado')
        .refine((ids) => new Set(ids).size === ids.length, 'No puedes asignar el mismo encargado mas de una vez'),
}).strict()
    .refine((datos) => (datos.latitud === undefined) === (datos.longitud === undefined), {
        message: 'Indica la latitud y la longitud juntas',
        path: ['longitud'],
    });

export const asignarEncargadoSchema = z.object({
    id_usuario: z.number('El id del usuario es obligatorio')
    .int('El id debe ser un numero entero')
    .positive('El id debe ser un numero positivo'),
}).strict();

export const idPuntoSchema = z.object({
    id: z.coerce.number('El id debe ser un numero').int().positive('El id debe ser un numero entero positivo'),
}).strict();

export const crearEncargadoSchema = z.object({
    rut: rutSchema,
    nombres: z.string('Los nombres son obligatorios')
        .trim()
        .min(2, 'Los nombres deben tener al menos 2 caracteres')
        .max(60, 'Los nombres no pueden superar los 60 caracteres'),
    apellidos: z.string('Los apellidos son obligatorios')
        .trim()
        .min(2, 'Los apellidos deben tener al menos 2 caracteres')
        .max(60, 'Los apellidos no pueden superar los 60 caracteres'),
    correo: z.string('El correo es obligatorio')
        .trim()
        .toLowerCase()
        .email('El correo no tiene formato valido')
        .refine(
            (correo) => DOMINIOS_FUNCIONARIOS.some((dominio) => correo.endsWith(dominio)),
            'El correo debe ser de funcionario UBB (@ubiobio.cl o @ubb.cl)',
        ),
    id_punto: z.number('El punto es obligatorio')
        .int('El punto debe ser un id entero')
        .positive('El punto debe ser un id positivo'),
}).strict();

export const idEncargadoSchema = z.object({
    id: z.coerce.number('El id debe ser un numero').int().positive('El id debe ser un entero positivo'),
}).strict();