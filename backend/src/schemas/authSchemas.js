import { z} from 'zod';

export const dominiosPermitidos= ['@alumnos.ubiobio.cl', '@ubiobio.cl'];

export function validarCorreo(correo){
    return dominiosPermitidos.some(dominio => correo.endsWith(dominio));
}

export const loginSchema = z.object({
    correo: z.string()
    .trim()
    .toLowerCase()
    .email('El correo no tiene formato valido')
    .refine(validarCorreo, 'Solo correos de la UBB son permitidos'),
    contrasena: z.string()
    .min(1, 'La contrasena es obligatoria')
    .max(20, 'La contrasena no puede superar los 20 caracteres'),
}).strict();