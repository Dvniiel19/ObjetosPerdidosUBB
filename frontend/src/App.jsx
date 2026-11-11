import { useEffect, useState } from 'react';
import CatalogoPage from './pages/CatalogoPage.jsx';
import CorregirObjetoPage from './pages/CorregirObjetoPage.jsx';
import RegistrarObjetoPage from './pages/RegistrarObjetoPage.jsx';
import DestruccionPage from './pages/DestruccionPage.jsx'; 
import { EntregaReclamoPage } from './pages/EntregaReclamoPage.jsx';
import CrearReclamoPage from './pages/CrearReclamoPage.jsx';
import RevisarReclamoPage from './pages/RevisarReclamoPage.jsx';
import LoginPage from './pages/LoginPage.jsx'; // LOGIN
import AccesoExternoPage from './pages/AccesoExternoPage.jsx'; // LOGIN
import { obtenerUsuarioActual, logout } from './services/authService.js'; // LOGIN
import GestionPuntosPage from './pages/GestionPuntosPage.jsx'; // RF5 y RF9
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

  // RF8: solo el encargado corrige objetos
  const esEncargado = usuario.rol === 'encargado';
  // RF5 y RF9: solo el administrador gestiona puntos
  const esAdmin = usuario.rol === 'administrador';

  return (
    <>
      {/* LOGIN: barra con el usuario y cerrar sesion */}
      <header className="barra-sesion">
        <span>{usuario.nombres} {usuario.apellidos} · {usuario.rol}</span>
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

        <button
          type="button"
          aria-pressed={vista === 'registrar'}
          onClick={() => setVista('registrar')}
        >
          Registrar objeto
        </button>

        {/* RF8: solo encargado */}
        {esEncargado && (
          <button
            type="button"
            aria-pressed={vista === 'corregir'}
            onClick={() => setVista('corregir')}
          >
            Corregir objeto
          </button>
        )}

        <button
          type="button"
          aria-pressed={vista === 'destruir'}
          onClick={() => setVista('destruir')}
        >
          Destrucción Segura
        </button>

        <button
          type="button"
          aria-pressed={vista === 'entrega'}
          onClick={() => setVista('entrega')}
        >
          Entrega de reclamo
        </button>

        <button
          type="button"
          aria-pressed={vista === 'crearReclamo'}
          onClick={() => setVista('crearReclamo')}
        >
          Solicitar reclamo
        </button>

        <button
          type="button"
          aria-pressed={vista === 'revisarReclamo'}
          onClick={() => setVista('revisarReclamo')}
        >
          Revisar reclamo
        </button>

        {/* RF5 y RF9: solo administrador */}
        {esAdmin && (
          <button
            type="button"
            aria-pressed={vista === 'puntos'}
            onClick={() => setVista('puntos')}
          >
            Puntos
          </button>
        )}
      </nav>

      {vista === 'catalogo' && <CatalogoPage />}
      {vista === 'registrar' && <RegistrarObjetoPage />}
      {vista === 'corregir' && esEncargado && <CorregirObjetoPage />}
      {vista === 'destruir' && <DestruccionPage />}
      {vista === 'entrega' && <EntregaReclamoPage />}
      {vista === 'crearReclamo' && <CrearReclamoPage />}
      {vista === 'revisarReclamo' && <RevisarReclamoPage />}
      {vista === 'puntos' && esAdmin && <GestionPuntosPage />}
    </>
  );
}
