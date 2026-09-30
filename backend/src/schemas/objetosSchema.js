import {z} from 'zod';

const fotoSchema = z.object({archivo_url: z.string()})

export const registroObjetoSchema = z.object({
    id_categoria: z.number().int().positive().max(32767),
    descripcion: z.string().trim().min(1, 'La descripcion es obligatoria'),
    hallado_en: z.string().datetime({offset: true, message: 'La fecha de hallazgo debe incluir hora y zona horaria'}),
    lugar_hallazgo: z.string().trim().min(1, 'El lugar de hallazgo es obligatorio'),
    fotografias: z.array(fotoSchema).max(3, 'Se permiten hasta 3 fotografias').default([]),
}).strict();

export const correccionObjetoSchema = registroObjetoSchema
    .omit({
        fotografias: true})
    .extend({
        motivo: z.string().
        trim().
        min(10, 'El motivo debe tener minimo 10 caracteres')
        .max(200, 'El motivo debe tener maximo 200 caracteres')
    })
    .strict();

export const idObjetoSchema = z.object({
    id: z.coerce.number().int().positive()
});

// Filtros del catalogo. Llegan como texto en la URL, por eso se usa coerce en los numeros.
export const catalogoQuerySchema = z.object({
    texto: z.string().trim().optional(),
    categoria: z.coerce.number({ error: 'La categoria debe ser un numero' }).int().positive('La categoria debe ser un numero positivo').optional(),
    punto: z.coerce.number({ error: 'El punto de acopio debe ser un numero' }).int().positive('El punto de acopio debe ser un numero positivo').optional(),
    lugar: z.string().trim().optional(),
    fecha_desde: z.iso.date('La fecha debe tener formato AAAA-MM-DD').optional(),
    fecha_hasta: z.iso.date('La fecha debe tener formato AAAA-MM-DD').optional(),
}).strict();