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

export const idReclamoParamSchema = z.object({
  id: z.coerce.number().int().positive('El ID del reclamo debe ser un número positivo'),
}).strict();

// Confirmación de entrega: registra en el sistema los resultados de verificaciones
// realizadas presencialmente por el Encargado (identidad por cédula/RUT y acreditación
// de propiedad), más los métodos aplicados según la categoría del objeto.
export const confirmarEntregaSchema = z.object({
  rutCedulaValidada: z.boolean({
    error: (issue) => issue.input === undefined
      ? 'Debes indicar el resultado de la verificación de identidad (RUT/cédula)'
      : 'rutCedulaValidada debe ser booleano',
  }),
  propiedadAcreditada: z.boolean({
    error: (issue) => issue.input === undefined
      ? 'Debes indicar el resultado de la acreditación de propiedad'
      : 'propiedadAcreditada debe ser booleano',
  }),
  metodosAplicados: z.array(
    z.string().trim().min(1, 'Cada método debe ser un texto no vacío'),
  ).min(1, 'Debes registrar al menos un método de acreditación de propiedad'),
}).strict();
