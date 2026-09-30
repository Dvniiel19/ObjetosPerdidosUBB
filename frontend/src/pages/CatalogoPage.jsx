import { useEffect, useState } from 'react';
import { buscarObjetos, listarPuntos } from '../services/catalogoService.js';
import { listarCategoria } from '../services/editarObjetoService.js';
import { fechaParaMostrar } from '../utils/fechaUtils.js';

const FILTROS_VACIOS = { texto: '', categoria: '', punto: '', lugar: '', fecha_desde: '' };

// Fecha de hoy en formato AAAA-MM-DD, para no permitir fechas futuras.
const HOY = new Date().toLocaleDateString('sv-SE');

export default function CatalogoPage() {
  const [filtros, setFiltros] = useState(FILTROS_VACIOS);
  const [categorias, setCategorias] = useState([]);
  const [puntos, setPuntos] = useState([]);
  const [objetos, setObjetos] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    listarCategoria()
      .then(setCategorias)
      .catch(() => setError('No se pudieron cargar las categorías.'));
    listarPuntos()
      .then(setPuntos)
      .catch(() => setError('No se pudieron cargar los puntos de acopio.'));
  }, []);

  function cambiarFiltro(nombre, valor) {
    setFiltros(anteriores => ({ ...anteriores, [nombre]: valor }));
  }

  async function buscar(evento) {
    evento.preventDefault();
    setCargando(true); setError('');
    try {
      const resultado = await buscarObjetos(filtros);
      setObjetos(resultado.objetos);
    } catch (err) { setError(err.message); }
    finally { setCargando(false); }
  }

  function limpiar() {
    setFiltros(FILTROS_VACIOS);
    setObjetos(null);
    setError('');
  }

  return <main>
    <h1>Buscar objetos perdidos</h1>
    <p>Revisa los objetos que están en custodia en los puntos de acopio.</p>
    {error && <p role="alert">{error}</p>}
    <form onSubmit={buscar}>
      <fieldset disabled={cargando}>
        <label>Buscar objeto<input value={filtros.texto} onChange={e => cambiarFiltro('texto', e.target.value)} placeholder="Descripción o lugar de hallazgo" /></label>
        <label>Categoría
          <select value={filtros.categoria} onChange={e => cambiarFiltro('categoria', e.target.value)}>
            <option value="">Todas las categorías</option>
            {categorias.map(categoria => (
              <option key={categoria.id_categoria} value={categoria.id_categoria}>{categoria.nombre}</option>
            ))}
          </select>
        </label>
        <label>Punto de acopio
          <select value={filtros.punto} onChange={e => cambiarFiltro('punto', e.target.value)}>
            <option value="">Todos los puntos</option>
            {puntos.map(punto => (
              <option key={punto.id_punto} value={punto.id_punto}>{punto.nombre}</option>
            ))}
          </select>
        </label>
        <label>Lugar de hallazgo<input value={filtros.lugar} onChange={e => cambiarFiltro('lugar', e.target.value)} placeholder="Ej: Biblioteca, casino, sala" /></label>
        {/* Se muestran los objetos encontrados desde ese día en adelante. */}
        <label>¿Cuándo lo perdiste?<input type="date" value={filtros.fecha_desde} max={HOY} onChange={e => cambiarFiltro('fecha_desde', e.target.value)} /></label>
        <button type="submit">{cargando ? 'Cargando…' : 'Buscar objetos'}</button>
        <button type="button" onClick={limpiar}>Limpiar filtros</button>
      </fieldset>
    </form>
    {objetos && <p role="status">{objetos.length === 0 ? 'No se encontraron objetos con esa búsqueda.' : `Se encontraron ${objetos.length} objetos.`}</p>}
    <div className="objetos">
      {objetos?.map(objeto => <article className="objeto" key={objeto.id_objeto}>
        <small>Objeto #{objeto.id_objeto} · {objeto.categoria?.nombre}</small>
        <h2>{objeto.descripcion}</h2>
        <p>Lugar: {objeto.lugar_hallazgo}</p>
        <p>Encontrado el: {fechaParaMostrar(objeto.hallado_en)}</p>
        <p>Retirar en: {objeto.punto?.nombre ?? 'Sin información'}{objeto.punto?.ubicacion && ` (${objeto.punto.ubicacion})`}</p>
      </article>)}
    </div>
  </main>;
}
