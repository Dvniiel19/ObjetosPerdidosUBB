import { useEffect, useMemo, useState } from 'react';
import { listarPuntos } from '../services/catalogoService.js';
import MarcoAcceso from '../components/MarcoAcceso.jsx';
import MapaPuntos from '../components/MapaPuntos.jsx';
import '../styles/tailwind.css';

const tieneMapa = (punto) => punto.latitud != null && punto.longitud != null;

export default function AccesoExternoPage({ onVolver }) {
  const [puntos, setPuntos] = useState([]);
  const [elegido, setElegido] = useState(null);
  const conMapa = useMemo(() => puntos.filter(tieneMapa), [puntos]);

  // Solo se muestran los puntos publicados (nombre y ubicacion), nunca objetos
  useEffect(() => {
    listarPuntos().then(setPuntos).catch(() => setPuntos([]));
  }, []);

  return (
    <MarcoAcceso ancho="max-w-[960px]">
      <h1 className="mt-6.5 mb-1.5 mx-0 text-center font-[family-name:Montserrat,var(--heading)] text-[24px] font-medium tracking-[0.3px] text-white">
        Acércate a un punto de objetos perdidos
      </h1>
      <p className="text-[#c9d6f2]">
        Esta plataforma es solo para la comunidad de la Universidad del Bío-Bío.
        Si perdiste un objeto en el campus, dirígete presencialmente a uno de
        nuestros puntos y un encargado te ayudará.
      </p>

      {puntos.length > 0 && (
        <div className="mt-5 grid gap-4 md:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            {conMapa.length > 0 && <MapaPuntos puntos={conMapa} elegido={elegido} onElegir={setElegido} />}
            {elegido && (
              <div className="mt-3 p-3 rounded-[10px] border border-[rgba(249,178,20,0.8)] bg-[rgba(255,255,255,0.08)]">
                <strong className="block text-white">{elegido.nombre}</strong>
                <span className="block text-[14px] text-[#c9d6f2]">{elegido.ubicacion}</span>
                <a
                  className="inline-block mt-1 text-[14px] text-[#9cc1ff] underline hover:text-white"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${elegido.latitud},${elegido.longitud}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Cómo llegar con Google Maps
                </a>
              </div>
            )}
            {!elegido && conMapa.length > 0 && (
              <p className="mt-3 text-[14px] text-[#c9d6f2]">Toca un punto del mapa o de la lista para ver cómo llegar.</p>
            )}
          </div>

          <ul className="m-0 p-0 grid gap-2 content-start list-none md:max-h-110 md:overflow-y-auto">
            {puntos.map((punto) => (
              <li key={punto.id_punto}>
                <button
                  type="button"
                  className="w-full p-3 text-left rounded-[10px] border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.06)] text-[#e8eefc] hover:bg-[rgba(255,255,255,0.1)] aria-pressed:border-[rgba(249,178,20,0.8)] aria-pressed:bg-[rgba(255,255,255,0.12)]"
                  aria-pressed={elegido?.id_punto === punto.id_punto}
                  disabled={!tieneMapa(punto)}
                  onClick={() => setElegido(punto)}
                >
                  <strong className="block text-white">{punto.nombre}</strong>
                  <span className="block text-[14px] text-[#c9d6f2]">
                    {punto.ubicacion}{!tieneMapa(punto) && ' · sin ubicación en el mapa'}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="button"
        className="block w-full mt-2 py-1 px-0 border-0 bg-transparent text-[14px] text-[#c9d6f2] underline hover:text-white"
        onClick={onVolver}
      >
        Volver al inicio de sesión
      </button>
    </MarcoAcceso>
  );
}
