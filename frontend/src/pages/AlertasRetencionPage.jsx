import { useEffect, useState } from 'react';
import Icono from '../components/Icono.jsx';
import { listarAlertasRetencion } from '../services/cicloVidaService.js';
import { fechaParaMostrar } from '../utils/fechaUtils.js';

// RF1: avisos de objetos que están por cumplir un año en custodia.
// El Encargado ve los de su punto; el Administrador, los de todos los puntos.
export default function AlertasRetencionPage({ usuario, irA }) {
  const [alertas, setAlertas] = useState(null);
  const [error, setError] = useState('');

  const esAdmin = usuario.rol === 'administrador';

  useEffect(() => {
    listarAlertasRetencion()
      .then(setAlertas)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main className="ciclo-vida">
      <div className="cabecera-pagina">
        <div>
          <h1>Objetos por vencer</h1>
          <p>
            {esAdmin
              ? 'Objetos de todos los puntos que están por cumplir un año en custodia.'
              : 'Objetos de tu punto que están por cumplir un año en custodia.'}{' '}
            Si nadie los retira, pasarán automáticamente a <strong>no reclamado</strong> en la fecha indicada.
          </p>
        </div>
      </div>

      {error && <p role="alert">{error}</p>}
      {!alertas && !error && <p role="status">Cargando avisos…</p>}

      {alertas && alertas.length > 0 && (
        <div className="aviso alerta" role="note">
          <Icono nombre="alerta" tamano={20} />
          <span>
            <strong>{alertas.length === 1 ? '1 objeto recibió' : `${alertas.length} objetos recibieron`}</strong>{' '}
            aviso de retención. El aviso llega al Encargado del punto y al Administrador.
          </span>
        </div>
      )}

      {alertas && (
        <section className="tarjeta sin-relleno">
          {alertas.length === 0 ? (
            <p className="vacio">No hay objetos por vencer en este momento.</p>
          ) : (
            <table className="tabla-min">
              <thead>
                <tr>
                  <th>Objeto</th>
                  <th>Categoría</th>
                  {esAdmin && <th>Punto</th>}
                  <th>Registrado</th>
                  <th>Pasa a no reclamado</th>
                  <th>Quedan</th>
                  {esAdmin && <th className="celda-acciones">Acciones</th>}
                </tr>
              </thead>
              <tbody>
                {alertas.map((alerta) => (
                  <tr key={alerta.id_objeto}>
                    <td>
                      <span className="numero">#{alerta.id_objeto}</span> · {alerta.descripcion}
                    </td>
                    <td>{alerta.categoria}</td>
                    {esAdmin && <td>{alerta.punto_acopio}</td>}
                    <td>{fechaParaMostrar(alerta.registrado_en)}</td>
                    <td className="celda-principal">{fechaParaMostrar(alerta.vence_el)}</td>
                    <td>
                      <span className={`pastilla ${alerta.dias_restantes <= 7 ? 'rojo' : 'ambar'}`}>
                        {alerta.dias_restantes === 1 ? '1 día' : `${alerta.dias_restantes} días`}
                      </span>
                    </td>
                    {esAdmin && (
                      <td className="celda-acciones">
                        <button
                          type="button"
                          className="boton-secundario"
                          onClick={() => irA('historial', { idObjeto: alerta.id_objeto })}
                        >
                          Ver historial
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      )}

      <p className="ayuda">La revisión automática se ejecuta una vez al día.</p>
    </main>
  );
}
