import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { listarInventario } from '../services/inventarioService.js';
import { urlArchivo } from '../services/api.js';
import { fechaParaMostrar } from '../utils/fechaUtils.js';
import '../styles/gestion.css';
import '../styles/inventario.css';

const ESTADOS = {
  en_custodia: { texto: 'En custodia', clase: 'verde' },
  no_reclamado: { texto: 'No reclamado', clase: 'ambar' },
  entregado: { texto: 'Entregado', clase: 'azul' },
  dado_de_baja: { texto: 'Dado de baja', clase: 'rojo' },
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
    <main className="inventario">
      <div className="cabecera-pagina">
        <div>
          <h1>Inventario{nombrePunto ? ` · ${nombrePunto}` : ''}</h1>
          <p>Todos los objetos de tu punto. Busca por descripción, lugar o número de etiqueta.</p>
        </div>
      </div>

      <form className="tarjeta filtros-inventario" onSubmit={enviar}>
        <label>
          Buscar
          <input
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Ej: paraguas, biblioteca o BIB-12"
          />
        </label>
        <label>
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

      <section className="tarjeta sin-relleno" aria-label="Objetos del punto">
        <table className="tabla-min">
          <thead>
            <tr>
              <th>N°</th>
              <th>Objeto</th>
              <th>Categoría</th>
              <th>Ingreso</th>
              <th>Estado</th>
              <th className="celda-acciones">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {objetos.map((objeto) => {
              const foto = objeto.fotografias[0];
              const datosEstado = ESTADOS[objeto.estado];
              return (
                <tr key={objeto.id_objeto}>
                  <td className="celda-codigo">{codigoDe(objeto)}</td>
                  <td>
                    <div className="celda-objeto">
                      {foto
                        ? <img className="foto-mini" src={urlArchivo(foto.archivo_url)} alt="" loading="lazy" />
                        : <div className="foto-mini" aria-hidden="true" />}
                      <div>
                        <div className="celda-principal">{objeto.descripcion}</div>
                        <small>{objeto.lugar_hallazgo}</small>
                      </div>
                    </div>
                  </td>
                  <td>{objeto.categoria.nombre}</td>
                  <td>{fechaParaMostrar(objeto.registrado_en)}</td>
                  <td>
                    <span className={`pastilla ${datosEstado.clase}`}>{datosEstado.texto}</span>
                    {!objeto.publicado && <small>No publicado</small>}
                  </td>
                  <td className="celda-acciones">
                    <button type="button" className="boton-secundario" onClick={() => imprimirEtiqueta(objeto)}>
                      Etiqueta
                    </button>{' '}
                    {objeto.estado === 'en_custodia' && (
                      <button
                        type="button"
                        className="boton-secundario"
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
          <p className="vacio">No hay objetos con esos filtros en tu punto.</p>
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