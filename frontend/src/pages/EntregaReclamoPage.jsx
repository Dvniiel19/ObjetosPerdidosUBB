import { useState } from 'react';
import { entregarReclamoService } from '../services/reclamosService.js';

// Métodos de acreditación de propiedad definidos por categoría en el sistema.
// El backend acepta solo los que correspondan a la categoría del objeto.
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

// RF10, paso 3: registrar las verificaciones presenciales y confirmar la entrega.
export const EntregaReclamoPage = ({ idInicial = '' }) => {
  const [idReclamo, setIdReclamo] = useState(idInicial);
  const [rutCedulaValidada, setRutCedulaValidada] = useState(false);
  const [propiedadAcreditada, setPropiedadAcreditada] = useState(false);
  const [metodosSeleccionados, setMetodosSeleccionados] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function toggleMetodo(metodo) {
    setMetodosSeleccionados((prev) => (
      prev.includes(metodo) ? prev.filter((m) => m !== metodo) : [...prev, metodo]
    ));
  }

  // La entrega solo se puede confirmar cuando todas las verificaciones están aprobadas
  const identidadLista = Boolean(idReclamo) && rutCedulaValidada;
  const hayMetodo = metodosSeleccionados.length > 0;
  const listo = identidadLista && propiedadAcreditada && hayMetodo;

  const handleEntregar = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResultado(null);

    try {
      // El sistema registra los resultados de las verificaciones realizadas presencialmente.
      const respuesta = await entregarReclamoService(Number(idReclamo), {
        rutCedulaValidada,
        propiedadAcreditada,
        metodosAplicados: metodosSeleccionados,
      });
      setResultado(respuesta);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (resultado) {
    const comprobante = resultado.comprobanteEntrega;
    return (
      <section className="tarjeta entrega-exito" aria-labelledby="titulo-exito">
        <div className="aviso exito" role="status">
          <strong id="titulo-exito">{resultado.message}</strong>
        </div>
        <dl className="rejilla-datos">
          <div>
            <dt>Número de comprobante</dt>
            <dd><strong>{comprobante.numeroComprobante}</strong></dd>
          </div>
          <div>
            <dt>Reclamante</dt>
            <dd>{comprobante.reclamante} · RUT {comprobante.rutReclamante}</dd>
          </div>
          <div>
            <dt>Fecha y hora de entrega</dt>
            <dd>{new Date(comprobante.fechaEntrega).toLocaleString('es-CL')}</dd>
          </div>
          <div>
            <dt>Verificaciones aprobadas</dt>
            <dd>Identidad (RUT de la cédula) y propiedad</dd>
          </div>
          <div>
            <dt>Métodos de acreditación aplicados</dt>
            <dd>{comprobante.metodosVerificacionUtilizados.join(', ')}</dd>
          </div>
          <div>
            <dt>Estado del objeto</dt>
            <dd><span className="pastilla azul">Entregado</span></dd>
          </div>
        </dl>
      </section>
    );
  }

  return (
    <form className="dos-columnas" onSubmit={handleEntregar}>
      <div className="principal">
        <section className="tarjeta">
          <h2>1. Identidad (cédula presencial)</h2>
          <fieldset disabled={loading}>
            <label>
              N° del reclamo aprobado
              <input
                type="number"
                min="1"
                value={idReclamo}
                onChange={(e) => setIdReclamo(e.target.value)}
                required
                style={{ maxWidth: 220 }}
              />
            </label>
            <label className="casilla">
              <input
                type="checkbox"
                checked={rutCedulaValidada}
                onChange={(e) => setRutCedulaValidada(e.target.checked)}
              />
              <span>Revisé la cédula y el RUT coincide con el de la solicitud</span>
            </label>
          </fieldset>
        </section>

        <section className="tarjeta">
          <h2>2. Acreditación de propiedad</h2>
          <fieldset disabled={loading}>
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
          </fieldset>
        </section>
      </div>

      <aside className="tarjeta lateral">
        <h2>3. Confirmar entrega</h2>
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
          className={`boton-ancho${listo ? ' boton-confirmar-listo' : ''}`}
          disabled={!listo || loading}
        >
          {loading ? 'Procesando…' : 'Confirmar entrega'}
        </button>
        {!listo && (
          <p className="ayuda" role="status">
            No se puede entregar mientras una verificación no esté aprobada.
          </p>
        )}

        {error && (
          <div className="aviso error entrega-error" role="alert">
            <div>
              <strong>{error.message}</strong>
              {error.detalles?.length > 0 && (
                <ul>
                  {error.detalles.map((detalle, i) => <li key={i}>{detalle.mensaje}</li>)}
                </ul>
              )}
            </div>
          </div>
        )}

        <p className="ayuda">
          Al confirmar, el objeto pasa a <strong>entregado</strong> de forma irreversible y se genera
          un comprobante con el reclamante, la fecha y hora y las verificaciones aplicadas.
        </p>
      </aside>
    </form>
  );
};
