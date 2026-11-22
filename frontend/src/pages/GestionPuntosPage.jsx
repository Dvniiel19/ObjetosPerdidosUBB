import { useEffect, useState } from 'react';
import { obtenerTodosLosPuntos, listarEncargados, crearPunto, desactivarPunto } from '../services/puntoService.js';
import GestionEncargados from '../components/GestionEncargados.jsx';
import {
    cabecera, textoCabecera, columnas, tarjetaTablaPrincipal, tarjetaLateral, tabla, th, fila, td, tdDerecha,
    nota, notaAcciones, vacio, ayuda, avisoExito, pastillaGris, pastillaVerde, botonSecundario, botonPeligro, botonPeligroRelleno,
} from '../styles/clases.js';
import '../styles/tailwind.css';
import '../styles/gestion.css'; // no la usa esta pantalla, pero si otras de la app

// Lee "-36.8216, -73.0117" (como las copia Google Maps); vacio = sin mapa, null = mal escrito
function leerCoordenadas(texto) {
    if (!texto.trim()) return {};
    const partes = texto.split(',').map((parte) => Number(parte.trim()));
    if (partes.length !== 2 || partes.some(Number.isNaN)) return null;
    return { latitud: partes[0], longitud: partes[1] };
}

export default function GestionPuntosPage(){
    const [puntos, setPuntos] = useState([]);
    const [encargados, setEncargados] = useState([]);
    const [nombre, setNombre] = useState('');
    const [codigo, setCodigo] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [coordenadas, setCoordenadas] = useState('');
    const [seleccionados, setSeleccionados] = useState([]);
    // id del punto que se esta por desactivar (pide confirmacion antes)
    const [porConfirmar, setPorConfirmar] = useState(null);
    const [error, setError] = useState('');
    const [mensaje, setMensaje] = useState('');
    // Aviso del formulario de crear (se muestra junto al boton para que se vea)
    const [avisoFormulario, setAvisoFormulario] = useState(null);
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
        setAvisoFormulario(null);
        if(seleccionados.length === 0){
            setAvisoFormulario({ tipo: 'error', texto: 'Debes seleccionar al menos un encargado para crear el punto.' });
            return;
        }
        const ubicacionMapa = leerCoordenadas(coordenadas);
        if(!ubicacionMapa){
            setAvisoFormulario({ tipo: 'error', texto: 'Escribe las coordenadas así: -36.8216, -73.0117' });
            return;
        }
        setCargando(true);
        try{
            await crearPunto({nombre, codigo, ubicacion, ...ubicacionMapa, encargados: seleccionados});
            setAvisoFormulario({ tipo: 'exito', texto: 'Punto creado exitosamente.' });
            setNombre('');
            setCodigo('');
            setUbicacion('');
            setCoordenadas('');
            setSeleccionados([]);
            await cargar();
        } catch (err){
            // Si es un error de validacion se muestran los mensajes de cada campo
            setAvisoFormulario({
                tipo: 'error',
                texto: err.detalles?.length ? err.detalles.map((d) => d.mensaje).join('. ') : err.message,
            });
        } finally {
            setCargando(false);
        }
    }

    // Desactivar punto
    async function desactivar(punto){
        setError('');
        setMensaje('');
        setAvisoFormulario(null);
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
    <main className="max-w-[1160px]">
      <div className={cabecera}>
        <div>
          <h1 className="mb-2">Puntos de acopio</h1>
          <p className={textoCabecera}>Crea puntos nuevos y desactiva los que ya no funcionan.</p>
        </div>
      </div>

      {error && <p role="alert">{error}</p>}
      {mensaje && <p className={avisoExito} role="status">{mensaje}</p>}

      <div className={columnas}>
        <section className={tarjetaTablaPrincipal} aria-label="Puntos registrados">
          <table className={tabla}>
            <thead>
              <tr>
                <th className={th}>Punto</th>
                <th className={th}>Encargados</th>
                <th className={th}>En custodia</th>
                <th className={th}>Estado</th>
                <th className={th}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {puntos.map((punto) => {
                const enCustodia = punto._count.objetos;
                return (
                  <tr key={punto.id_punto} className={fila}>
                    <td className={td}>
                      <div className="font-semibold">{punto.nombre} <span className={pastillaGris}>{punto.codigo}</span></div>
                      <small className={nota}>{punto.ubicacion}</small>
                      {punto.latitud != null && (
                        <a
                          className="text-[14px] text-(--azul-institucional) underline"
                          href={`https://www.google.com/maps?q=${punto.latitud},${punto.longitud}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ver en el mapa
                        </a>
                      )}
                    </td>
                    <td className={td}>
                      {punto.encargados.length > 0
                        ? punto.encargados.map((e) => <div key={e.id_usuario}>{e.nombres} {e.apellidos}</div>)
                        : <span className="text-[14px] text-(--text)">Sin encargado</span>}
                    </td>
                    <td className={td}>{enCustodia}</td>
                    <td className={td}>
                      {punto.habilitado
                        ? <span className={pastillaVerde}>Habilitado</span>
                        : <span className={pastillaGris}>Desactivado</span>}
                    </td>
                    <td className={tdDerecha}>
                      {punto.habilitado && enCustodia > 0 && (
                        <>
                          <button type="button" className={botonPeligro} disabled>Desactivar</button>
                          <small className={notaAcciones}>Tiene objetos en custodia</small>
                        </>
                      )}
                      {punto.habilitado && enCustodia === 0 && porConfirmar !== punto.id_punto && (
                        <button
                          type="button"
                          className={botonPeligro}
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
                            className={botonPeligroRelleno}
                            disabled={cargando}
                            onClick={() => desactivar(punto)}
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
                          <small className={notaAcciones}>Sus encargados quedarán sin oficina.</small>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {puntos.length === 0 && <p className={vacio}>Todavía no hay puntos de acopio.</p>}
        </section>

        <form className={tarjetaLateral} onSubmit={crear}>
          <h2 className="m-0">Crear punto de acopio</h2>
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
              <span className={ayuda}>No puede repetirse con otro punto.</span>
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
              <span className={ayuda}>De 2 a 6 letras. Va antes del número de cada objeto (ING-1, ING-2…).</span>
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
            <label>
              Coordenadas (opcional)
              <input
                value={coordenadas}
                onChange={(e) => setCoordenadas(e.target.value)}
                placeholder="-36.8216, -73.0117"
              />
              <span className={ayuda}>En Google Maps haz clic derecho sobre el lugar y copia las coordenadas. Con ellas el punto aparece en el mapa para externos.</span>
            </label>
            <fieldset className="py-2.5 px-3.5 border border-(--border) rounded-[8px]">
              <legend>Encargados (al menos uno)</legend>
              {encargados.map((enc) => (
                <label className="min-h-9" key={enc.id_usuario}>
                  <input
                    type="checkbox"
                    checked={seleccionados.includes(enc.id_usuario)}
                    onChange={() => alternarEncargado(enc.id_usuario)}
                  />
                  <span>
                    {enc.nombres} {enc.apellidos}{' '}
                    <span className={ayuda}>({enc.punto ? `hoy en ${enc.punto.nombre}` : 'sin punto'})</span>
                  </span>
                </label>
              ))}
              {encargados.length === 0 && <span className={ayuda}>No hay encargados activos.</span>}
            </fieldset>
            {avisoFormulario?.tipo === 'error' && <p role="alert">{avisoFormulario.texto}</p>}
            {avisoFormulario?.tipo === 'exito' && <p className={avisoExito} role="status">{avisoFormulario.texto}</p>}
            <button type="submit" className="w-full">{cargando ? 'Guardando…' : 'Crear punto'}</button>
          </fieldset>
          <p className={ayuda}>
            Al desactivar un punto, deja de verse para los usuarios y sus encargados quedan sin oficina.
          </p>
        </form>
      </div>

      <GestionEncargados encargados={encargados} puntos={puntos} onCambio={cargar} />
    </main>
  );
}
