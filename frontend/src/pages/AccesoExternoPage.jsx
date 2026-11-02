import { useEffect, useState } from 'react';
import { listarPuntos } from '../services/catalogoService.js';

export default function AccesoExternoPage({ onVolver }) {
  const [puntos, setPuntos] = useState([]);

  // Solo se muestran los puntos publicados (nombre y ubicacion), nunca objetos
  useEffect(() => {
    listarPuntos().then(setPuntos).catch(() => setPuntos([]));
  }, []);

  return (
    <main className="acceso-externo">
      <h1>Acércate a un punto de objetos perdidos</h1>
      <p>
        Esta plataforma es solo para la comunidad de la Universidad del Bío-Bío.
        Si perdiste un objeto en el campus, dirígete presencialmente a uno de
        nuestros puntos y un encargado te ayudará.
      </p>
      {puntos.length > 0 && (
        <ul>
          {puntos.map((punto) => (
            <li key={punto.id_punto}>
              <strong>{punto.nombre}</strong>: {punto.ubicacion}
            </li>
          ))}
        </ul>
      )}
      <button type="button" onClick={onVolver}>Volver al inicio de sesión</button>
    </main>
  );
}