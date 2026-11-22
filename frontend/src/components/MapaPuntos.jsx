import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const CAMPUS = [-36.82318, -73.01199];

// Marcadores hechos con HTML: asi no se usan las imagenes de Leaflet, que Vite no encuentra
const ICONO = L.divIcon({
  className: '',
  html: '<span class="block size-4 rounded-full border-2 border-white bg-[#014898] shadow-[0_2px_6px_rgba(0,0,0,0.45)]"></span>',
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});
const ICONO_ELEGIDO = L.divIcon({
  className: '',
  html: '<span class="block size-5 rounded-full border-[3px] border-white bg-[#f9b214] shadow-[0_2px_6px_rgba(0,0,0,0.45)]"></span>',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

// Muestra todos los puntos cuando llegan y lleva el mapa al punto elegido
function Encuadre({ puntos, elegido }) {
  const mapa = useMap();

  useEffect(() => {
    if (puntos.length > 1) mapa.fitBounds(puntos.map((p) => [p.latitud, p.longitud]), { padding: [32, 32] });
    else if (puntos.length === 1) mapa.setView([puntos[0].latitud, puntos[0].longitud], 18);
  }, [puntos, mapa]);

  useEffect(() => {
    if (elegido) mapa.panTo([elegido.latitud, elegido.longitud]);
  }, [elegido, mapa]);

  return null;
}

export default function MapaPuntos({ puntos, elegido, onElegir }) {
  return (
    <MapContainer
      center={CAMPUS}
      zoom={17}
      scrollWheelZoom={false}
      className="relative z-0 w-full h-75 md:h-110 rounded-[10px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
      {puntos.map((punto) => (
        <Marker
          key={punto.id_punto}
          position={[punto.latitud, punto.longitud]}
          icon={elegido?.id_punto === punto.id_punto ? ICONO_ELEGIDO : ICONO}
          title={punto.nombre}
          eventHandlers={{ click: () => onElegir(punto) }}
        />
      ))}
      <Encuadre puntos={puntos} elegido={elegido} />
    </MapContainer>
  );
}
