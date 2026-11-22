import { useEffect, useState } from 'react';
import Icono from '../components/Icono.jsx';
import { obtenerObjetoParaEditar, obtenerObjetoPorNumero, guardarObjetoEditado, listarCategoria } from '../services/objetoService.js';
import { buscarObjetos } from '../services/catalogoService.js';
import { fechaParaMostrar } from '../utils/fechaUtils.js';
import { cabecera, textoCabecera, columnas, tarjeta, tarjetaPrincipal, tarjetaLateral, ayuda, avisoExito, botonSecundario } from '../styles/clases.js';
import '../styles/tailwind.css';
import '../styles/gestion.css'; // no la usa esta pantalla, pero si otras de la app

const filaCampos = 'grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4';

const dosDigitos = (numero) => String(numero).padStart(2, '0');

// Convierte el objeto que entrega la API en los valores del formulario
function aFormulario(objeto) {
  const fecha = new Date(objeto.hallado_en);
  return {
    id_categoria: String(objeto.id_categoria),
    descripcion: objeto.descripcion,
    lugar_hallazgo: objeto.lugar_hallazgo,
    fecha: `${fecha.getFullYear()}-${dosDigitos(fecha.getMonth() + 1)}-${dosDigitos(fecha.getDate())}`,
    hora: `${dosDigitos(fecha.getHours())}:${dosDigitos(fecha.getMinutes())}`,
  };
}

const NOMBRES_CAMPOS = {
  id_categoria: 'Categoría',
  descripcion: 'Descripción',
  lugar_hallazgo: 'Lugar',
  fecha: 'Fecha',
  hora: 'Hora',
};

