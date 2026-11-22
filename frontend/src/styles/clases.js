export const cabecera = 'flex flex-wrap items-end justify-between gap-4 mb-4';
export const textoCabecera = 'max-w-[640px]';
export const columnas = 'flex flex-wrap items-start gap-5 m-0';

const baseTarjeta = 'flex flex-col min-w-0 m-0 border border-(--border) rounded-[12px] bg-(--bg) shadow-(--shadow)';
export const tarjeta = `${baseTarjeta} gap-4 p-5.5`;
export const tarjetaPrincipal = `${baseTarjeta} gap-5 p-5.5 flex-[999_1_520px]`;
export const tarjetaLateral = `${baseTarjeta} gap-4 p-5.5 flex-[1_1_280px]`;
export const tarjetaTabla = `${baseTarjeta} gap-4 p-0 overflow-x-auto`;
export const tarjetaTablaPrincipal = `${baseTarjeta} gap-5 p-0 overflow-x-auto flex-[999_1_520px]`;

export const tabla = 'w-full border-collapse text-[15px]';
export const th = 'py-3 px-4 text-[13px] font-semibold uppercase tracking-[0.04em] text-(--text) border-b border-(--border) text-left';
export const fila = 'last:*:border-b-0';
export const td = 'py-3.5 px-4 align-top text-(--text-h) border-b border-(--border)';
export const tdDerecha = `${td} text-right whitespace-nowrap`;
export const nota = 'block text-(--text)';
export const notaAcciones = 'block mt-1.5 whitespace-normal text-(--text)';
export const vacio = 'p-6 text-center text-(--text)';

export const ayuda = 'text-[14px] text-(--text)';
export const avisoExito = 'm-0 py-3.5 px-4 border border-(--border) border-l-4 border-l-[#1b7f3b] rounded-[8px] bg-(--code-bg) text-(--text-h)';

const pastilla = 'inline-block py-0.5 px-2.5 rounded-full text-[13px] font-semibold';
export const pastillaGris = `${pastilla} bg-(--code-bg) text-(--text-h)`;
export const pastillaVerde = `${pastilla} bg-[rgba(47,133,90,0.14)] text-[#1b7f3b]`;
export const pastillaAmbar = `${pastilla} bg-[rgba(249,178,20,0.2)] text-[#9a5b00]`;
export const pastillaAzul = `${pastilla} bg-[rgba(1,72,152,0.12)] text-(--text-h)`;
export const pastillaRoja = `${pastilla} bg-[rgba(228,27,26,0.12)] text-[#c53030]`;

export const botonSecundario = 'inline-flex items-center gap-2 mb-4 py-2 px-3.5 bg-(--bg) text-(--text-h) border border-(--border) hover:border-(--azul-institucional) hover:text-(--azul-institucional)';
export const botonPeligro = 'bg-(--bg) text-(--rojo) border border-(--rojo)';
export const botonPeligroRelleno = 'bg-(--rojo) text-white border border-(--rojo)';
