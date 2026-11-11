import { useEffect, useState } from 'react';
import { listarPuntos } from '../services/catalogoService.js';
import '../styles/acceso.css';

export default function AccesoExternoPage({ onVolver }) {
  const [puntos, setPuntos] = useState([]);

  // Solo se muestran los puntos publicados (nombre y ubicacion), nunca objetos
  useEffect(() => {
    listarPuntos().then(setPuntos).catch(() => setPuntos([]));
  }, []);

  return (
    <main className="login acceso-externo">
      <div className="login-tarjeta">
        <div className="login-logo">
          <img className="logo-ubb" src="/logo-ubb-blanco.svg" alt="Universidad del Bío-Bío" />
        </div>
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
        <button type="button" className="boton-enlace" onClick={onVolver}>
          Volver al inicio de sesión
        </button>
      </div>
    </main>
  );
}