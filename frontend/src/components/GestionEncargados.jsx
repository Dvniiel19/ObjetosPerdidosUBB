import { useState } from 'react';
import { crearEncargado, cambiarPuntoEncargado, desactivarEncargado } from '../services/puntoService.js';
import { formatearRut } from '../services/authService.js';
import {
    cabecera, textoCabecera, columnas, tarjetaTablaPrincipal, tarjetaLateral, tabla, th, fila, td, tdDerecha,
    nota, notaAcciones, vacio, ayuda, avisoExito, botonSecundario, botonPeligro, botonPeligroRelleno,
} from '../styles/clases.js';

export default function GestionEncargados({ encargados, puntos, onCambio }){
    const [rut, setRut] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');
    const [idPunto, setIdPunto] = useState('');
    const [claveNueva, setClaveNueva] = useState(null);
    const [destinos, setDestinos] = useState({});
    const [porConfirmar, setPorConfirmar] = useState(null);
    const [errorFormulario, setErrorFormulario] = useState('');
    const [avisoTabla, setAvisoTabla] = useState(null);
    const [cargando, setCargando] = useState(false);

    const puntosHabilitados = puntos.filter((p) => p.habilitado);

    function esUnico(encargado){
        const punto = puntos.find((p) => p.id_punto === encargado.punto?.id_punto);
        return Boolean(punto?.habilitado) && punto.encargados.length === 1;
    }

    function textoError(err){
        return err.detalles?.length ? err.detalles.map((d) => d.mensaje).join('. ') : err.message;
    }

    // '' es la opcion "Sin punto"
    function elegirDestino(idUsuario, valor){
        setDestinos({ ...destinos, [idUsuario]: valor === '' ? '' : Number(valor) });
    }

    async function crear(evento){
        evento.preventDefault();
        setErrorFormulario('');
        setClaveNueva(null);
        setCargando(true);
        try{
            const { encargado, clave_temporal } = await crearEncargado({
                rut,
                nombres,
                apellidos,
                correo,
                id_punto: Number(idPunto),
            });
            setClaveNueva({ nombre: `${encargado.nombres} ${encargado.apellidos}`, clave: clave_temporal });
            setRut('');
            setNombres('');
            setApellidos('');
            setCorreo('');
            setIdPunto('');
            await onCambio();
        } catch (err){
            setErrorFormulario(textoError(err));
        } finally {
            setCargando(false);
        }
    }

    async function mover(encargado){
        setAvisoTabla(null);
        setPorConfirmar(null);
        setCargando(true);
        try{
            const actualizado = await cambiarPuntoEncargado(destinos[encargado.id_usuario], encargado.id_usuario);
            setAvisoTabla({ tipo: 'exito', texto: `${encargado.nombres} ${encargado.apellidos} ahora está en ${actualizado.punto.nombre}.` });
            setDestinos({});
            await onCambio();
        } catch (err){
            setAvisoTabla({ tipo: 'error', texto: textoError(err) });
        } finally {
            setCargando(false);
        }
    }

    async function desactivar(encargado){
        setAvisoTabla(null);
        setCargando(true);
        try{
            await desactivarEncargado(encargado.id_usuario);
            setAvisoTabla({ tipo: 'exito', texto: `La cuenta de ${encargado.nombres} ${encargado.apellidos} fue desactivada.` });
            setPorConfirmar(null);
            await onCambio();
        } catch (err){
            setAvisoTabla({ tipo: 'error', texto: textoError(err) });
        } finally {
            setCargando(false);
        }
    }

  return (
    <section className="mt-10" aria-labelledby="titulo-encargados">
      <div className={cabecera}>
        <div>
          <h2 id="titulo-encargados" className="mt-0 mb-2 mx-0">Encargados</h2>
          <p className={textoCabecera}>Crea las cuentas de los encargados, cámbialos de punto o desactívalos.</p>
        </div>
      </div>

      {avisoTabla?.tipo === 'error' && <p role="alert">{avisoTabla.texto}</p>}
      {avisoTabla?.tipo === 'exito' && <p className={avisoExito} role="status">{avisoTabla.texto}</p>}

      <div className={columnas}>
        <section className={tarjetaTablaPrincipal} aria-label="Encargados activos">
          <table className={tabla}>
            <thead>
              <tr>
                <th className={th}>Encargado</th>
                <th className={th}>Punto</th>
                <th className={th}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {encargados.map((enc) => {
                const unico = esUnico(enc);
                const actual = enc.punto?.id_punto ?? '';
                const destino = destinos[enc.id_usuario] ?? actual;
                const [usuarioCorreo, dominioCorreo] = enc.correo_institucional.split('@');
                return (
                  <tr key={enc.id_usuario} className={fila}>
                    <td className={td}>
                      <div className="font-semibold">{enc.nombres} {enc.apellidos}</div>
                      <small className={`${nota} whitespace-nowrap`}>{formatearRut(enc.rut)}</small>
                      <small className={nota}>{usuarioCorreo}@<wbr />{dominioCorreo}</small>
                    </td>
                    <td className={td}>
                      <div className="flex items-center gap-2">
                        <select
                          className="min-w-[160px]"
                          aria-label={`Punto de ${enc.nombres} ${enc.apellidos}`}
                          value={destino}
                          disabled={cargando || unico}
                          onChange={(e) => elegirDestino(enc.id_usuario, e.target.value)}
                        >
                          {!enc.punto && <option value="">Sin punto</option>}
                          {puntosHabilitados.map((p) => (
                            <option key={p.id_punto} value={p.id_punto}>{p.nombre}</option>
                          ))}
                        </select>
                        {destino !== actual && (
                          <button type="button" className={botonSecundario} disabled={cargando} onClick={() => mover(enc)}>
                            Mover
                          </button>
                        )}
                      </div>
                    </td>
                    <td className={tdDerecha}>
                      {porConfirmar !== enc.id_usuario && (
                        <button
                          type="button"
                          className={botonPeligro}
                          disabled={cargando || unico}
                          onClick={() => setPorConfirmar(enc.id_usuario)}
                        >
                          Desactivar
                        </button>
                      )}
                      {porConfirmar === enc.id_usuario && (
                        <>
                          <button
                            type="button"
                            className={botonPeligroRelleno}
                            disabled={cargando}
                            onClick={() => desactivar(enc)}
                          >
                            Sí, desactivar
                          </button>{' '}
                          <button
                            type="button"
                            className={botonSecundario}
                            disabled={cargando}
                            onClick={() => setPorConfirmar(null)}
                          >
                            Cancelar
                          </button>
                          <small className={notaAcciones}>Ya no podrá iniciar sesión.</small>
                        </>
                      )}
                      {unico && <small className={`${notaAcciones} ml-auto max-w-[240px]`}>Es el único encargado de {enc.punto.nombre}. Asigna otro antes de moverlo o desactivarlo.</small>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {encargados.length === 0 && <p className={vacio}>No hay encargados activos.</p>}
        </section>

        <form className={tarjetaLateral} onSubmit={crear}>
          <h2 className="m-0">Crear encargado</h2>
          <fieldset disabled={cargando}>
            <label>
              RUT
              <input
                value={rut}
                onChange={(e) => setRut(formatearRut(e.target.value))}
                placeholder="12.345.678-9"
                maxLength={12}
                required
              />
              <span className={ayuda}>Con este RUT va a iniciar sesión.</span>
            </label>
            <label>
              Nombres
              <input
                value={nombres}
                onChange={(e) => setNombres(e.target.value)}
                placeholder="Ej: Elena"
                minLength={2}
                maxLength={60}
                required
              />
            </label>
            <label>
              Apellidos
              <input
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
                placeholder="Ej: Rojas Soto"
                minLength={2}
                maxLength={60}
                required
              />
            </label>
            <label>
              Correo institucional
              <input
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="nombre.apellido@ubiobio.cl"
                required
              />
              <span className={ayuda}>Debe terminar en @ubiobio.cl o @ubb.cl.</span>
            </label>
            <label>
              Punto de acopio
              <select value={idPunto} onChange={(e) => setIdPunto(e.target.value)} required>
                <option value="">Elige un punto</option>
                {puntosHabilitados.map((p) => (
                  <option key={p.id_punto} value={p.id_punto}>{p.nombre}</option>
                ))}
              </select>
            </label>
            {errorFormulario && <p role="alert">{errorFormulario}</p>}
            <button type="submit" className="w-full">{cargando ? 'Guardando…' : 'Crear encargado'}</button>
          </fieldset>

          {claveNueva && (
            <div className={avisoExito} role="status">
              <p>Cuenta creada para <strong>{claveNueva.nombre}</strong>. Su clave temporal es:</p>
              <p className="my-2 font-[monospace] text-[22px] font-bold tracking-[0.12em]">{claveNueva.clave}</p>
              <p>Entrégasela ahora: por seguridad no se vuelve a mostrar.</p>
              <div>
                <button
                  type="button"
                  className={botonSecundario}
                  onClick={() => navigator.clipboard?.writeText(claveNueva.clave).catch(() => {})}
                >
                  Copiar
                </button>{' '}
                <button type="button" className={botonSecundario} onClick={() => setClaveNueva(null)}>
                  Ya la anoté
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
