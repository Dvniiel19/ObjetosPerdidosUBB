import { useEffect, useState } from 'react';
import { obtenerTodosLosPuntos, listarEncargados, crearPunto, desactivarPunto } from '../services/puntoService.js';
import '../styles/gestion.css';

export default function GestionPuntosPage(){
    const [puntos, setPuntos] = useState([]);
    const [encargados, setEncargados] = useState([]);
    const [nombre, setNombre] = useState('');
    const [codigo, setCodigo] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [seleccionados, setSeleccionados] = useState([]);
    // id del punto que se esta por desactivar (pide confirmacion antes)
    const [porConfirmar, setPorConfirmar] = useState(null);
    const [error, setError] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [cargando, setCargando] = useState(false);

    async function cargar(){
        try{
            const [listaPuntos, listaEncargados] = await Promise.all([
                obtenerTodosLosPuntos(),
                listarEncargados(),
            ]);
            setPuntos(listaPuntos);
            setEncargados(listaEncargados);
        } catch (err){
            setError(err.message);
        }
    }
    useEffect(() => {
        cargar();
    }, []);

    //Marcar o desmarcar un encargado para crear un punto
    function alternarEncargado(idUsuario){
        setSeleccionados((actual) =>
        actual.includes(idUsuario)
            ? actual.filter((id) => id !== idUsuario)
            : [...actual, idUsuario]
        );
    }

    // Crear punto
    async function crear(evento){
        evento.preventDefault();
        setError('');
        setMensaje('');
        if(seleccionados.length === 0){
            setError('Debes seleccionar al menos un encargado para crear el punto.');
            return;
        }
        setCargando(true);
        try{
            await crearPunto({nombre, codigo, ubicacion, encargados: seleccionados});
            setMensaje('Punto creado exitosamente.');
            setNombre('');
            setCodigo('');
            setUbicacion('');
            setSeleccionados([]);
            await cargar();
        } catch (err){
            // Si es un error de validacion se muestran los mensajes de cada campo
            setError(err.detalles?.length ? err.detalles.map((d) => d.mensaje).join('. ') : err.message);
        } finally {
            setCargando(false);
        }
    }

    // Desactivar punto
    async function desactivar(punto){
        setError('');
        setMensaje('');
        setCargando(true);
        try{
            await desactivarPunto(punto.id_punto);
            setMensaje(`Punto "${punto.nombre}" desactivado exitosamente.`);
            setPorConfirmar(null);
            await cargar();
        } catch (err){
            setError(err.message);
        } finally {
            setCargando(false);
        }
    }

  return (
    <main>
      <div className="cabecera-pagina">
        <div>
          <h1>Puntos de acopio</h1>
          <p>Crea puntos nuevos y desactiva los que ya no funcionan.</p>
        </div>
      </div>

      {error && <p role="alert">{error}</p>}
      {mensaje && <p className="aviso exito" role="status">{mensaje}</p>}

      <div className="dos-columnas">
        <section className="tarjeta sin-relleno principal" aria-label="Puntos registrados">
          <table className="tabla-min">
            <thead>
              <tr>
                <th>Punto</th>
                <th>Encargados</th>
                <th>En custodia</th>
                <th>Estado</th>
                <th className="celda-acciones">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {puntos.map((punto) => {
                const enCustodia = punto._count.objetos;
                return (
                  <tr key={punto.id_punto}>
                    <td>
                      <div className="celda-principal">{punto.nombre} <span className="pastilla">{punto.codigo}</span></div>
                      <small>{punto.ubicacion}</small>
                    </td>
                    <td>
                      {punto.encargados.length > 0
                        ? punto.encargados.map((e) => <div key={e.id_usuario}>{e.nombres} {e.apellidos}</div>)
                        : <span className="numero">Sin encargado</span>}
                    </td>
                    <td>{enCustodia}</td>
                    <td>
                      {punto.habilitado
                        ? <span className="pastilla verde">Habilitado</span>
                        : <span className="pastilla">Desactivado</span>}
                    </td>
                    <td className="celda-acciones">
                      {punto.habilitado && enCustodia > 0 && (
                        <>
                          <button type="button" className="boton-peligro" disabled>Desactivar</button>
                          <small>Tiene objetos en custodia</small>
                        </>
                      )}
                      {punto.habilitado && enCustodia === 0 && porConfirmar !== punto.id_punto && (
                        <button
                          type="button"
                          className="boton-peligro"
                          disabled={cargando}
                          onClick={() => setPorConfirmar(punto.id_punto)}
                        >
                          Desactivar
                        </button>
                      )}
                      {porConfirmar === punto.id_punto && (
                        <>
                          <button
                            type="button"
                            className="boton-peligro relleno"
                            disabled={cargando}
                            onClick={() => desactivar(punto)}
                          >
                            Sí, desactivar
                          </button>{' '}
                          <button
                            type="button"
                            className="boton-secundario"
                            disabled={cargando}
                            onClick={() => setPorConfirmar(null)}
                          >
                            Cancelar
                          </button>
                          <small>Sus encargados quedarán sin oficina.</small>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {puntos.length === 0 && <p className="vacio">Todavía no hay puntos de acopio.</p>}
        </section>

        <form className="tarjeta lateral" onSubmit={crear}>
          <h2>Crear punto de acopio</h2>
          <fieldset disabled={cargando}>
            <label>
              Nombre
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej: Edificio de Ingeniería"
                minLength={3}
                maxLength={25}
                required
              />
              <span className="ayuda">No puede repetirse con otro punto.</span>
            </label>
            <label>
              Código
              <input
                value={codigo}
                onChange={(e) => setCodigo(e.target.value.toUpperCase())}
                placeholder="Ej: ING"
                minLength={2}
                maxLength={6}
                pattern="[A-Za-z]{2,6}"
                required
              />
              <span className="ayuda">De 2 a 6 letras. Va antes del número de cada objeto (ING-1, ING-2…).</span>
            </label>
            <label>
              Ubicación
              <input
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
                placeholder="Edificio, piso y referencia"
                minLength={5}
                maxLength={50}
                required
              />
            </label>
            <fieldset className="grupo-casillas">
              <legend>Encargados (al menos uno)</legend>
              {encargados.map((enc) => (
                <label className="casilla" key={enc.id_usuario}>
                  <input
                    type="checkbox"
                    checked={seleccionados.includes(enc.id_usuario)}
                    onChange={() => alternarEncargado(enc.id_usuario)}
                  />
                  <span>
                    {enc.nombres} {enc.apellidos}{' '}
                    <span className="ayuda">({enc.punto ? `hoy en ${enc.punto.nombre}` : 'sin punto'})</span>
                  </span>
                </label>
              ))}
              {encargados.length === 0 && <span className="ayuda">No hay encargados activos.</span>}
            </fieldset>
            <button type="submit" className="boton-ancho">{cargando ? 'Guardando…' : 'Crear punto'}</button>
          </fieldset>
          <p className="ayuda">
            Al desactivar un punto, deja de verse para los usuarios y sus encargados quedan sin oficina.
          </p>
        </form>
      </div>
    </main>
  );
}
