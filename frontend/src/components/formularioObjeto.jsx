import { useState } from 'react';
import { fechaParaMostrar, fechaChilenaAISO } from '../utils/fechaUtils.js';

export default function FormularioObjeto({
  objeto,
  categorias,
  onGuardar,
  permitirFotografias = true,
  textoBoton,
  textoProcesando = 'Guardando…',
}) {
  const edicion = Boolean(objeto);
  const fecha = objeto ? new Date(objeto.hallado_en) : null;
  const [fotos, setFotos] = useState(objeto?.fotografias?.map(f => f.archivo_url) ?? []);
  const [error, setError] = useState('');
  const [guardando, setGuardando] = useState(false);

  async function enviar(evento) {
    evento.preventDefault();
    if (guardando) return;
    setError('');
    const datos = new FormData(evento.currentTarget);
    setGuardando(true);
    try {
      const cuerpo = {
        id_categoria: Number(datos.get('id_categoria')),
        descripcion: datos.get('descripcion').trim(),
        lugar_hallazgo: datos.get('lugar_hallazgo').trim(),
        hallado_en: fechaChilenaAISO(datos.get('fecha'), datos.get('hora')),
        ...(permitirFotografias ? { fotografias: fotos.map(url => ({ archivo_url: url.trim() })) } : {}),
      };
      if (!cuerpo.descripcion || !cuerpo.lugar_hallazgo) throw new Error('Completa la descripción y el lugar.');
      if (edicion) {
        cuerpo.motivo = datos.get('motivo').trim();
        if (cuerpo.motivo.length < 10) throw new Error('El motivo debe tener al menos 10 caracteres.');
      } else if (!fotos.length) throw new Error('Agrega al menos una fotografía para ingresar el objeto.');
      await onGuardar(cuerpo);
    } catch (err) {
      setError([err.message, ...(err.detalles ?? []).map(d => d.mensaje)].join(' '));
    } finally {
      setGuardando(false);
    }
  }

  return <form onSubmit={enviar}>
    {edicion && <aside>
      <strong>Objeto #{objeto.id_objeto}</strong>
      <p>Estado: {objeto.publicado && objeto.estado === 'en_custodia' ? 'Publicado' : objeto.estado.replaceAll('_', ' ')}</p>
      {objeto.registrado_por && <p>Encargado de ingreso: {objeto.registrado_por}</p>}
      {objeto.registrado_en && <p>Fecha de ingreso: {fechaParaMostrar(objeto.registrado_en)}</p>}
      <p>La fecha de ingreso y el plazo de retención se conservan.</p>
    </aside>}
    <fieldset disabled={guardando}>
      <label>Categoría<select name="id_categoria" defaultValue={objeto?.id_categoria ?? ''} required>
        <option value="" disabled>Selecciona una categoría</option>
        {categorias.map(c => <option key={c.id_categoria} value={c.id_categoria}>{c.nombre}</option>)}
      </select></label>
      <label>Descripción<textarea name="descripcion" defaultValue={objeto?.descripcion ?? ''} required /></label>
      <label>Lugar del hallazgo<input name="lugar_hallazgo" defaultValue={objeto?.lugar_hallazgo ?? ''} required /></label>
      <label>Fecha del hallazgo (DD-MM-AAAA)<input name="fecha" placeholder="27-09-2026" defaultValue={fechaParaMostrar(objeto?.hallado_en)} pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" required /></label>
      <label>Hora del hallazgo<input name="hora" type="time" defaultValue={fecha ? `${String(fecha.getHours()).padStart(2, '0')}:${String(fecha.getMinutes()).padStart(2, '0')}` : ''} required /></label>
      {permitirFotografias ? <section aria-label="Fotografías">
        <h2>Fotografías</h2><p>Agrega hasta 3 fotografías mediante su URL.</p>
        {fotos.map((url, i) => <div className="foto" key={i}>
          <label>URL de fotografía {i + 1}<input type="url" value={url} pattern="https?://.+" required onChange={e => setFotos(fotos.map((f, j) => j === i ? e.target.value : f))} /></label>
          <button type="button" onClick={() => setFotos(fotos.filter((_, j) => j !== i))}>Eliminar fotografía {i + 1}</button>
        </div>)}
        <button type="button" disabled={fotos.length >= 3} onClick={() => setFotos([...fotos, ''])}>Agregar fotografía</button>
      </section> : <p>La edición de fotografías aún no está disponible.</p>}
      {edicion && <label>Motivo de la corrección<textarea name="motivo" minLength={10} maxLength={200} required /><small>Entre 10 y 200 caracteres.</small></label>}
      <button type="submit">
        {guardando
          ? textoProcesando
          : textoBoton ?? (edicion ? 'Guardar corrección' : 'Ingresar objeto')}
      </button>
    </fieldset>
    {error && <p role="alert">{error}</p>}
  </form>;
}
