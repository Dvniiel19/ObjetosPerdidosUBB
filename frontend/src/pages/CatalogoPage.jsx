import { useEffect, useState } from 'react';
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

export default function CatalogoPage() {
  const [filtros, setFiltros] = useState(FILTROS_VACIOS);
  const [categorias, setCategorias] = useState([]);
  const [puntos, setPuntos] = useState([]);
  const [objetos, setObjetos] = useState(null);
  const [orden, setOrden] = useState('recientes');
  const [avanzados, setAvanzados] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [detalle, setDetalle] = useState(null);

  // Al abrir: listas de los filtros y todos los objetos disponibles
  useEffect(() => {
    listarCategoria()
      .then(setCategorias)
      .catch(() => setError('No se pudieron cargar las categorías.'));
    listarPuntos()
      .then(setPuntos)
      .catch(() => setError('No se pudieron cargar los puntos de acopio.'));
    buscarObjetos(FILTROS_VACIOS)
      .then((resultado) => setObjetos(resultado.objetos))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  function cambiarFiltro(nombre, valor) {
    setFiltros(anteriores => ({ ...anteriores, [nombre]: valor }));
  }

  async function buscar(nuevosFiltros) {
    setCargando(true);
    setError('');
    try {
      const resultado = await buscarObjetos(nuevosFiltros);
      setObjetos(resultado.objetos);
    } catch (err) {
      // Si es un error de validación se muestran los mensajes de cada filtro
      setError(err.detalles?.length ? err.detalles.map((d) => d.mensaje).join('. ') : err.message);
    } finally {
      setCargando(false);
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

  async function verDetalle(id) {
    setError('');
    try {
      const resultado = await verDetalleObjeto(id);
      setDetalle(resultado.objeto);
    } catch (err) { setError(err.message); }
  }

  // Si hay un detalle abierto se muestra en vez del listado (los resultados se mantienen al volver)
  if (detalle) {
    return <main className="catalogo"><DetalleObjeto objeto={detalle} onVolver={() => setDetalle(null)} /></main>;
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
          <label>
            Categoría
            <select value={filtros.categoria} onChange={(e) => cambiarFiltro('categoria', e.target.value)}>
              <option value="">Todas</option>
              {categorias.map((categoria) => (
                <option key={categoria.id_categoria} value={categoria.id_categoria}>{categoria.nombre}</option>
              ))}
            </select>
          </label>
          <label>
            ¿Dónde se retira?
            <select value={filtros.punto} onChange={(e) => cambiarFiltro('punto', e.target.value)}>
              <option value="">Todos</option>
              {puntos.map((punto) => (
                <option key={punto.id_punto} value={punto.id_punto}>{punto.nombre}</option>
              ))}
            </select>
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
                Lugar del hallazgo
                <input
                  value={filtros.lugar}
                  onChange={(e) => cambiarFiltro('lugar', e.target.value)}
                  placeholder="Ej: casino, gimnasio, sala"
                />
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
