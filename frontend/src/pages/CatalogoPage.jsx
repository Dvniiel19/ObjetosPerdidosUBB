import { useState } from 'react';
import { buscarObjetos } from '../services/catalogoService.js';
import { fechaParaMostrar } from '../utils/fechaUtils.js';

export default function CatalogoPage() {
  const [texto, setTexto] = useState('');
  const [objetos, setObjetos] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  async function buscar(evento) {
    evento.preventDefault();
    setCargando(true); setError('');
    try {
      const resultado = await buscarObjetos(texto);
      setObjetos(resultado.objetos);
    } catch (err) { setError(err.message); }
    finally { setCargando(false); }
  }

  return <main>
    <h1>Buscar objetos perdidos</h1>
    <p>Revisa los objetos que están en custodia en los puntos de acopio.</p>
    {error && <p role="alert">{error}</p>}
    <form onSubmit={buscar}>
      <fieldset disabled={cargando}>
        <label>Buscar objeto<input value={texto} onChange={e => setTexto(e.target.value)} placeholder="Descripción o lugar de hallazgo" /></label>
        <button type="submit">{cargando ? 'Cargando…' : 'Buscar objetos'}</button>
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
