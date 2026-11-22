import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { listarInventario } from '../services/inventarioService.js';
import { urlArchivo } from '../services/api.js';
import { fechaParaMostrar } from '../utils/fechaUtils.js';
import {
  cabecera, textoCabecera, tarjetaTabla, tabla, th, fila, td, tdDerecha, nota, vacio, botonSecundario,
  pastillaVerde, pastillaAmbar, pastillaAzul, pastillaRoja,
} from '../styles/clases.js';
import '../styles/tailwind.css';
import '../styles/gestion.css'; // no la usa esta pantalla, pero si otras de la app
import '../styles/inventario.css'; // etiqueta para imprimir

const ESTADOS = {
  en_custodia: { texto: 'En custodia', clase: pastillaVerde },
  no_reclamado: { texto: 'No reclamado', clase: pastillaAmbar },
  entregado: { texto: 'Entregado', clase: pastillaAzul },
  dado_de_baja: { texto: 'Dado de baja', clase: pastillaRoja },
};

// Codigo que se pega en el objeto, por ejemplo BIB-12
function codigoDe(objeto) {
  return `${objeto.punto.codigo}-${objeto.numero_en_punto}`;
}

export default function InventarioPage({ onIrA }) {
  const [texto, setTexto] = useState('');
  const [estado, setEstado] = useState('en_custodia');
  const [objetos, setObjetos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  // objeto que se esta imprimiendo, para mostrarlo en la zona de impresion
  const [etiqueta, setEtiqueta] = useState(null);

  async function buscar(filtros) {
    setCargando(true);
    setError('');
    try {
      setObjetos(await listarInventario(filtros));
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }

  // Al abrir la pantalla se muestra lo que esta en custodia
  useEffect(() => {
    listarInventario({ estado: 'en_custodia' })
      .then(setObjetos)
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  function enviar(evento) {
    evento.preventDefault();
    buscar({ texto, estado });
  }

  function cambiarEstado(nuevoEstado) {
    setEstado(nuevoEstado);
    buscar({ texto, estado: nuevoEstado });
  }

  // Se dibuja la etiqueta de ese objeto y despues se abre el dialogo de impresion
  function imprimirEtiqueta(objeto) {
    setEtiqueta(objeto);
  }

  // Recien cuando la etiqueta ya esta dibujada se imprime; al cerrar el dialogo se quita,
  // asi la proxima impresion lleva solo la etiqueta del objeto elegido
  useEffect(() => {
    if (!etiqueta) return undefined;

    function alTerminar() {
      setEtiqueta(null);
    }
    window.addEventListener('afterprint', alTerminar);
    const espera = setTimeout(() => window.print(), 50);

    return () => {
      clearTimeout(espera);
      window.removeEventListener('afterprint', alTerminar);
    };
  }, [etiqueta]);

  const nombrePunto = objetos[0]?.punto.nombre;

  return (
    <main className="max-w-[1160px]">
      <div className={cabecera}>
        <div>
          <h1 className="mb-2">Inventario{nombrePunto ? ` · ${nombrePunto}` : ''}</h1>
          <p className={textoCabecera}>Todos los objetos de tu punto. Busca por descripción, lugar o número de etiqueta.</p>
        </div>
      </div>

      <form
        className="flex flex-row flex-wrap items-end gap-4 min-w-0 mt-0 mx-0 mb-5 p-5.5 border border-(--border) rounded-[12px] bg-(--bg) shadow-(--shadow)"
        onSubmit={enviar}
      >
        <label className="flex-[1_1_220px]">
          Buscar
          <input
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Ej: paraguas, biblioteca o BIB-12"
          />
        </label>
        <label className="flex-[0_1_200px]">
          Estado
          <select value={estado} onChange={(e) => cambiarEstado(e.target.value)}>
            <option value="en_custodia">En custodia</option>
            <option value="no_reclamado">No reclamados</option>
            <option value="entregado">Entregados</option>
            <option value="dado_de_baja">Dados de baja</option>
            <option value="todos">Todos</option>
          </select>
        </label>
        <button type="submit" disabled={cargando}>{cargando ? 'Buscando…' : 'Buscar'}</button>
      </form>

      {error && <p role="alert">{error}</p>}

      <section className={tarjetaTabla} aria-label="Objetos del punto">
        <table className={tabla}>
          <thead>
            <tr>
              <th className={th}>N°</th>
              <th className={th}>Objeto</th>
              <th className={th}>Categoría</th>
              <th className={th}>Ingreso</th>
              <th className={th}>Estado</th>
              <th className={th}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {objetos.map((objeto) => {
              const foto = objeto.fotografias[0];
              const datosEstado = ESTADOS[objeto.estado];
              return (
                <tr key={objeto.id_objeto} className={fila}>
                  <td className={`${td} font-(family-name:--mono) font-bold whitespace-nowrap`}>{codigoDe(objeto)}</td>
                  <td className={td}>
                    <div className="flex items-center gap-3">
                      {foto
                        ? <img className="size-13 flex-none rounded-[8px] object-cover bg-(--code-bg)" src={urlArchivo(foto.archivo_url)} alt="" loading="lazy" />
                        : <div className="size-13 flex-none rounded-[8px] bg-(--code-bg)" aria-hidden="true" />}
                      <div>
                        <div className="font-semibold">{objeto.descripcion}</div>
                        <small className={nota}>{objeto.lugar_hallazgo}</small>
                      </div>
                    </div>
                  </td>
                  <td className={td}>{objeto.categoria.nombre}</td>
                  <td className={td}>{fechaParaMostrar(objeto.registrado_en)}</td>
                  <td className={td}>
                    <span className={datosEstado.clase}>{datosEstado.texto}</span>
                    {!objeto.publicado && <small className={nota}>No publicado</small>}
                  </td>
                  <td className={tdDerecha}>
                    <button type="button" className={botonSecundario} onClick={() => imprimirEtiqueta(objeto)}>
                      Etiqueta
                    </button>{' '}
                    {objeto.estado === 'en_custodia' && (
                      <button
                        type="button"
                        className={botonSecundario}
                        onClick={() => onIrA('corregir', { numero: objeto.numero_en_punto })}
                      >
                        Corregir
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {!cargando && objetos.length === 0 && (
          <p className={vacio}>No hay objetos con esos filtros en tu punto.</p>
        )}
      </section>

      {/* La etiqueta se dibuja directo en <body>, fuera de la app, para que al imprimir
          sea lo unico en la hoja (ver inventario.css). En pantalla no se ve. */}
      {etiqueta && createPortal(
        <div className="zona-impresion">
          <div className="etiqueta">
            <div className="etiqueta-titulo">Objetos Perdidos UBB · {etiqueta.punto.nombre}</div>
            <div className="etiqueta-codigo">{codigoDe(etiqueta)}</div>
            <div className="etiqueta-descripcion">{etiqueta.descripcion}</div>
            <div className="etiqueta-fecha">Ingresado: {fechaParaMostrar(etiqueta.registrado_en)}</div>
          </div>
        </div>,
        document.body,
      )}
    </main>
  );
}
