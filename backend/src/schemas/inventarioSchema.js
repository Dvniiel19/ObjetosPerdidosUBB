import { z } from 'zod';

export const inventarioQuerySchema = z.object({
    texto: z.string().trim().max(100,'La busqueda no puede tener mas de 100 caracteres').optional(),
    estado: z.enum(['en_custodia', 'no_reclamado', 'entregado', 'dado_de_baja', 'todos'], {
        error: 'El estado no es valido'
    })
    .default('en_custodia'),
}).strict();