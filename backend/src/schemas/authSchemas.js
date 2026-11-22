import { z } from 'zod';

export function normalizarRut(rut) {
    const limpio = rut.replace(/[^0-9kK]/g, '').toUpperCase();
    return `${limpio.slice(0, -1)}-${limpio.slice(-1)}`;
}

// Revisa el digito verificador con el algoritmo modulo 11
export function rutValido(rut) {
    if (!/^\d{7,8}-[\dK]$/.test(rut)) {
        return false;
    }
    const [cuerpo, dv] = rut.split('-');
    let suma = 0;
    let multiplicador = 2;
    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += Number(cuerpo[i]) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }
    const resto = 11 - (suma % 11);
    const esperado = resto === 11 ? '0' : resto === 10 ? 'K' : String(resto);
    return dv === esperado;
}

export const rutSchema = z.string('El RUT es obligatorio')
    .trim()
    .transform(normalizarRut)
    .refine(rutValido, 'El RUT no es valido');

export const loginSchema = z.object({
    rut: rutSchema,
    contrasena: z.string()
        .min(1, 'La contrasena es obligatoria')
        .max(20, 'La contrasena no puede superar los 20 caracteres'),
}).strict();


