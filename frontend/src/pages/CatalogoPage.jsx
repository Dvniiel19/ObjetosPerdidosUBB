import { useEffect, useRef, useState } from 'react';
import { buscarObjetos, listarPuntos, verDetalleObjeto } from '../services/catalogoService.js';
import { listarCategoria } from '../services/objetoService.js';
import DetalleObjeto from '../components/detalleObjeto.jsx';
import Icono from '../components/Icono.jsx';
import { urlArchivo } from '../services/api.js';
import { fechaParaMostrar } from '../utils/fechaUtils.js';
import '../styles/catalogo.css';

const FILTROS_VACIOS = { texto: '', categoria: '', punto: '', lugar: '', fecha_desde: '', fecha_hasta: '' };

// Fecha de hoy en formato AAAA-MM-DD, para no permitir fechas futuras.
const HOY = new Date().toLocaleDateString('sv-SE');

// --- Estado del catálogo en la URL ---
// Los filtros aplicados y el objeto abierto quedan en la dirección
// (ej: ?categoria=1&lugar=casino&objeto=10). Así se puede compartir el link,
// recargar sin perder la búsqueda y usar el botón "atrás" del navegador.

function leerUrl() {
  const parametros = new URLSearchParams(window.location.search);
  const filtros = { ...FILTROS_VACIOS };
  for (const nombre of Object.keys(FILTROS_VACIOS)) {
    filtros[nombre] = parametros.get(nombre) ?? '';
  }
  return { filtros, idObjeto: parametros.get('objeto') };
}

// Cambia solo lo que se indique: "filtros" y/o "objeto" (null lo quita).
// Con modo "push" se crea una entrada nueva en el historial del navegador;
// con "replace" se reemplaza la actual (para no llenar el historial con cada búsqueda).
function actualizarUrl({ filtros, objeto }, modo = 'replace') {
  const parametros = new URLSearchParams(window.location.search);

  if (filtros) {
    for (const nombre of Object.keys(FILTROS_VACIOS)) {
      const valor = String(filtros[nombre] ?? '').trim();
      if (valor) parametros.set(nombre, valor);
      else parametros.delete(nombre);
    }
  }
  if (objeto !== undefined) {
    if (objeto) parametros.set('objeto', objeto);
    else parametros.delete('objeto');
  }

  const consulta = parametros.toString();
  const url = `${window.location.pathname}${consulta ? `?${consulta}` : ''}${window.location.hash}`;
  if (modo === 'push') window.history.pushState(null, '', url);
  else window.history.replaceState(null, '', url);
}

