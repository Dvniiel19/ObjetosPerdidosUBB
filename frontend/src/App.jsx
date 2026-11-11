import { useEffect, useState } from 'react';
import CatalogoPage from './pages/CatalogoPage.jsx';
import CorregirObjetoPage from './pages/CorregirObjetoPage.jsx';
import RegistrarObjetoPage from './pages/RegistrarObjetoPage.jsx';
import DestruccionPage from './pages/DestruccionPage.jsx';
import ReclamosPage from './pages/ReclamosPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AccesoExternoPage from './pages/AccesoExternoPage.jsx';
import { obtenerUsuarioActual, logout } from './services/authService.js';
import GestionPuntosPage from './pages/GestionPuntosPage.jsx';
import './App.css';
import './styles/cicloVida.css'; // Req 05: pantallas del ciclo de vida

export default function App() {
  const [vista, setVista] = useState('catalogo');

  // LOGIN: usuario de la sesion
  const [usuario, setUsuario] = useState(null);
  const [revisando, setRevisando] = useState(true);
  const [externo, setExterno] = useState(false);

  // LOGIN: al abrir la app, si habia un token guardado se recupera la sesion
  useEffect(() => {
    obtenerUsuarioActual()
      .then(setUsuario)
      .finally(() => setRevisando(false));
  }, []);

  // LOGIN: si el token vence, se vuelve al login
  useEffect(() => {
    function alExpirarSesion() {
      setUsuario(null);
    }
    window.addEventListener('sesion-expirada', alExpirarSesion);
    return () => window.removeEventListener('sesion-expirada', alExpirarSesion);
  }, []);

  // LOGIN
  function salir() {
    logout();
    setUsuario(null);
    setVista('catalogo');
  }

  // LOGIN: mientras se revisa el token guardado
  if (revisando) {
    return <p>Cargando…</p>;
  }

  // LOGIN: sin sesion solo se ve el login o el aviso para externos
  if (!usuario) {
    return externo
      ? <AccesoExternoPage onVolver={() => setExterno(false)} />
      : <LoginPage onIngresar={setUsuario} onExterno={() => setExterno(true)} />;
  }

  const esEncargado = usuario.rol === 'encargado';
  const esAdmin = usuario.rol === 'administrador';

  return (
    <>
      {/* LOGIN: barra con el usuario y cerrar sesion */}
      <header className="barra-sesion">
        <span>{usuario.nombres} {usuario.apellidos} · {usuario.rol}{esEncargado && usuario.id_punto ? ` (punto ${usuario.id_punto})` : ''}</span>
        <button type="button" onClick={salir}>Cerrar sesión</button>
      </header>

      <nav className="navegacion-objetos" aria-label="Gestión de objetos">
        <button
          type="button"
          aria-pressed={vista === 'catalogo'}
          onClick={() => setVista('catalogo')}
        >
          Buscar objetos
        </button>

        {esEncargado && (
          <>
            <button
              type="button"
              aria-pressed={vista === 'registrar'}
              onClick={() => setVista('registrar')}
              title="Ingresa al sistema un objeto encontrado en el punto de acopio."
            >
              Registrar hallazgo
            </button>
            <button
              type="button"
              aria-pressed={vista === 'corregir'}
              onClick={() => setVista('corregir')}
              title="Corrige datos de un objeto en custodia de tu punto."
            >
              Corregir objeto
            </button>
            <button
              type="button"
              aria-pressed={vista === 'reclamos'}
              onClick={() => setVista('reclamos')}
              title="Gestiona reclamos en tu punto: registrar solicitud, aprobar/rechazar y entregar."
            >
              Solicitudes de reclamo
            </button>
          </>
        )}

        {esAdmin && (
          <>
            <button
              type="button"
              aria-pressed={vista === 'destruir'}
              onClick={() => setVista('destruir')}
              title="Gestiona la baja/destrucción de objetos no reclamados."
            >
              Destrucción Segura
            </button>
            <button
              type="button"
              aria-pressed={vista === 'puntos'}
              onClick={() => setVista('puntos')}
              title="Administra puntos de acopio y encargados."
            >
              Puntos
            </button>
          </>
        )}
      </nav>

      {vista === 'catalogo' && <CatalogoPage />}
      {vista === 'registrar' && esEncargado && <RegistrarObjetoPage />}
      {vista === 'corregir' && esEncargado && <CorregirObjetoPage />}
      {vista === 'reclamos' && esEncargado && <ReclamosPage />}
      {vista === 'destruir' && esAdmin && <DestruccionPage />}
      {vista === 'puntos' && esAdmin && <GestionPuntosPage />}
    </>
  );
}
