import { useState } from 'react';

// Logo de la universidad. El archivo oficial se guarda en frontend/public/logo-ubb.svg.
// Si el archivo todavía no está, no se muestra nada (y no aparece una imagen rota).
export default function Logo() {
  const [disponible, setDisponible] = useState(true);

  if (!disponible) return null;

  return (
    <img
      className="logo-ubb"
      src="/logo-ubb.svg"
      alt="Universidad del Bío-Bío"
      onError={() => setDisponible(false)}
    />
  );
}
