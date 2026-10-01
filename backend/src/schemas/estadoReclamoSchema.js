import { z } from 'zod';

export const estadoReclamoSchema = z.object({
  estado: z.enum(['aprobado', 'rechazado'], {
    errorMap: () => ({ message: 'El estado debe ser "aprobado" o "rechazado"' }),
  }),
  motivo: z.string()
    .trim()
    .max(500, 'El motivo no puede exceder 500 caracteres')
    .optional(),
}).strict().refine(
  (data) => data.estado !== 'rechazado' || (data.motivo && data.motivo.length > 0),
  { message: 'El motivo es obligatorio cuando el reclamo es rechazado', path: ['motivo'] }
);
