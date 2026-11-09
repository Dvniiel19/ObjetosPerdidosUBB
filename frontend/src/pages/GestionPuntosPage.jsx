import { useEffect, useState } from 'react';
import { obtenerTodosLosPuntos, listarEncargados, crearPunto, desactivarPunto } from '../services/puntoService.js';

export default function GestionPuntosPage(){
    const [puntos, setPuntos] = useState([]);
    const [encargados, setEncargados] = useState([]);
    const [nombre, setNombre] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [seleccionados, setSeleccionados] = useState([]);
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
            await crearPunto({nombre, ubicacion, encargados: seleccionados});
            setMensaje('Punto creado exitosamente.');
            setNombre('');
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
        if(!window.confirm(`¿Desactivar ${punto.nombre}? Sus encargados quedarán sin oficina.`)){
            return;
        }
        setError('');
        setMensaje('');
        setCargando(true);
        try{
            await desactivarPunto(punto.id_punto);
            setMensaje(`Punto "${punto.nombre}" desactivado exitosamente.`);
            await cargar();
        } catch (err){
            setError(err.message);
        } finally {
            setCargando(false);
        }
    }

  return (
    <main>
      <h1>Puntos de objetos perdidos</h1>
      {error && <p role="alert">{error}</p>}
      {mensaje && <p role="status">{mensaje}</p>}

      <h2>Crear punto</h2>
      <form onSubmit={crear}>
        <fieldset disabled={cargando}>
          <label>Nombre
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} maxLength={25} required />
          </label>
          <label>Ubicación
            <input value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} maxLength={50} required />
          </label>
          <fieldset>
            <legend>Encargados (al menos uno)</legend>
            {encargados.map((enc) => (
              <label key={enc.id_usuario}>
                <input
                  type="checkbox"
                  checked={seleccionados.includes(enc.id_usuario)}
                  onChange={() => alternarEncargado(enc.id_usuario)}
                />
                {enc.nombres} {enc.apellidos} ({enc.punto ? `hoy en ${enc.punto.nombre}` : 'sin punto'})
              </label>
            ))}
          </fieldset>
          <button type="submit">{cargando ? 'Guardando…' : 'Crear punto'}</button>
        </fieldset>
      </form>

      <h2>Puntos registrados</h2>
      <div className="objetos">
        {puntos.map((punto) => (
          <article className="objeto" key={punto.id_punto}>
            <small>
              {punto.habilitado ? 'Habilitado' : 'Desactivado'} · {punto._count.objetos} objeto(s) en custodia
            </small>
            <h2>{punto.nombre}</h2>
            <p>{punto.ubicacion}</p>
            <p>
              Encargados:{' '}
              {punto.encargados.length
                ? punto.encargados.map((e) => `${e.nombres} ${e.apellidos}`).join(', ')
                : 'ninguno'}
            </p>
            {punto.habilitado && (
              punto._count.objetos > 0
                ? <p>No se puede desactivar, tienes objetos en custodia.</p>
                : <button type="button" disabled={cargando} onClick={() => desactivar(punto)}>Desactivar</button>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}