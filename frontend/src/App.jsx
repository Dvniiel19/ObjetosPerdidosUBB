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

const VISTAS_POR_ROL = {
  usuario: ['catalogo', 'crearReclamo'],
  encargado: ['catalogo', 'crearReclamo', 'registrar', 'corregir', 'entrega', 'revisarReclamo'],
  administrador: ['catalogo', 'crearReclamo', 'destruir', 'puntos'],
};

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

  const rol = usuario.rol;
  const esEncargado = rol === 'encargado';
  const esAdmin = rol === 'administrador';
  const vistasPermitidas = VISTAS_POR_ROL[rol] ?? ['catalogo'];
  const vistaActual = vistasPermitidas.includes(vista) ? vista : 'catalogo';

  const puede = (v) => vistasPermitidas.includes(v);
  const boton = (id, etiqueta) =>
    puede(id) ? (
      <button
        key={id}
        type="button"
        aria-pressed={vistaActual === id}
        onClick={() => setVista(id)}
      >
        {etiqueta}
      </button>
    ) : null;

  return (
    <>
      {/* LOGIN: barra con el usuario y cerrar sesion */}
      <header className="barra-sesion">
        <span>{usuario.nombres} {usuario.apellidos} · {rol}{esEncargado && usuario.id_punto ? ` (punto ${usuario.id_punto})` : ''}</span>
        <button type="button" onClick={salir}>Cerrar sesión</button>
      </header>

      <nav className="navegacion-objetos" aria-label="Gestión de objetos">
        {boton('catalogo', 'Buscar objetos')}
        {boton('crearReclamo', 'Nueva solicitud')}
        {esEncargado && <span className="nav-sep" aria-hidden="true">|</span>}
        {boton('registrar', 'Registrar objeto')}
        {boton('corregir', 'Corregir objeto')}
        {boton('revisarReclamo', 'Gestionar solicitudes')}
        {boton('entrega', 'Entregar objeto')}
        {esAdmin && <span className="nav-sep" aria-hidden="true">|</span>}
        {boton('destruir', 'Destrucción Segura')}
        {boton('puntos', 'Puntos')}
      </nav>

      {vistaActual === 'catalogo' && <CatalogoPage />}
      {vistaActual === 'crearReclamo' && <CrearReclamoPage />}
      {vistaActual === 'registrar' && puede('registrar') && <RegistrarObjetoPage />}
      {vistaActual === 'corregir' && puede('corregir') && <CorregirObjetoPage />}
      {vistaActual === 'revisarReclamo' && puede('revisarReclamo') && <RevisarReclamoPage />}
      {vistaActual === 'entrega' && puede('entrega') && <EntregaReclamoPage />}
      {vistaActual === 'destruir' && puede('destruir') && <DestruccionPage />}
      {vistaActual === 'puntos' && puede('puntos') && <GestionPuntosPage />}
    </>
  );
}
