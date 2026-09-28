// Convierte una fecha a texto con formato chileno: DD-MM-AAAA.
export function fechaParaMostrar(valor) {
  // Si no llegó una fecha, devuelve un texto vacío.
  if (!valor) return '';

  // Crea un objeto Date a partir de la fecha recibida.
  const fecha = new Date(valor);

  // Si JavaScript no pudo leer la fecha, devuelve un texto vacío.
  if (Number.isNaN(fecha.getTime())) return '';

  // Obtiene el día y agrega un cero si hace falta: 7 → "07".
  const dia = String(fecha.getDate()).padStart(2, '0');

  // Los meses en Date comienzan en 0, así que sumamos 1.
  // También agrega un cero si hace falta: 9 → "09".
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');

  // Obtiene el año completo.
  const anio = fecha.getFullYear();

  // Devuelve, por ejemplo, "27-09-2026".
  return `${dia}-${mes}-${anio}`;
}

// Interpreta la fecha y la hora en la zona horaria local del navegador.
export function fechaChilenaAISO(fechaTexto, horaTexto) {
  const partesFecha = /^(\d{2})-(\d{2})-(\d{4})$/.exec(fechaTexto);
  const partesHora = /^(\d{2}):(\d{2})$/.exec(horaTexto);

  if (!partesFecha || !partesHora) {
    throw new Error('Ingresa la fecha como DD-MM-AAAA y la hora como HH:mm.');
  }

  const [, dia, mes, anio] = partesFecha.map(Number);
  const [, hora, minuto] = partesHora.map(Number);
  const fecha = new Date(0);
  fecha.setFullYear(anio, mes - 1, dia);
  fecha.setHours(hora, minuto, 0, 0);

  if (
    anio < 1 ||
    fecha.getFullYear() !== anio ||
    fecha.getMonth() !== mes - 1 ||
    fecha.getDate() !== dia ||
    fecha.getHours() !== hora ||
    fecha.getMinutes() !== minuto
  ) {
    throw new Error('Ingresa una fecha y una hora válidas.');
  }

  return fecha.toISOString();
}
