import { useState } from 'react';
import { login, formatearRut } from '../services/authService.js';
import '../styles/acceso.css';

// Iconos chicos que van dentro de los campos
function IconoRut() {
  return (
    <svg className="campo-icono" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="12" r="2.5" />
      <path d="M14 10h4M14 14h4" />
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
  const [rut, setRut] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mostrarClave, setMostrarClave] = useState(false);
  const [recordar, setRecordar] = useState(true);
  const [ayudaClave, setAyudaClave] = useState(false);
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  async function enviar(evento) {
    evento.preventDefault();
    setError('');

    setCargando(true);
    try {
      const usuario = await login(rut, contrasena, recordar);
      onIngresar(usuario);
    } catch (err) {
      // Si el backend rechaza el RUT, muestra su mensaje ("El RUT no es valido")
      setError(err.detalles?.length ? err.detalles.map((d) => d.mensaje).join('. ') : err.message);
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
        <p className="login-subtitulo">Iniciar sesión con tus credenciales de intranet</p>

        {error && <p role="alert">{error}</p>}

        <form onSubmit={enviar}>
          <fieldset disabled={cargando}>
            <label>
              RUT
              <span className="campo-con-icono">
                <IconoRut />
                <input
                  type="text"
                  value={rut}
                  onChange={(e) => setRut(formatearRut(e.target.value))}
                  placeholder="12.345.678-9"
                  autoComplete="username"
                  maxLength={12}
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
                Es la misma clave de tu Intranet. Si no la recuerdas, recupérala desde la Intranet.
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
