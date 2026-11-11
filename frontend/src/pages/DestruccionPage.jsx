import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Icono from '../components/Icono.jsx';
import ActaDestruccion from '../components/ActaDestruccion.jsx';
import {
  listarCandidatosDestruccion,
  listarActasDestruccion,
  registrarDestruccion,
} from '../services/cicloVidaService.js';
import { fechaParaMostrar } from '../utils/fechaUtils.js';

function cargarDatos() {
  return Promise.all([listarCandidatosDestruccion(), listarActasDestruccion()]);
}

// RF1: el Administrador registra la destrucción segura de un objeto no reclamado.
export default function DestruccionPage({ usuario, irA }) {
  const [candidatos, setCandidatos] = useState(null);
  const [actas, setActas] = useState([]);
  const [elegido, setElegido] = useState(null);
  const [archivoUrl, setArchivoUrl] = useState('');
  const [confirmado, setConfirmado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');
  // Acta que se está imprimiendo (o guardando como PDF) en este momento
  const [actaImprimir, setActaImprimir] = useState(null);

  useEffect(() => {
    cargarDatos()
      .then(([listaCandidatos, listaActas]) => {
        setCandidatos(listaCandidatos);
        setActas(listaActas);
      })
      .catch((err) => setError(err.message));
  }, []);

  // Igual que la etiqueta del inventario: primero se dibuja el acta y después se abre
  // el diálogo de impresión. Al cerrarlo se quita, así la próxima lleva solo esa acta.
  useEffect(() => {
    if (!actaImprimir) return undefined;

    function alTerminar() {
      setActaImprimir(null);
    }
    window.addEventListener('afterprint', alTerminar);
    const espera = setTimeout(() => window.print(), 50);

    return () => {
      clearTimeout(espera);
      window.removeEventListener('afterprint', alTerminar);
    };
  }, [actaImprimir]);

  function elegir(candidato) {
    setElegido(candidato);
    setArchivoUrl('');
    setConfirmado(false);
    setError('');
    setMensaje('');
  }

  async function darDeBaja(evento) {
    evento.preventDefault();
    setError('');
    setMensaje('');
    setEnviando(true);
    try {
      const respuesta = await registrarDestruccion(elegido.id_objeto, archivoUrl.trim());
      const nuevaActa = respuesta.datos.acta;
      setMensaje(
        `Objeto #${elegido.id_objeto} dado de baja. Acta N° ${nuevaActa.numero_acta}: `
        + 'se abrió para imprimirla o guardarla como PDF, y puedes descargarla de nuevo cuando quieras.',
      );
      setElegido(null);
      const [listaCandidatos, listaActas] = await cargarDatos();
      setCandidatos(listaCandidatos);
      setActas(listaActas);
      // El acta se genera sola con los datos recién guardados
      setActaImprimir(listaActas.find((acta) => acta.id_acta === nuevaActa.id_acta) ?? null);
    } catch (err) {
      setError(err.detalles?.length ? err.detalles.map((d) => d.mensaje).join('. ') : err.message);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="ciclo-vida">
      <div className="cabecera-pagina">
        <div>
          <h1>Destrucción segura</h1>
          <p>
            Objetos que cumplieron un año sin ser retirados. Solo se pueden dar de baja si están
            en estado no reclamado, cumplieron el plazo y no tienen reclamos pendientes.
          </p>
        </div>
      </div>

      {error && <p role="alert">{error}</p>}
      {mensaje && <p className="aviso exito" role="status">{mensaje}</p>}

      <div className="dos-columnas">
        <div className="principal">
          <h2>Candidatos a baja</h2>
          <section className="tarjeta sin-relleno">
            {!candidatos && !error && <p className="vacio" role="status">Cargando candidatos…</p>}
            {candidatos?.length === 0 && <p className="vacio">No hay objetos no reclamados en este momento.</p>}
            {candidatos?.length > 0 && (
              <table className="tabla-min">
                <thead>
                  <tr>
                    <th>Objeto</th>
                    <th>Punto</th>
                    <th>Registrado</th>
                    <th>Elegibilidad</th>
                    <th className="celda-acciones">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {candidatos.map((candidato) => (
                    <tr key={candidato.id_objeto}>
                      <td>
                        <span className="numero">#{candidato.id_objeto}</span> · {candidato.descripcion}
                        <br />
                        <small>{candidato.categoria}</small>
                      </td>
                      <td>{candidato.punto_acopio}</td>
                      <td>{fechaParaMostrar(candidato.registrado_en)}</td>
                      <td>
                        {candidato.elegible
                          ? <span className="pastilla verde">Elegible</span>
                          : (
                            <>
                              <span className="pastilla rojo">Bloqueado</span>
                              <br />
                              <small>{candidato.motivo_bloqueo}</small>
                            </>
                          )}
                      </td>
                      <td className="celda-acciones">
                        {candidato.elegible && (
                          <button
                            type="button"
                            className="boton-secundario"
                            aria-pressed={elegido?.id_objeto === candidato.id_objeto}
                            onClick={() => elegir(candidato)}
                          >
                            {elegido?.id_objeto === candidato.id_objeto ? 'Seleccionado' : 'Seleccionar'}
                          </button>
                        )}{' '}
                        <button
                          type="button"
                          className="boton-enlace"
                          onClick={() => irA('historial', { idObjeto: candidato.id_objeto })}
                        >
                          Historial
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>

          <h2>Actas registradas</h2>
          <section className="tarjeta sin-relleno">
            {actas.length === 0 ? (
              <p className="vacio">Todavía no se han registrado actas de destrucción.</p>
            ) : (
              <table className="tabla-min">
                <thead>
                  <tr>
                    <th>Acta</th>
                    <th>Objeto</th>
                    <th>Fecha</th>
                    <th>Responsable</th>
                    <th className="celda-acciones">Acta</th>
                  </tr>
                </thead>
                <tbody>
                  {actas.map((acta) => (
                    <tr key={acta.id_acta}>
                      <td className="celda-principal">{acta.numero_acta}</td>
                      <td>
                        {acta.objetos.map((objeto) => (
                          <div key={objeto.id_objeto}>
                            <span className="numero">#{objeto.id_objeto}</span> · {objeto.descripcion}
                          </div>
                        ))}
                      </td>
                      <td>{fechaParaMostrar(acta.ejecutada_en)}</td>
                      <td>{acta.firmante.nombres} {acta.firmante.apellidos}</td>
                      <td className="celda-acciones">
                        <button type="button" className="boton-secundario" onClick={() => setActaImprimir(acta)}>
                          <Icono nombre="documento" />
                          Descargar acta
                        </button>
                        {acta.archivo_url && (
                          <>
                            <br />
                            <a href={acta.archivo_url} target="_blank" rel="noreferrer">Copia firmada</a>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        </div>

        <form className="tarjeta lateral" onSubmit={darDeBaja}>
          <h2>Registrar destrucción</h2>
          {!elegido && (
            <p className="ayuda">Selecciona un objeto elegible de la lista para registrar su baja.</p>
          )}
          {elegido && (
            <fieldset disabled={enviando}>
              <dl className="rejilla-datos">
                <div>
                  <dt>Objeto</dt>
                  <dd>#{elegido.id_objeto} · {elegido.descripcion}</dd>
                </div>
                <div>
                  <dt>Responsable</dt>
                  <dd>{usuario.nombres} {usuario.apellidos}</dd>
                </div>
                <div>
                  <dt>Fecha</dt>
                  <dd>{fechaParaMostrar(new Date())} (automática)</dd>
                </div>
              </dl>
              <p className="aviso">
                El acta se genera automáticamente al dar de baja el objeto, con estos datos.
                Se abrirá para imprimirla o guardarla como PDF.
              </p>
              <label>
                Enlace a la copia firmada (opcional)
                <input
                  type="url"
                  value={archivoUrl}
                  onChange={(e) => setArchivoUrl(e.target.value)}
                  placeholder="https://…/acta-firmada.pdf"
                  pattern="https?://.+"
                />
                <span className="ayuda">
                  Si ya tienen el acta firmada y escaneada (por ejemplo en Drive), peguen aquí su enlace.
                </span>
              </label>
              <label className="casilla">
                <input
                  type="checkbox"
                  checked={confirmado}
                  onChange={(e) => setConfirmado(e.target.checked)}
                  required
                />
                <span>Confirmo que el objeto fue destruido de forma segura. Esta acción no se puede deshacer.</span>
              </label>
              <button type="submit" className="boton-peligro relleno boton-ancho" disabled={!confirmado || enviando}>
                <Icono nombre="documento" />
                {enviando ? 'Registrando…' : 'Dar de baja el objeto'}
              </button>
            </fieldset>
          )}
        </form>
      </div>

      {/* El acta se dibuja directo en <body>, fuera de la app, para que al imprimir
          sea lo único en la hoja (ver cicloVida.css). En pantalla no se ve. */}
      {actaImprimir && createPortal(
        <div className="acta-impresion">
          <ActaDestruccion acta={actaImprimir} />
        </div>,
        document.body,
      )}
    </main>
  );
}
