import Icono from './Icono.jsx';
import { urlArchivo } from '../services/api.js';
import { fechaParaMostrar } from '../utils/fechaUtils.js';

// Hora en formato chileno: 14:30
function horaParaMostrar(valor) {
  return new Date(valor).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' });
}

// Detalle de un objeto del catálogo (RF3).
// No existe un reclamo en línea: solo se muestran las instrucciones de retiro presencial.
export default function DetalleObjeto({ objeto, onVolver }) {
  const metodos = objeto.categoria?.metodos_verificacion ?? [];
  const fotos = objeto.fotografias ?? [];

  return (
    <>
      <div>
        <button type="button" className="boton-secundario" onClick={onVolver}>
          <Icono nombre="volver" />
          Volver al catálogo
        </button>
      </div>

      <div className="dos-columnas">
        <article className="tarjeta principal">
          {fotos.length > 0 ? (
            <div className="galeria">
              {fotos.map((foto) => (
                <a
                  className="objeto-foto"
                  key={foto.posicion}
                  href={urlArchivo(foto.archivo_url)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={urlArchivo(foto.archivo_url)}
                    alt={`Fotografía ${foto.posicion} de ${objeto.descripcion} (se abre en una pestaña nueva)`}
                  />
                </a>
              ))}
            </div>
          ) : (
            <div className="objeto-foto" style={{ aspectRatio: '16 / 5' }}>Este objeto no tiene fotografías</div>
          )}

          <div>
            <small>Objeto #{objeto.id_objeto} · {objeto.categoria?.nombre}</small>
            <h1>{objeto.descripcion}</h1>
          </div>

          <dl className="rejilla-datos">
            <div>
              <dt>Lugar del hallazgo</dt>
              <dd>{objeto.lugar_hallazgo}</dd>
            </div>
            <div>
              <dt>Encontrado el</dt>
              <dd>{fechaParaMostrar(objeto.hallado_en)} a las {horaParaMostrar(objeto.hallado_en)}</dd>
            </div>
            <div>
              <dt>Se retira en</dt>
              <dd>
                {objeto.punto?.nombre ?? 'Sin información'}
                {objeto.punto?.ubicacion && ` · ${objeto.punto.ubicacion}`}
              </dd>
            </div>
            <div>
              <dt>Disponible para retiro hasta</dt>
              <dd>{fechaParaMostrar(objeto.disponible_hasta)}</dd>
            </div>
          </dl>
        </article>

        <aside className="tarjeta lateral retiro">
          <h2>¿Es tuyo? Retíralo en persona</h2>
          <p>Este objeto no se reclama en línea. Acércate al punto de acopio con lo siguiente:</p>
          <ol>
            <li>Tu <strong>cédula de identidad</strong>.</li>
            <li>
              Algo que acredite que el objeto es tuyo.
              {metodos.length > 0 && (
                <>
                  {' '}Para esta categoría sirve:
                  <ul>
                    {metodos.map((metodo) => <li key={metodo}>{metodo}</li>)}
                  </ul>
                </>
              )}
            </li>
            <li>
              Ve a <strong>{objeto.punto?.nombre ?? 'el punto de acopio'}</strong>
              {objeto.punto?.ubicacion && ` (${objeto.punto.ubicacion})`}.
            </li>
          </ol>
          <div className="aviso alerta" role="note">
            <Icono nombre="info" />
            <span>La entrega final queda a criterio del personal a cargo del punto de acopio.</span>
          </div>
        </aside>
      </div>
    </>
  );
}
