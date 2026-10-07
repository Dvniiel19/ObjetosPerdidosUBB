import { useState } from 'react';
import { entregarReclamoService } from '../services/reclamosService.js';

// TEMPORAL: encargados del seed, hasta que exista el login
const ENCARGADOS = [
  { id: 2, nombre: 'Bruno Encargado (Biblioteca Central)' },
  { id: 3, nombre: 'Carla Encargada (FACE)' },
];

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
  const [idUsuario, setIdUsuario] = useState('');
  const [idReclamo, setIdReclamo] = useState('');
  const [usuarioReclamante, setUsuarioReclamante] = useState('');
  const [rutCedulaValidada, setRutCedulaValidada] = useState(false);
  const [propiedadAcreditada, setPropiedadAcreditada] = useState(false);
  const [aprobadoPorEncargado, setAprobadoPorEncargado] = useState(false);
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
      const datosValidacion = {
        usuarioReclamante: usuarioReclamante.trim(),
        rutCedulaValidada,
        propiedadAcreditada,
        aprobadoPorEncargado,
        metodosAplicados: metodosSeleccionados,
      };

      const respuesta = await entregarReclamoService(Number(idReclamo), Number(idUsuario), datosValidacion);
      setResultado(respuesta);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1>Entregar objeto reclamado</h1>
      <p>
        Completa las verificaciones exigidas antes de entregar el objeto.
        El Encargado debe aprobar la validación del RUT y la acreditación de propiedad.
      </p>

      <form onSubmit={handleEntregar}>
        <fieldset disabled={loading}>
          <label>Encargado que entrega
            <select value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)} required>
              <option value="">Selecciona un encargado</option>
              {ENCARGADOS.map(enc => (
                <option key={enc.id} value={enc.id}>{enc.nombre}</option>
              ))}
            </select>
          </label>

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

          <label>Nombre del reclamante
            <input
              value={usuarioReclamante}
              onChange={(e) => setUsuarioReclamante(e.target.value)}
              placeholder="Ej: Juan Pérez"
              required
            />
          </label>

          <fieldset>
            <legend>Verificaciones obligatorias</legend>
            <label>
              <input type="checkbox" checked={rutCedulaValidada} onChange={(e) => setRutCedulaValidada(e.target.checked)} />
              RUT de la cédula validado
            </label>
            <label>
              <input type="checkbox" checked={propiedadAcreditada} onChange={(e) => setPropiedadAcreditada(e.target.checked)} />
              Propiedad acreditada según la categoría
            </label>
            <label>
              <input type="checkbox" checked={aprobadoPorEncargado} onChange={(e) => setAprobadoPorEncargado(e.target.checked)} />
              Aprobado por el Encargado del punto de custodia
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
