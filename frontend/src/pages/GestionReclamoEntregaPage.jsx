import { useEffect, useState } from 'react';
import {
  listarReclamosDisponiblesService,
  cambiarEstadoReclamoService,
  entregarReclamoService,
} from '../services/reclamosService.js';

const METODOS_DISPONIBLES = [
  'Boleta de compra',
  'Contenido de la mochila',
  'Descripcion detallada',
  'Fotografia con el objeto',
  'Fotografia del documento',
  'Marca y talla',
  'Nombre del titular',
  'Nombre o numero de serie',
  'Numero de documento',
  'Numero de llave',
  'Numero de serie',
];

function etiquetaReclamo(r) {
  const desc = r.objeto?.descripcion ? ` · ${r.objeto.descripcion}` : '';
  const estado = r.estado === 'en_revision' ? 'En revisión' : 'Aprobado';
  return `#${r.id_reclamo} · ${r.nombre_reclamante} (${r.rut_reclamante})${desc} — ${estado}`;
}

// Paso combinado: aprobar/rechazar y verificar/entregar en una sola pantalla.
export default function GestionReclamoEntregaPage({ idInicial = '' }) {
  const [reclamos, setReclamos] = useState([]);
  const [cargandoLista, setCargandoLista] = useState(true);
  const [idReclamo, setIdReclamo] = useState(idInicial ? String(idInicial) : '');

  // Decisión (aprobar/rechazar)
  const [estadoDecision, setEstadoDecision] = useState('aprobado');
  const [motivo, setMotivo] = useState('');
  const [resultadoDecision, setResultadoDecision] = useState(null);
  const [errorDecision, setErrorDecision] = useState(null);
  const [enviandoDecision, setEnviandoDecision] = useState(false);

  // Entrega
  const [rutCedulaValidada, setRutCedulaValidada] = useState(false);
  const [propiedadAcreditada, setPropiedadAcreditada] = useState(false);
  const [metodosSeleccionados, setMetodosSeleccionados] = useState([]);
  const [resultadoEntrega, setResultadoEntrega] = useState(null);
  const [errorEntrega, setErrorEntrega] = useState(null);
  const [enviandoEntrega, setEnviandoEntrega] = useState(false);

  async function cargarReclamos(seleccionarId = null) {
    setCargandoLista(true);
    try {
      const data = await listarReclamosDisponiblesService();
      const lista = data.reclamos || [];
      setReclamos(lista);
      if (seleccionarId != null) {
        setIdReclamo(String(seleccionarId));
      } else if (lista.length === 1) {
        setIdReclamo(String(lista[0].id_reclamo));
      } else if (idReclamo && !lista.some((r) => String(r.id_reclamo) === String(idReclamo))) {
        setIdReclamo('');
      }
    } catch {
      setReclamos([]);
    } finally {
      setCargandoLista(false);
    }
  }

  useEffect(() => {
    cargarReclamos(idInicial || null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reclamoSeleccionado = reclamos.find((r) => String(r.id_reclamo) === String(idReclamo)) || null;

  function limpiarEntrega() {
    setRutCedulaValidada(false);
    setPropiedadAcreditada(false);
    setMetodosSeleccionados([]);
    setResultadoEntrega(null);
    setErrorEntrega(null);
  }

  function alCambiarReclamo(nuevoId) {
    setIdReclamo(nuevoId);
    setResultadoDecision(null);
    setErrorDecision(null);
    setMotivo('');
    setEstadoDecision('aprobado');
    limpiarEntrega();
  }

  async function enviarDecision(e) {
    e.preventDefault();
    if (!idReclamo) return;
    setResultadoDecision(null);
    setErrorDecision(null);
    setErrorEntrega(null);
    setEnviandoDecision(true);
    try {
      if (estadoDecision === 'aprobado') {
        // Primero se aprueba el reclamo y luego se confirma la entrega con las verificaciones realizadas.
        const respuestaDecision = await cambiarEstadoReclamoService(Number(idReclamo), {
          estado: 'aprobado',
          motivo: motivo.trim() || undefined,
        });
        const respuestaEntrega = await entregarReclamoService(Number(idReclamo), {
          rutCedulaValidada,
          propiedadAcreditada,
          metodosAplicados: metodosSeleccionados,
        });
        setResultadoDecision(respuestaDecision);
        setResultadoEntrega(respuestaEntrega);
        await cargarReclamos(null);
      } else {
        const respuesta = await cambiarEstadoReclamoService(Number(idReclamo), {
          estado: 'rechazado',
          motivo: motivo.trim() || undefined,
        });
        setResultadoDecision(respuesta);
        await cargarReclamos(null);
      }
    } catch (err) {
      // Si falló algo, mostramos el error (puede ser de aprobación o de entrega)
      if (err?.message?.includes('entrega') || err?.message?.includes('Entrega') || err?.message?.includes('Verificación') || err?.message?.includes('aprobado para poder confirmar')) {
        setErrorEntrega(err);
        // el reclamo pudo quedar aprobado; recargar para reflejar estado real
        await cargarReclamos(idReclamo);
      } else {
        setErrorDecision(err);
      }
      setResultadoDecision(null);
    } finally {
      setEnviandoDecision(false);
    }
  }

  function toggleMetodo(metodo) {
    setMetodosSeleccionados((prev) => (
      prev.includes(metodo) ? prev.filter((m) => m !== metodo) : [...prev, metodo]
    ));
  }

  const identidadLista = Boolean(idReclamo) && rutCedulaValidada;
  const hayMetodo = metodosSeleccionados.length > 0;
  const listoEntrega = identidadLista && propiedadAcreditada && hayMetodo;

  async function handleEntregar(e) {
    e.preventDefault();
    setEnviandoEntrega(true);
    setErrorEntrega(null);
    setResultadoEntrega(null);
    try {
      const respuesta = await entregarReclamoService(Number(idReclamo), {
        rutCedulaValidada,
        propiedadAcreditada,
        metodosAplicados: metodosSeleccionados,
      });
      setResultadoEntrega(respuesta);
      await cargarReclamos(null);
    } catch (err) {
      setErrorEntrega(err);
    } finally {
      setEnviandoEntrega(false);
    }
  }

  if (resultadoEntrega) {
    const comprobante = resultadoEntrega.comprobanteEntrega;
    return (
      <section className="tarjeta entrega-exito" aria-labelledby="titulo-exito">
        <div className="aviso exito" role="status">
          <strong id="titulo-exito">{resultadoEntrega.message}</strong>
        </div>
        <dl className="rejilla-datos">
          <div><dt>Número de comprobante</dt><dd><strong>{comprobante.numeroComprobante}</strong></dd></div>
          <div><dt>Reclamante</dt><dd>{comprobante.reclamante} · RUT {comprobante.rutReclamante}</dd></div>
          <div><dt>Fecha y hora de entrega</dt><dd>{new Date(comprobante.fechaEntrega).toLocaleString('es-CL')}</dd></div>
          <div><dt>Verificaciones aprobadas</dt><dd>Identidad (RUT de la cédula) y propiedad</dd></div>
          <div><dt>Métodos de acreditación aplicados</dt><dd>{comprobante.metodosVerificacionUtilizados.join(', ')}</dd></div>
          <div><dt>Estado del objeto</dt><dd><span className="pastilla azul">Entregado</span></dd></div>
        </dl>
        <div className="acciones">
          <button type="button" onClick={() => { setResultadoEntrega(null); alCambiarReclamo(''); cargarReclamos(null); }}>
            Gestionar otro reclamo
          </button>
        </div>
      </section>
    );
  }

  return (
    <div className="dos-columnas">
      <div className="principal">
        <section className="tarjeta">
          <h2>Seleccionar reclamo</h2>
          {cargandoLista ? (
            <p role="status">Cargando reclamos disponibles…</p>
          ) : (
            <label>
              N° de reclamo disponible
              <select value={idReclamo} onChange={(e) => alCambiarReclamo(e.target.value)}>
                <option value="">Selecciona un reclamo…</option>
                {reclamos.map((r) => (
                  <option key={r.id_reclamo} value={r.id_reclamo}>
                    {etiquetaReclamo(r)}
                  </option>
                ))}
              </select>
            </label>
          )}
          {!cargandoLista && reclamos.length === 0 && (
            <p className="ayuda">No hay reclamos en revisión o aprobados en tu punto de acopio.</p>
          )}
          {reclamoSeleccionado && (
            <p className="ayuda">
              Estado actual: <strong>{reclamoSeleccionado.estado === 'en_revision' ? 'En revisión' : 'Aprobado'}</strong>
              {reclamoSeleccionado.objeto?.descripcion ? ` · Objeto: ${reclamoSeleccionado.objeto.descripcion}` : ''}
            </p>
          )}
        </section>

        {reclamoSeleccionado?.estado === 'en_revision' && (
          <form className="tarjeta" onSubmit={enviarDecision}>
            <h2>1. Verificación (obligatoria antes de decidir)</h2>
            <fieldset disabled={enviandoDecision}>
              <section>
                <h3>Identidad (cédula presencial)</h3>
                <label className="casilla">
                  <input
                    type="checkbox"
                    checked={rutCedulaValidada}
                    onChange={(e) => setRutCedulaValidada(e.target.checked)}
                  />
                  <span>Revisé la cédula y el RUT coincide con el de la solicitud</span>
                </label>
              </section>

              <section>
                <h3>Acreditación de propiedad</h3>
                <fieldset className="grupo-casillas">
                  <legend>Métodos aplicados según la categoría del objeto (al menos uno)</legend>
                  <div className="fila-campos" style={{ gap: '0 16px' }}>
                    {METODOS_DISPONIBLES.map((metodo) => (
                      <label className="casilla" key={metodo}>
                        <input
                          type="checkbox"
                          checked={metodosSeleccionados.includes(metodo)}
                          onChange={() => toggleMetodo(metodo)}
                        />
                        <span>{metodo}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className="casilla">
                  <input
                    type="checkbox"
                    checked={propiedadAcreditada}
                    onChange={(e) => setPropiedadAcreditada(e.target.checked)}
                  />
                  <span>La persona acreditó que el objeto es suyo</span>
                </label>
              </section>
            </fieldset>

            <ul className="lista-verificacion">
              <li className={identidadLista ? 'ok' : 'falta'}>
                <span aria-hidden="true">{identidadLista ? '✓' : '!'}</span>
                Identidad {identidadLista ? 'aprobada' : 'pendiente'}
              </li>
              <li className={hayMetodo ? 'ok' : 'falta'}>
                <span aria-hidden="true">{hayMetodo ? '✓' : '!'}</span>
                {hayMetodo ? `${metodosSeleccionados.length} método(s) de acreditación` : 'Falta un método de acreditación'}
              </li>
              <li className={propiedadAcreditada ? 'ok' : 'falta'}>
                <span aria-hidden="true">{propiedadAcreditada ? '✓' : '!'}</span>
                Propiedad {propiedadAcreditada ? 'aprobada' : 'pendiente'}
              </li>
            </ul>

            <h2>2. Decisión (aprobar o rechazar)</h2>
            {!listoEntrega && (
              <p className="ayuda" role="status">Completa la verificación para poder aprobar o rechazar.</p>
            )}
            <fieldset disabled={enviandoDecision || !listoEntrega}>
              <label>
                Decisión
                <select value={estadoDecision} onChange={(e) => setEstadoDecision(e.target.value)}>
                  <option value="aprobado">Aprobar y entregar</option>
                  <option value="rechazado">Rechazar</option>
                </select>
              </label>
              <label>
                <span>
                  Motivo{' '}
                  {estadoDecision === 'rechazado'
                    ? <span className="obligatorio">(obligatorio)</span>
                    : <span className="ayuda">(opcional)</span>}
                </span>
                <textarea
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                  required={estadoDecision === 'rechazado'}
                  maxLength={500}
                />
              </label>
            </fieldset>
            <div className="acciones">
              <button
                type="submit"
                className={listoEntrega && estadoDecision === 'aprobado' ? 'boton-confirmar-listo' : ''}
                disabled={enviandoDecision || !listoEntrega}
              >
                {enviandoDecision ? 'Procesando…' : (estadoDecision === 'aprobado' ? 'Aprobar y entregar' : 'Rechazar reclamo')}
              </button>
            </div>
          </form>
        )}

        {reclamoSeleccionado?.estado === 'aprobado' && (
          <form className="tarjeta" onSubmit={handleEntregar}>
            <h2>Verificar y entregar</h2>
            <fieldset disabled={enviandoEntrega}>
              <section>
                <h3>1. Identidad (cédula presencial)</h3>
                <label className="casilla">
                  <input
                    type="checkbox"
                    checked={rutCedulaValidada}
                    onChange={(e) => setRutCedulaValidada(e.target.checked)}
                  />
                  <span>Revisé la cédula y el RUT coincide con el de la solicitud</span>
                </label>
              </section>

              <section>
                <h3>2. Acreditación de propiedad</h3>
                <fieldset className="grupo-casillas">
                  <legend>Métodos aplicados según la categoría del objeto (al menos uno)</legend>
                  <div className="fila-campos" style={{ gap: '0 16px' }}>
                    {METODOS_DISPONIBLES.map((metodo) => (
                      <label className="casilla" key={metodo}>
                        <input
                          type="checkbox"
                          checked={metodosSeleccionados.includes(metodo)}
                          onChange={() => toggleMetodo(metodo)}
                        />
                        <span>{metodo}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className="casilla">
                  <input
                    type="checkbox"
                    checked={propiedadAcreditada}
                    onChange={(e) => setPropiedadAcreditada(e.target.checked)}
                  />
                  <span>La persona acreditó que el objeto es suyo</span>
                </label>
              </section>
            </fieldset>

            <ul className="lista-verificacion">
              <li className={identidadLista ? 'ok' : 'falta'}>
                <span aria-hidden="true">{identidadLista ? '✓' : '!'}</span>
                Identidad {identidadLista ? 'aprobada' : 'pendiente'}
              </li>
              <li className={hayMetodo ? 'ok' : 'falta'}>
                <span aria-hidden="true">{hayMetodo ? '✓' : '!'}</span>
                {hayMetodo ? `${metodosSeleccionados.length} método(s) de acreditación` : 'Falta un método de acreditación'}
              </li>
              <li className={propiedadAcreditada ? 'ok' : 'falta'}>
                <span aria-hidden="true">{propiedadAcreditada ? '✓' : '!'}</span>
                Propiedad {propiedadAcreditada ? 'aprobada' : 'pendiente'}
              </li>
            </ul>

            <button
              type="submit"
              className={`boton-ancho${listoEntrega ? ' boton-confirmar-listo' : ''}`}
              disabled={!listoEntrega || enviandoEntrega}
            >
              {enviandoEntrega ? 'Procesando…' : 'Confirmar entrega'}
            </button>
            {!listoEntrega && (
              <p className="ayuda" role="status">No se puede entregar mientras una verificación no esté aprobada.</p>
            )}
          </form>
        )}
      </div>

      <aside className="lateral">
        <section className="tarjeta">
          <h2>Cómo funciona</h2>
          <ul className="lista-simple">
            <li>Selecciona un reclamo <strong>en revisión</strong>: primero completa la verificación y luego aprueba (y entrega) o rechaza.</li>
            <li>Si el reclamo ya está <strong>aprobado</strong>, completa la verificación y confirma la entrega.</li>
            <li>Solo se muestran reclamos de tu punto de acopio.</li>
          </ul>
          <div className="acciones">
            <button type="button" onClick={() => cargarReclamos(idReclamo || null)} disabled={cargandoLista}>
              Actualizar lista
            </button>
          </div>
        </section>

        {resultadoDecision && (
          <section className={`aviso ${resultadoDecision.reclamo?.estado === 'aprobado' ? 'exito' : 'alerta'}`} role="status">
            <div>
              <strong>{resultadoDecision.mensaje}</strong>
              {resultadoDecision.reclamo?.motivo_decision && (<><br />Motivo: {resultadoDecision.reclamo.motivo_decision}</>)}
            </div>
          </section>
        )}

        {errorDecision && (
          <section className="aviso error" role="alert">
            <div>
              <strong>{errorDecision.message}</strong>
              {errorDecision.detalles?.length > 0 && (
                <ul>{errorDecision.detalles.map((detalle, i) => <li key={i}>{detalle.mensaje}</li>)}</ul>
              )}
            </div>
          </section>
        )}

        {errorEntrega && (
          <section className="aviso error" role="alert">
            <div>
              <strong>{errorEntrega.message}</strong>
              {errorEntrega.detalles?.length > 0 && (
                <ul>{errorEntrega.detalles.map((detalle, i) => <li key={i}>{detalle.mensaje}</li>)}</ul>
              )}
            </div>
          </section>
        )}
      </aside>
    </div>
  );
}