export default function CatalogoPage() {
  // Lo que venía en la URL al abrir la página (se lee una sola vez)
  const [urlInicial] = useState(leerUrl);
  const [filtros, setFiltros] = useState(urlInicial.filtros);
  const [categorias, setCategorias] = useState([]);
  const [puntos, setPuntos] = useState([]);
  const [objetos, setObjetos] = useState(null);
  const [orden, setOrden] = useState('recientes');
  // Si el link trae filtros avanzados, el panel parte abierto para que se vean
  const [avanzados, setAvanzados] = useState(Boolean(urlInicial.filtros.punto || urlInicial.filtros.fecha_hasta));
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [detalle, setDetalle] = useState(null);
  // Búsqueda en curso: si llega otra, la anterior se cancela para que su respuesta
  // (que puede tardar más) no reemplace los resultados de la búsqueda más nueva.
  const busquedaActual = useRef(null);
  // Dónde estaba el usuario en el listado antes de abrir un detalle, para volver ahí
  const posicionListado = useRef(0);
  // true si el detalle se abrió desde el listado (hay una entrada del historial a la que volver)
  const abrioDetalleDesdeListado = useRef(false);

  // Al abrir: listas de los filtros y los objetos según la URL (sin filtros = todos)
  useEffect(() => {
    listarCategoria()
      .then(setCategorias)
      .catch(() => setError('No se pudieron cargar las categorías.'));
    listarPuntos()
      .then(setPuntos)
      .catch(() => setError('No se pudieron cargar los puntos de acopio.'));
    buscar(urlInicial.filtros);
    // Link directo a un objeto (ej: ?objeto=10): se abre su detalle
    if (urlInicial.idObjeto) abrirDetalleDesdeUrl(urlInicial.idObjeto);

    return () => {
      // Al salir de la página se cancela la búsqueda pendiente
      // y se limpia la URL para que no quede en otras pantallas
      busquedaActual.current?.abort();
      actualizarUrl({ filtros: FILTROS_VACIOS, objeto: null });
    };
    // urlInicial no cambia, así que el efecto corre una sola vez
  }, [urlInicial.filtros, urlInicial.idObjeto]);

  // Botones "atrás" y "adelante" del navegador: se muestra lo que diga la URL
  useEffect(() => {
    function alNavegar() {
      abrioDetalleDesdeListado.current = false;
      const { idObjeto } = leerUrl();
      if (idObjeto) abrirDetalleDesdeUrl(idObjeto);
      else setDetalle(null);
    }
    window.addEventListener('popstate', alNavegar);
    return () => window.removeEventListener('popstate', alNavegar);
  }, []);

  // Al abrir un detalle se parte desde arriba; al volver, se recupera la posición del listado
  useEffect(() => {
    window.scrollTo(0, detalle ? 0 : posicionListado.current);
  }, [detalle]);

  function cambiarFiltro(nombre, valor) {
    setFiltros(anteriores => ({ ...anteriores, [nombre]: valor }));
  }

  async function buscar(nuevosFiltros) {
    busquedaActual.current?.abort();
    const controlador = new AbortController();
    busquedaActual.current = controlador;

    setCargando(true);
    setError('');
    // Los filtros aplicados quedan en la URL (sin crear entradas nuevas en el historial)
    actualizarUrl({ filtros: nuevosFiltros });
    try {
      const resultado = await buscarObjetos(nuevosFiltros, { signal: controlador.signal });
      setObjetos(resultado.objetos);
    } catch (err) {
      // Cancelada porque empezó otra búsqueda: esa otra se encarga de mostrar el resultado
      if (err.name === 'AbortError') return;
      // Si es un error de validación se muestran los mensajes de cada filtro
      setError(err.detalles?.length ? err.detalles.map((d) => d.mensaje).join('. ') : err.message);
    } finally {
      // Solo la búsqueda más reciente apaga el "Buscando…"
      if (busquedaActual.current === controlador) setCargando(false);
    }
  }

  function enviar(evento) {
    evento.preventDefault();
    buscar(filtros);
  }

  // Los botones de categoría aplican el filtro de inmediato
  function elegirCategoria(idCategoria) {
    const nuevos = { ...filtros, categoria: idCategoria };
    setFiltros(nuevos);
    buscar(nuevos);
  }

  function limpiar() {
    setFiltros(FILTROS_VACIOS);
    buscar(FILTROS_VACIOS);
  }

  // Clic en "Ver detalle": se guarda la posición del listado y se agrega
  // el objeto a la URL como una entrada nueva (para que "atrás" vuelva al listado)
  async function verDetalle(id) {
    setError('');
    try {
      const resultado = await verDetalleObjeto(id);
      posicionListado.current = window.scrollY;
      actualizarUrl({ objeto: id }, 'push');
      abrioDetalleDesdeListado.current = true;
      setDetalle(resultado.objeto);
    } catch (err) { setError(err.message); }
  }

  // Detalle pedido por la URL (link compartido, recarga o botón "adelante")
  async function abrirDetalleDesdeUrl(id) {
    setError('');
    try {
      const resultado = await verDetalleObjeto(id);
      // Se asegura que la URL muestre el objeto abierto
      actualizarUrl({ objeto: id });
      setDetalle(resultado.objeto);
    } catch (err) {
      // Si el objeto ya no está en el catálogo (entregado, dado de baja...) se muestra el listado
      setError(err.status === 404 ? 'Ese objeto ya no está disponible en el catálogo.' : err.message);
      actualizarUrl({ objeto: null });
      setDetalle(null);
    }
  }

  function volverAlListado() {
    // Si el detalle se abrió desde el listado, "Volver" hace lo mismo que el botón "atrás"
    if (abrioDetalleDesdeListado.current) {
      window.history.back();
      return;
    }
    // Si se llegó por un link directo no hay a dónde volver: se quita el objeto de la URL
    actualizarUrl({ objeto: null });
    setDetalle(null);
  }

  // Si hay un detalle abierto se muestra en vez del listado (los resultados se mantienen al volver)
  if (detalle) {
    return <main className="catalogo"><DetalleObjeto objeto={detalle} onVolver={volverAlListado} /></main>;
  }

  // Los resultados se ordenan por fecha del hallazgo; el usuario elige si de más nuevos a más viejos
  const ordenados = [...(objetos ?? [])].sort((a, b) => {
    const diferencia = new Date(b.hallado_en) - new Date(a.hallado_en);
    return orden === 'recientes' ? diferencia : -diferencia;
  });

  return (
    <main className="catalogo">
      <div>
        <div className="portada">
          <h1>Buscar objetos perdidos</h1>
          <p>Encuentra tus pertenencias extraviadas en los campus de la UBB.</p>
        </div>

        <form className="buscador" onSubmit={enviar}>
          <label>
            ¿Qué buscas?
            <input
              type="search"
              value={filtros.texto}
              onChange={(e) => cambiarFiltro('texto', e.target.value)}
              placeholder="Ej: mochila, llaves, audífonos"
            />
          </label>
          {/* La categoría se elige con los botones de abajo. El filtro principal es el lugar:
              el estudiante recuerda dónde perdió el objeto, no dónde quedó guardado (P1). */}
          <label>
            ¿Dónde lo perdiste?
            <input
              value={filtros.lugar}
              onChange={(e) => cambiarFiltro('lugar', e.target.value)}
              placeholder="Ej: casino, biblioteca, sala AC"
            />
          </label>
          <label>
            ¿Desde cuándo?
            <input
              type="date"
              value={filtros.fecha_desde}
              max={HOY}
              onChange={(e) => cambiarFiltro('fecha_desde', e.target.value)}
            />
          </label>
          <button type="submit" disabled={cargando}>
            <Icono nombre="buscar" tamano={20} />
            {cargando ? 'Buscando…' : 'Buscar'}
          </button>

          {avanzados && (
            <fieldset className="avanzados" style={{ gridColumn: '1 / -1' }}>
              <label>
                ¿Dónde se retira?
                <select value={filtros.punto} onChange={(e) => cambiarFiltro('punto', e.target.value)}>
                  <option value="">Todos los puntos</option>
                  {puntos.map((punto) => (
                    <option key={punto.id_punto} value={punto.id_punto}>{punto.nombre}</option>
                  ))}
                </select>
              </label>
              <label>
                Hasta la fecha
                <input
                  type="date"
                  value={filtros.fecha_hasta}
                  min={filtros.fecha_desde || undefined}
                  max={HOY}
                  onChange={(e) => cambiarFiltro('fecha_hasta', e.target.value)}
                />
              </label>
            </fieldset>
          )}
        </form>
      </div>

      <div className="chips" role="group" aria-label="Filtrar por categoría">
        <button type="button" aria-pressed={filtros.categoria === ''} onClick={() => elegirCategoria('')}>
          Todos
        </button>
        {categorias.map((categoria) => (
          <button
            key={categoria.id_categoria}
            type="button"
            aria-pressed={String(filtros.categoria) === String(categoria.id_categoria)}
            onClick={() => elegirCategoria(String(categoria.id_categoria))}
          >
            {categoria.nombre}
          </button>
        ))}
        <button
          type="button"
          className="separado"
          aria-expanded={avanzados}
          onClick={() => setAvanzados(!avanzados)}
        >
          <Icono nombre="filtros" tamano={16} />
          Filtros avanzados
        </button>
        <button type="button" className="boton-enlace" onClick={limpiar}>Limpiar</button>
      </div>

      {error && <p role="alert">{error}</p>}

      {objetos && (
        <div className="barra-resultados">
          <p role="status">
            {objetos.length === 0
              ? 'No se encontraron objetos con esa búsqueda.'
              : `Se ${objetos.length === 1 ? 'encontró 1 objeto' : `encontraron ${objetos.length} objetos`}`}
          </p>
          {objetos.length > 1 && (
            <label>
              Ordenar por
              <select value={orden} onChange={(e) => setOrden(e.target.value)}>
                <option value="recientes">Más recientes</option>
                <option value="antiguos">Más antiguos</option>
              </select>
            </label>
          )}
        </div>
      )}

      <div className="objetos">
        {ordenados.map((objeto) => {
          const portada = objeto.fotografias?.[0];
          return (
            <article className="objeto" key={objeto.id_objeto}>
              <div className="objeto-foto">
                {portada
                  ? <img src={urlArchivo(portada.archivo_url)} alt={`Fotografía de ${objeto.descripcion}`} loading="lazy" />
                  : <span>Sin fotografía</span>}
              </div>
              <span className="pastilla azul">{objeto.categoria?.nombre}</span>
              <h2>{objeto.descripcion}</h2>
              <p className="dato"><Icono nombre="lugar" tamano={15} />Encontrado en: {objeto.lugar_hallazgo}</p>
              <p className="dato"><Icono nombre="calendario" tamano={15} />Fecha: {fechaParaMostrar(objeto.hallado_en)}</p>
              <p className="dato"><Icono nombre="edificio" tamano={15} />Retirar en: {objeto.punto?.nombre ?? 'Sin información'}</p>
              <span className="pastilla verde">En custodia</span>
              <button type="button" onClick={() => verDetalle(objeto.id_objeto)}>
                Ver detalle y cómo retirar
              </button>
            </article>
          );
        })}
      </div>
    </main>
  );
}
