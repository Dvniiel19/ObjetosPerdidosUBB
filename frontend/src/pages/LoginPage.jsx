import { useState } from 'react';
import { login, formatearRut } from '../services/authService.js';
import MarcoAcceso from '../components/MarcoAcceso.jsx';
import '../styles/tailwind.css';

const icono = 'absolute left-3 top-1/2 -translate-y-1/2 size-4.5 text-[rgba(232,238,252,0.6)] pointer-events-none';
const campo = 'pl-10 pr-10 border border-[rgba(255,255,255,0.22)] bg-[rgba(255,255,255,0.08)] text-white placeholder:text-[rgba(232,238,252,0.55)] focus:outline-none focus:border-[rgba(249,178,20,0.8)] focus:bg-[rgba(255,255,255,0.12)]';

// Iconos chicos que van dentro de los campos
function IconoRut() {
  return (
    <svg className={icono} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="12" r="2.5" />
      <path d="M14 10h4M14 14h4" />
    </svg>
  );
}

function IconoCandado() {
  return (
    <svg className={icono} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function IconoOjo({ tachado }) {
  return (
    <svg className="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
    <MarcoAcceso>
      <h1 className="mt-6.5 mb-1.5 mx-0 text-center font-[family-name:Montserrat,var(--heading)] text-[30px] font-medium tracking-[0.3px] text-white">
        Objetos Perdidos
      </h1>
      <p className="text-center text-[14px] text-[#c9d6f2]">Iniciar sesión con tus credenciales de intranet</p>

      {error && (
        <p role="alert" className="mt-3.5 mb-0 mx-0 py-2.5 px-3 rounded-[8px] bg-[rgba(228,27,26,0.18)] text-[#ffd1d1]">
          {error}
        </p>
      )}

      <form className="mt-5 mb-3 mx-0" onSubmit={enviar}>
        <fieldset disabled={cargando}>
          <label className="text-white text-[16px]">
            RUT
            <span className="relative block">
              <IconoRut />
              <input
                className={campo}
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

          <label className="text-white text-[16px]">
            Contraseña
            <span className="relative block">
              <IconoCandado />
              <input
                className={campo}
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
                className="absolute right-1.5 top-1/2 -translate-y-1/2 grid place-items-center p-1.5 border-0 bg-transparent text-[rgba(232,238,252,0.7)]"
                onClick={() => setMostrarClave(!mostrarClave)}
                aria-label={mostrarClave ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                <IconoOjo tachado={mostrarClave} />
              </button>
            </span>
          </label>

          <div className="flex flex-nowrap items-center justify-between gap-2">
            <label className="w-auto whitespace-nowrap flex items-center gap-2 min-h-0 text-[14px] text-white">
              <input type="checkbox" checked={recordar} onChange={(e) => setRecordar(e.target.checked)} />
              Mantener sesión iniciada
            </label>
            <button
              type="button"
              className="whitespace-nowrap p-0 border-0 bg-transparent text-[14px] text-[#9cc1ff] hover:underline"
              onClick={() => setAyudaClave(!ayudaClave)}
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {ayudaClave && (
            <p className="text-[14px] text-[#c9d6f2]" role="status">
              Es la misma clave de tu Intranet. Si no la recuerdas, recupérala desde la Intranet.
            </p>
          )}

          <button
            type="submit"
            className="w-full p-3 border border-[rgba(255,255,255,0.2)] bg-[linear-gradient(180deg,#2f6fd1,#1f56ad)] text-white font-semibold hover:brightness-108"
          >
            {cargando ? 'Ingresando…' : 'Iniciar sesión'}
          </button>
        </fieldset>
      </form>

      <button
        type="button"
        className="block w-full mt-2 py-1 px-0 border-0 bg-transparent text-[14px] text-[#c9d6f2] underline hover:text-white"
        onClick={onExterno}
      >
        No pertenezco a la universidad
      </button>
    </MarcoAcceso>
  );
}
