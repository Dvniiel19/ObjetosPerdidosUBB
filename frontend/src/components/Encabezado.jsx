import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import { listarPuntos } from '../services/catalogoService.js';
import '../styles/encabezado.css';

// Encabezado de la aplicación: marca, menú según el rol y datos de la sesión.
// - vistas: opciones del menú que el usuario puede ver ({ id, etiqueta, ayuda })
// - vistaActual: id de la pantalla abierta
// - onCambiarVista(id): se llama al elegir una opción
// - onSalir(): cierra la sesión
export default function Encabezado({ usuario, vistas, vistaActual, onCambiarVista, onSalir }) {
  const [nombrePunto, setNombrePunto] = useState('');

  // El token solo trae el número del punto; el nombre se busca en la lista de puntos
  const idPunto = usuario.id_punto;
  useEffect(() => {
    if (!idPunto) return;
    listarPuntos()
      .then((puntos) => setNombrePunto(puntos.find((p) => p.id_punto === idPunto)?.nombre ?? ''))
      .catch(() => setNombrePunto(''));
  }, [idPunto]);

  return (
    <header className="encabezado">
      <div className="encabezado-marca">
        <Logo />
        <span>Objetos Perdidos UBB</span>
      </div>

      <nav className="encabezado-menu" aria-label="Principal">
        {vistas.map((vista) => (
          <button
            key={vista.id}
            type="button"
            aria-current={vista.id === vistaActual ? 'page' : undefined}
            title={vista.ayuda}
            onClick={() => onCambiarVista(vista.id)}
          >
            {vista.etiqueta}
          </button>
        ))}
      </nav>

      <div className="encabezado-sesion">
        <span className={`encabezado-rol ${usuario.rol}`}>{usuario.rol}</span>
        <span>
          {usuario.nombres} {usuario.apellidos}
          {idPunto && ` · ${nombrePunto || `Punto ${idPunto}`}`}
        </span>
        <button type="button" className="encabezado-salir" onClick={onSalir}>
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}