export default function CorregirObjetoPage({ parametros }) {
  const [numero, setNumero] = useState('');
  const [texto, setTexto] = useState('');
  const [resultados, setResultados] = useState(null);
  const [categorias, setCategorias] = useState([]);

  // Objeto que se esta corrigiendo: "original" es como esta guardado y "datos" lo que se edita
  const [objeto, setObjeto] = useState(null);
  const [original, setOriginal] = useState(null);
  const [datos, setDatos] = useState(null);
  const [motivo, setMotivo] = useState('');
  const [correcciones, setCorrecciones] = useState([]);

  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Abre un objeto por su id interno (desde la busqueda) o por el numero de su etiqueta
  async function abrir({ idObjeto, numeroEtiqueta, codigo }) {
    setCargando(true);
    setError('');
    setMensaje('');
    try {
      const [encontrado, listaCategorias] = await Promise.all([
        numeroEtiqueta ? obtenerObjetoPorNumero(numeroEtiqueta, codigo) : obtenerObjetoParaEditar(idObjeto),
        listarCategoria(),
      ]);
      if (encontrado.estado !== 'en_custodia') {
        throw new Error('Este objeto ya no está en custodia, por lo que no se puede corregir.');
      }
      setCategorias(listaCategorias);
      setObjeto(encontrado);
      setOriginal(aFormulario(encontrado));
      setDatos(aFormulario(encontrado));
      setMotivo('');
      setCorrecciones([]);
      setNumero(String(encontrado.numero_en_punto));
    } catch (err) {
      setObjeto(null);
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }

  // Si se llego desde el inventario, se abre directo el objeto elegido
  useEffect(() => {
    if (parametros?.numero) {
      abrir({ numeroEtiqueta: parametros.numero });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parametros]);

  function buscarPorNumero(evento) {
    evento.preventDefault();
    // Acepta "12" o "BIB-12". Si viene la sigla, el backend revisa que sea la del punto
    const partes = numero.trim().match(/^(?:([a-z]{2,6})\s*-\s*)?(\d+)$/i);
    if (!partes) {
      setObjeto(null);
      setError('Escribe el número así: 12 o BIB-12.');
      return;
    }
    abrir({ numeroEtiqueta: Number(partes[2]), codigo: partes[1]?.toUpperCase() });
  }

  async function buscarPorTexto(evento) {
    evento.preventDefault();
    setCargando(true);
    setError('');
    try {
      const resultado = await buscarObjetos({ texto });
      setResultados(resultado.objetos);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }

  function cambiar(campo, valor) {
    setDatos((anteriores) => ({ ...anteriores, [campo]: valor }));
  }

  const modificados = datos
    ? Object.keys(NOMBRES_CAMPOS).filter((campo) => datos[campo] !== original[campo])
    : [];

  async function guardar(evento) {
    evento.preventDefault();
    setError('');
    setMensaje('');

    const hallado = new Date(`${datos.fecha}T${datos.hora}`);
    if (Number.isNaN(hallado.getTime())) {
      setError('Ingresa una fecha y una hora válidas.');
      return;
    }
    if (modificados.length === 0) {
      setError('No hay cambios para guardar.');
      return;
    }

    setCargando(true);
    try {
      const actualizado = await guardarObjetoEditado(objeto.id_objeto, {
        id_categoria: Number(datos.id_categoria),
        descripcion: datos.descripcion.trim(),
        lugar_hallazgo: datos.lugar_hallazgo.trim(),
        hallado_en: hallado.toISOString(),
        motivo: motivo.trim(),
      });
      setCorrecciones((anteriores) => [
        { fecha: new Date(), motivo: motivo.trim(), campos: modificados.map((c) => NOMBRES_CAMPOS[c]) },
        ...anteriores,
      ]);
      const guardado = { ...objeto, ...actualizado };
      setObjeto(guardado);
      setOriginal(aFormulario(guardado));
      setDatos(aFormulario(guardado));
      setMotivo('');
      setMensaje('Objeto actualizado. La corrección quedó registrada en su historial.');
    } catch (err) {
      setError(err.detalles?.length ? err.detalles.map((d) => d.mensaje).join('. ') : err.message);
    } finally {
      setCargando(false);
    }
  }

  function descartar() {
    setDatos(original);
    setMotivo('');
    setError('');
  }

  function cerrar() {
    setObjeto(null);
    setNumero('');
    setError('');
    setMensaje('');
  }

  return (
    <main className={objeto ? 'max-w-[1160px]' : undefined}>
      <div className={cabecera}>
        <div>
          <h1 className="mb-2">Corregir objeto</h1>
          <p className={textoCabecera}>Solo puedes corregir objetos en custodia de tu punto de acopio.</p>
        </div>
        <form className="flex items-end gap-2 m-0" onSubmit={buscarPorNumero}>
          <label className="w-[140px]">
            N° de etiqueta
            <input
              placeholder="Ej: 12"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="inline-flex items-center gap-1.5" disabled={cargando}>
            <Icono nombre="buscar" />
            Buscar
          </button>
        </form>
      </div>

      {error && <p role="alert">{error}</p>}
      {mensaje && <p className={avisoExito} role="status">{mensaje}</p>}

      {!objeto && (
        <section className={tarjeta}>
          <h2 className="m-0">¿No sabes el número?</h2>
          <form onSubmit={buscarPorTexto}>
            <div className={filaCampos}>
              <label className="content-start">
                Buscar por descripción o lugar
                <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Ej: mochila azul" />
              </label>
              <div className="flex items-end">
                <button type="submit" className="inline-flex items-center gap-2 mb-4 py-2 px-3.5 hover:border-(--azul-institucional) hover:text-(--azul-institucional)" disabled={cargando}>
                  {cargando ? 'Buscando…' : 'Buscar objetos'}
                </button>
              </div>
            </div>
          </form>
          {resultados?.length === 0 && <p role="status">No se encontraron objetos con esa búsqueda.</p>}
          {resultados?.length > 0 && (
            <div className="grid gap-4 mt-6">
              {resultados.map((resultado) => (
                <article className="p-5 border border-(--border) rounded-[10px]" key={resultado.id_objeto}>
                  <small>Objeto #{resultado.id_objeto} · {resultado.categoria?.nombre}</small>
                  <h2 className="m-0 wrap-anywhere">{resultado.descripcion}</h2>
                  <p>Lugar: {resultado.lugar_hallazgo}</p>
                  <p>Punto: {resultado.punto?.nombre ?? 'Sin información'}</p>
                  <button
                    type="button"
                    className={`${botonSecundario} mt-4`}
                    disabled={cargando}
                    onClick={() => abrir({ idObjeto: resultado.id_objeto })}
                  >
                    Corregir este objeto
                  </button>
                </article>
              ))}
            </div>
          )}
        </section>
      )}

      {objeto && (
        <div className={columnas}>
          <form className={tarjetaPrincipal} onSubmit={guardar}>
            <fieldset disabled={cargando}>
              <div className={filaCampos}>
                <label className="content-start">
                  Identificador
                  <input value={`${objeto.punto?.codigo ?? ''}-${objeto.numero_en_punto}`} disabled />
                  <span className={ayuda}>No se puede modificar</span>
                </label>
                <label className="content-start">
                  Categoría
                  <select value={datos.id_categoria} onChange={(e) => cambiar('id_categoria', e.target.value)} required>
                    {categorias.map((categoria) => (
                      <option key={categoria.id_categoria} value={categoria.id_categoria}>{categoria.nombre}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label>
                Descripción
                <textarea
                  value={datos.descripcion}
                  onChange={(e) => cambiar('descripcion', e.target.value)}
                  maxLength={1000}
                  required
                />
              </label>

              <div className={filaCampos}>
                <label className="content-start">
                  Lugar del hallazgo
                  <input
                    value={datos.lugar_hallazgo}
                    onChange={(e) => cambiar('lugar_hallazgo', e.target.value)}
                    maxLength={255}
                    required
                  />
                </label>
                <label className="content-start">
                  Fecha
                  <input type="date" value={datos.fecha} onChange={(e) => cambiar('fecha', e.target.value)} required />
                </label>
                <label className="content-start">
                  Hora
                  <input type="time" value={datos.hora} onChange={(e) => cambiar('hora', e.target.value)} required />
                </label>
              </div>

              {modificados.length > 0 && (
                <p className={`${ayuda} m-0 p-0 border-none`} role="status">
                  Campos modificados: {modificados.map((campo) => NOMBRES_CAMPOS[campo]).join(', ')}
                </p>
              )}

              <label>
                <span>Motivo del cambio <span className="text-(--rojo) font-normal">(obligatorio)</span></span>
                <textarea
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                  placeholder="Explica por qué se corrige el registro"
                  minLength={10}
                  maxLength={200}
                  required
                />
                <span className={ayuda}>Entre 10 y 200 caracteres. Llevas {motivo.trim().length}.</span>
              </label>
            </fieldset>

            <div className="flex flex-wrap justify-end gap-3 pt-4 border-t border-(--border)">
              <button type="button" className={botonSecundario} disabled={cargando} onClick={cerrar}>
                Elegir otro objeto
              </button>
              <button type="button" className={botonSecundario} disabled={cargando} onClick={descartar}>
                Descartar
              </button>
              <button type="submit" disabled={cargando}>
                {cargando ? 'Guardando…' : 'Guardar corrección'}
              </button>
            </div>
          </form>

          <aside className={tarjetaLateral}>
            <h2 className="m-0">Correcciones recientes</h2>
            {correcciones.length === 0 && (
              <p className={ayuda}>Todavía no has hecho correcciones a este objeto en esta visita.</p>
            )}
            {correcciones.map((correccion, i) => (
              <div key={i}>
                <strong>{fechaParaMostrar(correccion.fecha)}</strong>
                <p>Campos: {correccion.campos.join(', ')}</p>
                <p className={ayuda}>Motivo: {correccion.motivo}</p>
              </div>
            ))}
            <p className={ayuda}>
              Cada corrección guarda los valores anteriores en el historial del objeto,
              que puede consultar el Administrador.
            </p>
          </aside>
        </div>
      )}
    </main>
  );
}
