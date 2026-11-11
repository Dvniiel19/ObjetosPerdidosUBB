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
  // Barras con perillas: filtros avanzados (catálogo, RF3)
  filtros: (
    <>
      <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12" />
      <circle cx="16" cy="6" r="2" />
      <circle cx="10" cy="12" r="2" />
      <circle cx="18" cy="18" r="2" />
    </>
  ),
  // Marcador de mapa: lugar del hallazgo (catálogo, RF3)
  lugar: (
    <>
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  // Calendario: fecha del hallazgo (catálogo, RF3)
  calendario: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </>
  ),
  // Edificio: punto de acopio donde se retira (catálogo, RF3)
  edificio: (
    <>
      <path d="M5 21V4h10v17M15 9h4v12" />
      <path d="M3 21h18M8 8h4M8 12h4M8 16h4" />
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
