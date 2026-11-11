import { useState } from 'react';
import { login, esUBB } from '../services/authService.js';
import '../styles/acceso.css';

const CORREO_SOPORTE = 'soporte.objetosperdidos@ubiobio.cl';

// Iconos chicos que van dentro de los campos
function IconoCorreo() {
  return (
    <svg className="campo-icono" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function IconoCandado() {
  return (
    <svg className="campo-icono" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function IconoOjo({ tachado }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
      {tachado && <path d="M4 4l16 16" />}
    </svg>
  );
}

export default function LoginPage({ onIngresar, onExterno }) {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mostrarClave, setMostrarClave] = useState(false);
  const [recordar, setRecordar] = useState(true);
  const [ayudaClave, setAyudaClave] = useState(false);
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  async function enviar(evento) {
    evento.preventDefault();
    setError('');

    // Si no es de la comunidad lo lleva automaticamente a la pagina de acceso externo
    if (!esUBB(correo)) {
      onExterno();
      return;
    }

    setCargando(true);
    try {
      const usuario = await login(correo, contrasena, recordar);
      onIngresar(usuario);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }

  return (
    <main className="login">
      <div className="login-tarjeta">
        <div className="login-logo">
          <img className="logo-ubb" src="/logo-ubb-blanco.svg" alt="Universidad del Bío-Bío" />
        </div>
        <h1>Objetos Perdidos</h1>
        <p className="login-subtitulo">Iniciar sesión con tus credenciales institucionales</p>

        {error && <p role="alert">{error}</p>}

        <form onSubmit={enviar}>
          <fieldset disabled={cargando}>
            <label>
              Correo institucional
              <span className="campo-con-icono">
                <IconoCorreo />
                <input
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="nombre@alumnos.ubiobio.cl"
                  autoComplete="username"
                  required
                />
              </span>
            </label>

            <label>
              Contraseña
              <span className="campo-con-icono">
                <IconoCandado />
                <input
                  type={mostrarClave ? 'text' : 'password'}
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  placeholder="••••••••••"
                  autoComplete="current-password"
                  maxLength={20}
                  required
                />
                <button
                  type="button"
                  className="boton-ojo"
                  onClick={() => setMostrarClave(!mostrarClave)}
                  aria-label={mostrarClave ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  <IconoOjo tachado={mostrarClave} />
                </button>
              </span>
            </label>

            <div className="login-opciones">
              <label className="casilla">
                <input type="checkbox" checked={recordar} onChange={(e) => setRecordar(e.target.checked)} />
                Mantener sesión iniciada
              </label>
              <button type="button" className="boton-texto" onClick={() => setAyudaClave(!ayudaClave)}>
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            {ayudaClave && (
              <p className="login-ayuda" role="status">
                Escribe a soporte o acércate a un punto de objetos perdidos para recuperar tu acceso.
              </p>
            )}

            <button type="submit" className="boton-ingresar">
              {cargando ? 'Ingresando…' : 'Iniciar sesión'}
            </button>
          </fieldset>
        </form>

        <button type="button" className="boton-enlace" onClick={onExterno}>
          No pertenezco a la universidad
        </button>
      </div>
    </main>
  );
}
