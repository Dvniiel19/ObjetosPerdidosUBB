import { useState } from 'react';
import { entregarReclamoService } from '../services/reclamosService.js';

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

export const EntregaReclamoPage = () => {
  const [idReclamo, setIdReclamo] = useState('');
  const [rutCedulaValidada, setRutCedulaValidada] = useState(false);
  const [propiedadAcreditada, setPropiedadAcreditada] = useState(false);
  const [metodosSeleccionados, setMetodosSeleccionados] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function toggleMetodo(metodo) {
    setMetodosSeleccionados(prev =>
      prev.includes(metodo) ? prev.filter(m => m !== metodo) : [...prev, metodo],
    );
  }

  const handleEntregar = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResultado(null);

    try {
      // El sistema registra los resultados de las verificaciones realizadas presencialmente.
      const datosValidacion = {
        rutCedulaValidada,
        propiedadAcreditada,
        metodosAplicados: metodosSeleccionados,
      };

      const respuesta = await entregarReclamoService(Number(idReclamo), datosValidacion);
      setResultado(respuesta);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1>Entregar objeto</h1>
      <p>
        Registra en el sistema los resultados de las verificaciones realizadas presencialmente.
        La confirmación de entrega la realiza el Encargado autenticado del punto de custodia.
      </p>

      <form onSubmit={handleEntregar}>
        <fieldset disabled={loading}>
          <label htmlFor="id-reclamo">ID del reclamo</label>
          <input
            id="id-reclamo"
            type="number"
            min="1"
            value={idReclamo}
            onChange={(e) => setIdReclamo(e.target.value)}
            placeholder="Ej: 15"
            required
          />

          <fieldset>
            <legend>Resultados de verificación (presencial → registro en sistema)</legend>
            <label>
              <input type="checkbox" checked={rutCedulaValidada} onChange={(e) => setRutCedulaValidada(e.target.checked)} />
              Identidad verificada: RUT de cédula validado
            </label>
            <label>
              <input type="checkbox" checked={propiedadAcreditada} onChange={(e) => setPropiedadAcreditada(e.target.checked)} />
              Propiedad acreditada según la categoría del objeto
            </label>
          </fieldset>

          <fieldset>
            <legend>Métodos de acreditación aplicados (al menos uno)</legend>
            {METODOS_DISPONIBLES.map(metodo => (
              <label key={metodo}>
                <input
                  type="checkbox"
                  checked={metodosSeleccionados.includes(metodo)}
                  onChange={() => toggleMetodo(metodo)}
                />
                {metodo}
              </label>
            ))}
          </fieldset>

          <button type="submit" disabled={loading}>
            {loading ? 'Procesando…' : 'Entregar objeto'}
          </button>
        </fieldset>
      </form>

      {error && (
        <section className="entrega-error" role="alert">
          <h2>Error en la entrega</h2>
          <p>{error.message}</p>
        </section>
      )}

      {resultado && (
        <section className="entrega-exito" aria-labelledby="titulo-exito">
          <h2 id="titulo-exito">{resultado.message}</h2>
          <dl>
            <dt>Estado</dt>
            <dd>{resultado.estado}</dd>

            <dt>Número de comprobante</dt>
            <dd>{resultado.comprobanteEntrega.numeroComprobante}</dd>

            <dt>Reclamante</dt>
            <dd>{resultado.comprobanteEntrega.reclamante}</dd>

            <dt>Fecha de entrega</dt>
            <dd>
              {new Date(resultado.comprobanteEntrega.fechaEntrega).toLocaleString('es-CL')}
            </dd>

            <dt>Métodos de verificación</dt>
            <dd>
              <ul>
                {resultado.comprobanteEntrega.metodosVerificacionUtilizados.map((metodo, i) => (
                  <li key={i}>{metodo}</li>
                ))}
              </ul>
            </dd>
          </dl>
        </section>
      )}
    </main>
  );
};
