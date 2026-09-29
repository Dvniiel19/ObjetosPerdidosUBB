import { z } from 'zod';

export const crearReclamoSchema = z.object({
  id_objeto: z.number()
    .int()
    .positive('El ID del objeto debe ser un número positivo'),

  rut_reclamante: z.string()
    .trim()
    .min(1, 'El RUT del reclamante es obligatorio')
    .regex(/^\d{7,8}-[\dkK]$/, 'El RUT debe tener formato válido (ej: 12345678-9)'),

  nombre_reclamante: z.string()
    .trim()
    .min(1, 'El nombre del reclamante es obligatorio')
    .max(200, 'El nombre no puede exceder 200 caracteres'),

  evidencia_identidad: z.string()
    .trim()
    .min(1, 'La evidencia de identidad es obligatoria'),

  evidencia_propiedad: z.string()
    .trim()
    .min(1, 'La evidencia de propiedad es obligatoria'),
}).strict();
