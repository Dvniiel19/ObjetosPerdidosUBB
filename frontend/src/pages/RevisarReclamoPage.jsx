import { useState } from 'react';
import { cambiarEstadoReclamoService } from '../services/reclamosService.js';

// TEMPORAL: encargados del seed, hasta que exista el login
const ENCARGADOS = [
  { id: 2, nombre: 'Bruno Encargado (Biblioteca Central)' },
  { id: 3, nombre: 'Carla Encargada (FACE)' },
];

export default function RevisarReclamoPage() {
  const [idUsuario, setIdUsuario] = useState('');
  const [idReclamo, setIdReclamo] = useState('');
  const [estado, setEstado] = useState('aprobado');
  const [motivo, setMotivo] = useState('');
  const [mensaje, setMensaje] = useState(null);
  const [enviando, setEnviando] = useState(false);

  async function enviar(e) {
    e.preventDefault();
    setMensaje(null);
    setEnviando(true);
    try {
      const resultado = await cambiarEstadoReclamoService(Number(idReclamo), Number(idUsuario), {
        estado,
        motivo: motivo.trim() || undefined,
      });
      setMensaje({ tipo: 'exito', texto: `${resultado.mensaje} ${resultado.reclamo.motivo_decision ? `Motivo: ${resultado.reclamo.motivo_decision}` : ''}` });
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main>
      <h1>Gestionar solicitudes (Encargado)</h1>
      <p>Aprueba o rechaza una solicitud de devolución. Solo un Encargado del punto de custodia puede hacerlo.</p>

      {mensaje && (
        <p role={mensaje.tipo === 'error' ? 'alert' : 'status'} style={{ color: mensaje.tipo === 'error' ? '#d32f2f' : '#2e7d32' }}>
          {mensaje.texto}
        </p>
      )}

      <form onSubmit={enviar}>
        <fieldset disabled={enviando}>
          <label>Encargado
            <select value={idUsuario} onChange={e => setIdUsuario(e.target.value)} required>
              <option value="">Selecciona un encargado</option>
              {ENCARGADOS.map(enc => (
                <option key={enc.id} value={enc.id}>{enc.nombre}</option>
              ))}
            </select>
          </label>
          <label>ID del reclamo
            <input type="number" min="1" required value={idReclamo} onChange={e => setIdReclamo(e.target.value)} />
          </label>
          <label>Decisión
            <select value={estado} onChange={e => setEstado(e.target.value)}>
              <option value="aprobado">Aprobar</option>
              <option value="rechazado">Rechazar</option>
            </select>
          </label>
          <label>Motivo {estado === 'rechazado' && '(obligatorio)'}
            <textarea value={motivo} onChange={e => setMotivo(e.target.value)} required={estado === 'rechazado'} maxLength={500} />
          </label>
          <button type="submit">{enviando ? 'Procesando…' : 'Aplicar decisión'}</button>
        </fieldset>
      </form>
    </main>
  );
}
