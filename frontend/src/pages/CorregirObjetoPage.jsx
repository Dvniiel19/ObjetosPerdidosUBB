import { useState } from 'react';
import FormularioObjeto from '../components/formularioObjeto.jsx';
import { obtenerObjetoParaEditar, guardarObjetoEditado, listarCategoria } from '../services/editarObjetoService.js';
import { pedir } from '../services/api.js';

// TEMPORAL: encargados del seed, hasta que exista el login
const ENCARGADOS = [
  { id: 2, nombre: 'Bruno Encargado (Biblioteca Central)' },
  { id: 3, nombre: 'Carla Encargada (FACE)' },
];

export default function CorregirObjetoPage() {
  const [idUsuario, setIdUsuario] = useState('');
  const [objetos, setObjetos] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [sesion, setSesion] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [version, setVersion] = useState(0);

  async function buscar(evento) {
    evento.preventDefault();
    setCargando(true); setError(''); setMensaje('');
    try {
      const resultado = await pedir(`/objetos?texto=${encodeURIComponent(busqueda.trim())}`);
      setObjetos(resultado.objetos);
    } catch (err) { setError(err.message); }
    finally { setCargando(false); }
  }

  async function seleccionar(idObjeto) {
    setCargando(true); setError(''); setMensaje('');
    try {
      const objeto = await obtenerObjetoParaEditar(idObjeto, Number(idUsuario));
      if (objeto.estado !== 'en_custodia') throw new Error('Este objeto ya no está disponible para corrección.');
      let categorias;
      try { categorias = await listarCategoria(); }
      catch {
        // El catálogo de categorías actual puede no estar disponible.
        const catalogo = objetos.find(o => o.id_objeto === idObjeto);
        categorias = [...new Map(objetos.filter(o => o.categoria).map(o => [o.categoria.id_categoria, o.categoria])).values()];
        if (!categorias.some(c => c.id_categoria === objeto.id_categoria)) categorias.push({ id_categoria: objeto.id_categoria, nombre: catalogo?.categoria?.nombre ?? `Categoría ${objeto.id_categoria}` });
        setError('No se pudo cargar la lista completa de categorías. Se muestran las disponibles en el catálogo.');
      }
      setSesion({ objeto, categorias });
      setVersion(v => v + 1);
    } catch (err) { setError(err.message); }
    finally { setCargando(false); }
  }

  async function guardar(datos) {
    setMensaje('');
    // La API de corrección actual solo acepta los cuatro campos y el motivo.
    const objeto = await guardarObjetoEditado(sesion.objeto.id_objeto, datos, Number(idUsuario));
    const actualizado = { ...sesion.objeto, ...objeto };
    setSesion({ ...sesion, objeto: actualizado });
    setObjetos(objetos.map(o => o.id_objeto === objeto.id_objeto ? {
      ...o, ...objeto, categoria: sesion.categorias.find(c => c.id_categoria === objeto.id_categoria) ?? o.categoria,
    } : o));
    setMensaje('Objeto actualizado. La corrección quedó registrada en su historial.');
    setVersion(v => v + 1);
  }

  return <main>
    <h1>Corregir objeto perdido</h1>
    {error && <p role="alert">{error}</p>}
    {mensaje && <p role="status">{mensaje}</p>}
    {sesion ? <>
      <button type="button" onClick={() => { setSesion(null); setMensaje(''); setError(''); }}>← Volver a los objetos</button>
      <FormularioObjeto key={version} objeto={sesion.objeto} categorias={sesion.categorias} onGuardar={guardar} permitirFotografias={false} />
    </> : <>
      <p>Busca y selecciona el objeto que necesitas corregir.</p>
      <form onSubmit={buscar}>
        <fieldset disabled={cargando}>
                   <label>Encargado
            <select value={idUsuario} onChange={e => { setIdUsuario(e.target.value); setObjetos(null); }} required>
              <option value="">Selecciona un encargado</option>
              {ENCARGADOS.map(enc => (
                <option key={enc.id} value={enc.id}>{enc.nombre}</option>
              ))}
            </select>
          </label>
          <label>Buscar objeto<input value={busqueda} onChange={e => setBusqueda(e.target.value)} placeholder="Descripción o lugar de hallazgo" /></label>
          <button type="submit">{cargando ? 'Cargando…' : 'Buscar objetos'}</button>
        </fieldset>
      </form>
      {objetos?.length === 0 && <p role="status">No se encontraron objetos con esa búsqueda.</p>}
      <div className="objetos">
        {objetos?.map(objeto => <article className="objeto" key={objeto.id_objeto}>
          <small>Objeto #{objeto.id_objeto} · {objeto.categoria?.nombre}</small>
          <h2>{objeto.descripcion}</h2>
          <p>Lugar: {objeto.lugar_hallazgo}</p>
          <p>Oficina: {objeto.punto?.nombre ?? 'Sin información'}</p>
          <button type="button" disabled={cargando} onClick={() => seleccionar(objeto.id_objeto)}>Corregir este objeto</button>
        </article>)}
      </div>
    </>}
  </main>;
}
