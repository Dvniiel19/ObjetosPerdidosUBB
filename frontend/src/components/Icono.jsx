// Iconos simples dibujados con SVG (sin librerías).
// Toman el color del texto que los rodea (currentColor) y son decorativos (aria-hidden).
const TRAZOS = {
  // Hoja con líneas: actas y documentos
  documento: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 16h6" />
    </>
  ),
  // Triángulo con signo de exclamación: avisos
  alerta: (
    <>
      <path d="M12 4 3 20h18z" />
      <path d="M12 10v4M12 17v.01" />
    </>
  ),
  // Lupa: buscar
  buscar: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.5-4.5" />
    </>
  ),
};

export default function Icono({ nombre, tamano = 16 }) {
  const trazos = TRAZOS[nombre];
  if (!trazos) return null;

  return (
    <svg
      className="icono"
      width={tamano}
      height={tamano}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {trazos}
    </svg>
  );
}
