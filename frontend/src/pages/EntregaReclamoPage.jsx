import React, { useState } from 'react';
import { entregarReclamoService } from '../services/reclamosService.js';

export const EntregaReclamoPage = () => {
  const [idReclamo, setIdReclamo] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEntregar = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResultado(null);

    try {
      const datosValidacion = {
        usuarioReclamante: "Juan Pérez",
        rutCedulaValidada: true,
        propiedadAcreditada: true,
        aprobadoPorEncargado: true,
        metodosAplicados: ["Cédula de identidad", "Boleta de compra"]
      };

      const respuesta = await entregarReclamoService(idReclamo, datosValidacion);
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
        Ingresa el ID del reclamo para procesar la entrega del objeto.
        El Encargado debe verificar la identidad y propiedad antes de aprobar.
      </p>

      <form onSubmit={handleEntregar}>
        <label htmlFor="id-reclamo">ID del reclamo</label>
        <input
          id="id-reclamo"
          type="number"
          value={idReclamo}
          onChange={(e) => setIdReclamo(e.target.value)}
          placeholder="Ej: 15"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Procesando…' : 'Entregar objeto'}
        </button>
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
