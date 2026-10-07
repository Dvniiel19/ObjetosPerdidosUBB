import { useState } from 'react';
import { crearReclamoService } from '../services/reclamosService.js';

export default function CrearReclamoPage() {
  const [formulario, setFormulario] = useState({
    id_objeto: '',
    rut_reclamante: '',
    nombre_reclamante: '',
    evidencia_identidad: '',
    evidencia_propiedad: '',
  });
  const [mensaje, setMensaje] = useState(null);
  const [enviando, setEnviando] = useState(false);

  function actualizar(campo, valor) {
    setFormulario(prev => ({ ...prev, [campo]: valor }));
  }

  async function enviar(e) {
    e.preventDefault();
    setMensaje(null);
    setEnviando(true);
    try {
      const resultado = await crearReclamoService({
        id_objeto: Number(formulario.id_objeto),
        rut_reclamante: formulario.rut_reclamante.trim(),
        nombre_reclamante: formulario.nombre_reclamante.trim(),
        evidencia_identidad: formulario.evidencia_identidad.trim(),
        evidencia_propiedad: formulario.evidencia_propiedad.trim(),
      });
      setMensaje({ tipo: 'exito', texto: `${resultado.mensaje} Reclamo #${resultado.reclamo.id_reclamo} en estado '${resultado.reclamo.estado}'.` });
      setFormulario({ id_objeto: '', rut_reclamante: '', nombre_reclamante: '', evidencia_identidad: '', evidencia_propiedad: '' });
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main>
      <h1>Nueva solicitud de objeto</h1>
      <p>Completa los datos para registrar la solicitud de devolución. El Encargado revisará el reclamo.</p>

      {mensaje && (
        <p role={mensaje.tipo === 'error' ? 'alert' : 'status'} style={{ color: mensaje.tipo === 'error' ? '#d32f2f' : '#2e7d32' }}>
          {mensaje.texto}
        </p>
      )}

      <form onSubmit={enviar}>
        <fieldset disabled={enviando}>
          <label>ID del objeto
            <input type="number" min="1" required value={formulario.id_objeto} onChange={e => actualizar('id_objeto', e.target.value)} />
          </label>
          <label>RUT del reclamante (ej: 12345678-9)
            <input required value={formulario.rut_reclamante} onChange={e => actualizar('rut_reclamante', e.target.value)} placeholder="12345678-9" />
          </label>
          <label>Nombre del reclamante
            <input required value={formulario.nombre_reclamante} onChange={e => actualizar('nombre_reclamante', e.target.value)} />
          </label>
          <label>Evidencia de identidad (ruta/URL)
            <input required value={formulario.evidencia_identidad} onChange={e => actualizar('evidencia_identidad', e.target.value)} placeholder="https://..." />
          </label>
          <label>Evidencia de propiedad (ruta/URL)
            <input required value={formulario.evidencia_propiedad} onChange={e => actualizar('evidencia_propiedad', e.target.value)} placeholder="https://..." />
          </label>
          <button type="submit">{enviando ? 'Enviando…' : 'Solicitar reclamo'}</button>
        </fieldset>
      </form>
    </main>
  );
}
