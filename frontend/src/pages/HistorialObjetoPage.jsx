import { useEffect, useState } from 'react';
import Icono from '../components/Icono.jsx';
import { obtenerHistorialObjeto } from '../services/cicloVidaService.js';
import { fechaParaMostrar } from '../utils/fechaUtils.js';

const ESTADOS = {
  en_custodia: { texto: 'En custodia', color: 'verde' },
  no_reclamado: { texto: 'No reclamado', color: 'ambar' },
  entregado: { texto: 'Entregado', color: 'azul' },
  dado_de_baja: { texto: 'Dado de baja', color: '' },
};

// Cómo se muestra cada tipo de evento de la línea de tiempo
const EVENTOS = {
  registro: { titulo: 'Objeto registrado', color: '' },
  correccion: { titulo: 'Corrección de datos', color: '' },
  crear_reclamo: { titulo: 'Reclamo registrado', color: 'ambar' },
  aprobar_reclamo: { titulo: 'Reclamo aprobado', color: 'verde' },
  rechazar_reclamo: { titulo: 'Reclamo rechazado', color: 'ambar' },
  confirmar_entrega: { titulo: 'Objeto entregado', color: 'verde' },
  entregar_objeto: { titulo: 'Objeto entregado', color: 'verde' },
  alerta_retencion: { titulo: 'Aviso de retención', color: 'ambar' },
  marcar_no_reclamado: { titulo: 'Marcado como no reclamado', color: 'rojo' },
  registrar_destruccion: { titulo: 'Dado de baja', color: 'negro' },
};

const CAMPOS = {
  id_categoria: 'categoría',
  descripcion: 'descripción',
  lugar_hallazgo: 'lugar del hallazgo',
  hallado_en: 'fecha del hallazgo',
};

function fechaYHora(valor) {
  const hora = new Date(valor).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' });
  return `${fechaParaMostrar(valor)} ${hora}`;
}

// Convierte un evento de la API en lo que se muestra en pantalla
function presentar(evento) {
  const base = EVENTOS[evento.tipo] ?? { titulo: evento.tipo.replaceAll('_', ' '), color: '' };
  const rechazado = evento.resultado !== 'permitido';
  const autor = evento.usuario ? `${evento.usuario.nombres} ${evento.usuario.apellidos}` : 'Sistema';

  let detalle = evento.descripcion ?? '';
  if (evento.tipo === 'registro') {
    detalle = `Ingresado al inventario. Hallado en ${evento.detalle.lugar_hallazgo}.`;
  }
  if (evento.tipo === 'correccion') {
    const campos = Object.keys(evento.detalle.valores_anteriores ?? {}).map((campo) => CAMPOS[campo] ?? campo);
    // Se quita el punto final del motivo para no repetirlo
    const motivo = (evento.descripcion ?? '').replace(/\.+$/, '');
    detalle = `Motivo: ${motivo}.${campos.length ? ` Se corrigió: ${campos.join(', ')}.` : ''}`;
  }

  return {
    titulo: rechazado ? `Intento rechazado: ${base.titulo.toLowerCase()}` : base.titulo,
    color: rechazado ? 'rojo' : base.color,
    autor,
    detalle,
  };
}

// RF1: trazabilidad completa de un objeto. Acceso exclusivo del Administrador.
export default function HistorialObjetoPage({ parametros }) {
  const [numero, setNumero] = useState(parametros?.idObjeto ? String(parametros.idObjeto) : '');
  const [historial, setHistorial] = useState(null);
  // Si otra pantalla pidió ver un objeto, se parte cargando
  const idInicial = parametros?.idObjeto;
  const [cargando, setCargando] = useState(Boolean(idInicial));
  const [error, setError] = useState('');

  // Si otra pantalla pidió ver un objeto, se consulta al abrir
  useEffect(() => {
    if (!idInicial) return;
    obtenerHistorialObjeto(idInicial)
      .then(setHistorial)
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [idInicial]);

  async function consultar(evento) {
    evento.preventDefault();
    setCargando(true);
    setError('');
    setHistorial(null);
    try {
      setHistorial(await obtenerHistorialObjeto(Number(numero)));
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }

  const objeto = historial?.objeto;
  const estado = objeto ? ESTADOS[objeto.estado] ?? { texto: objeto.estado, color: '' } : null;

  return (
    <main className="ciclo-vida">
      <div className="cabecera-pagina">
        <div>
          <h1>Historial del objeto</h1>
          <p>Trazabilidad completa. Acceso exclusivo del Administrador.</p>
        </div>
        <form className="buscar-numero" onSubmit={consultar}>
          <label>
            N° de objeto
            <input
              type="number"
              min="1"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
            />
          </label>
          <button type="submit" disabled={cargando}>
            <Icono nombre="buscar" />
            {cargando ? 'Consultando…' : 'Consultar'}
          </button>
        </form>
      </div>

      {error && <p role="alert">{error}</p>}
      {cargando && <p className="vacio" role="status">Cargando historial…</p>}

      {!historial && !error && !cargando && (
        <p className="tarjeta vacio">Ingresa el número de un objeto para ver su historial.</p>
      )}

      {objeto && (
        <>
          <section className="tarjeta resumen-objeto">
            <div>
              <small>Objeto #{objeto.id_objeto}</small>
              <h2>{objeto.descripcion}</h2>
            </div>
            <dl>
              <div>
                <dt>Estado</dt>
                <dd><span className={`pastilla ${estado.color}`}>{estado.texto}</span></dd>
              </div>
              <div>
                <dt>Punto</dt>
                <dd>{objeto.punto.nombre}</dd>
              </div>
              <div>
                <dt>Categoría</dt>
                <dd>{objeto.categoria.nombre}</dd>
              </div>
              {objeto.acta && (
                <div>
                  <dt>Acta</dt>
                  <dd>
                    <a href={objeto.acta.archivo_url} target="_blank" rel="noreferrer">{objeto.acta.numero_acta}</a>
                  </dd>
                </div>
              )}
            </dl>
          </section>

          <section className="tarjeta">
            <h2>Línea de tiempo</h2>
            <ol className="linea-tiempo">
              {historial.linea_de_tiempo.map((evento, i) => {
                const vista = presentar(evento);
                return (
                  <li key={i}>
                    <div className="marca-evento" aria-hidden="true">
                      <span className={`punto ${vista.color}`} />
                      <span className="hilo" />
                    </div>
                    <div className="evento">
                      <div>
                        <span className="evento-titulo">{vista.titulo}</span>{' '}
                        <span className="evento-meta">· {fechaYHora(evento.fecha)} · {vista.autor}</span>
                      </div>
                      {vista.detalle && <p>{vista.detalle}</p>}
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        </>
      )}
    </main>
  );
}
