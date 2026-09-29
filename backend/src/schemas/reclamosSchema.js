import { z } from 'zod';

function validarDigitoVerificador(rut) {
  const rutLimpio = rut.replace(/[.-]/g, '').toUpperCase();
  const cuerpo = rutLimpio.slice(0, -1);
  const dv = rutLimpio.slice(-1);

  if (!/^\d+$/.test(cuerpo)) return false;

  let suma = 0;
  let multiplicador = 2;

  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += Number(cuerpo[i]) * multiplicador;
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
  }

  const dvCalculado = 11 - (suma % 11);
  const dvEsperado = dvCalculado === 11 ? '0' : dvCalculado === 10 ? 'K' : String(dvCalculado);

  return dv === dvEsperado;
}

export const crearReclamoSchema = z.object({
  id_objeto: z.number()
    .int()
    .positive('El ID del objeto debe ser un número positivo'),

  rut_reclamante: z.string()
    .trim()
    .min(1, 'El RUT del reclamante es obligatorio')
    .regex(/^\d{7,8}-[\dkK]$/, 'El RUT debe tener formato válido (ej: 12345678-9)')
    .refine(validarDigitoVerificador, 'El RUT no es válido: dígito verificador incorrecto'),

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
