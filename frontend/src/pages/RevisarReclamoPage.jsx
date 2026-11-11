import { useState } from 'react';
import { cambiarEstadoReclamoService } from '../services/reclamosService.js';

// RF10, paso 2: el Encargado del punto aprueba o rechaza una solicitud en revisión.
export default function RevisarReclamoPage({ idInicial = '', onContinuar }) {
  const [idReclamo, setIdReclamo] = useState(idInicial);
  const [estado, setEstado] = useState('aprobado');
  const [motivo, setMotivo] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  const [enviando, setEnviando] = useState(false);

  async function enviar(e) {
    e.preventDefault();
    setResultado(null);
    setError(null);
    setEnviando(true);
    try {
      const respuesta = await cambiarEstadoReclamoService(Number(idReclamo), {
        estado,
        motivo: motivo.trim() || undefined,
      });
      setResultado(respuesta);
    } catch (err) {
      setError(err);
    } finally {
      setEnviando(false);
    }
  }

  const aprobado = resultado?.reclamo.estado === 'aprobado';

  return (
    <div className="dos-columnas">
      <form className="tarjeta principal" onSubmit={enviar}>
        <h2>Aprobar o rechazar una solicitud</h2>
        <fieldset disabled={enviando}>
          <div className="fila-campos">
            <label>
              N° del reclamo
              <input
                type="number"
                min="1"
                required
                value={idReclamo}
                onChange={(e) => setIdReclamo(e.target.value)}
              />
            </label>
            <label>
              Decisión
              <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                <option value="aprobado">Aprobar</option>
                <option value="rechazado">Rechazar</option>
              </select>
            </label>
          </div>
          <label>
            <span>
              Motivo{' '}
              {estado === 'rechazado'
                ? <span className="obligatorio">(obligatorio)</span>
                : <span className="ayuda">(opcional)</span>}
            </span>
            <textarea
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              required={estado === 'rechazado'}
              maxLength={500}
            />
          </label>
        </fieldset>
        <div className="acciones">
          <button type="submit" disabled={enviando}>{enviando ? 'Procesando…' : 'Aplicar decisión'}</button>
        </div>
      </form>

      <aside className="lateral">
        <section className="tarjeta">
          <h2>Ten en cuenta</h2>
          <ul className="lista-simple">
            <li>Solo puedes decidir sobre reclamos de objetos de tu punto de acopio.</li>
            <li>La solicitud debe estar <strong>en revisión</strong>.</li>
            <li>Al rechazar, el motivo queda registrado en la bitácora.</li>
          </ul>
        </section>

        {resultado && (
          <section className={`aviso ${aprobado ? 'exito' : 'alerta'}`} role="status">
            <div>
              <strong>{resultado.mensaje}</strong>
              {resultado.reclamo.motivo_decision && (
                <>
                  <br />
                  Motivo: {resultado.reclamo.motivo_decision}
                </>
              )}
              {aprobado && (
                <>
                  <br />
                  <button
                    type="button"
                    className="boton-enlace"
                    onClick={() => onContinuar?.(resultado.reclamo.id_reclamo)}
                  >
                    Continuar con la entrega
                  </button>
                </>
              )}
            </div>
          </section>
        )}

        {error && (
          <section className="aviso error" role="alert">
            <div>
              <strong>{error.message}</strong>
              {error.detalles?.length > 0 && (
                <ul>
                  {error.detalles.map((detalle, i) => <li key={i}>{detalle.mensaje}</li>)}
                </ul>
              )}
            </div>
          </section>
        )}
      </aside>
    </div>
  );
}
