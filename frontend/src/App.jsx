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
import Encabezado from './components/Encabezado.jsx';
import HistorialObjetoPage from './pages/HistorialObjetoPage.jsx'; // Req 05
import './App.css';
import './styles/cicloVida.css'; // Req 05: pantallas del ciclo de vida
import './styles/componentes.css'; // tarjetas, columnas, avisos y pestañas compartidos

// Opciones del menú y qué rol puede ver cada una.
// Para agregar una pantalla: suma una línea aquí y su <Pagina /> más abajo.
const VISTAS = [
  { id: 'catalogo', etiqueta: 'Catálogo', roles: ['usuario', 'encargado', 'administrador'], ayuda: 'Busca objetos perdidos en custodia.' },
  { id: 'registrar', etiqueta: 'Registrar objeto', roles: ['encargado'], ayuda: 'Ingresa al sistema un objeto encontrado en el punto de acopio.' },
  { id: 'corregir', etiqueta: 'Corregir', roles: ['encargado'], ayuda: 'Corrige datos de un objeto en custodia de tu punto.' },
  { id: 'reclamos', etiqueta: 'Reclamos', roles: ['encargado'], ayuda: 'Gestiona reclamos en tu punto: registrar solicitud, aprobar/rechazar y entregar.' },
  { id: 'puntos', etiqueta: 'Puntos de acopio', roles: ['administrador'], ayuda: 'Administra puntos de acopio y encargados.' },
  { id: 'destruir', etiqueta: 'Destrucción', roles: ['administrador'], ayuda: 'Gestiona la baja/destrucción de objetos no reclamados.' },
  { id: 'historial', etiqueta: 'Historial', roles: ['administrador'], ayuda: 'Consulta la trazabilidad completa de un objeto.' },
];

export default function App() {
  const [vista, setVista] = useState('catalogo');
  // Req 05: datos que una pantalla le pasa a otra (por ejemplo, el objeto del historial)
  const [parametros, setParametros] = useState(null);

  // Req 05: cambia de pantalla y, si hace falta, le pasa datos
  function irA(nuevaVista, nuevosParametros = null) {
    setParametros(nuevosParametros);
    setVista(nuevaVista);
  }

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
  const vistasPermitidas = VISTAS.filter((v) => v.roles.includes(usuario.rol));

  return (
    <>
      <Encabezado
        usuario={usuario}
        vistas={vistasPermitidas}
        vistaActual={vista}
        onCambiarVista={irA}
        onSalir={salir}
      />

      {vista === 'catalogo' && <CatalogoPage />}
      {vista === 'registrar' && esEncargado && <RegistrarObjetoPage onIrA={irA} />}
      {vista === 'corregir' && esEncargado && <CorregirObjetoPage />}
      {vista === 'reclamos' && esEncargado && <ReclamosPage />}
      {vista === 'destruir' && esAdmin && <DestruccionPage />}
      {vista === 'puntos' && esAdmin && <GestionPuntosPage />}
      {vista === 'historial' && esAdmin && <HistorialObjetoPage parametros={parametros} />}
    </>
  );
}
