import { useEffect, useState } from 'react';
import FormularioObjeto from '../components/formularioObjeto.jsx';
import { listarCategoria } from '../services/editarObjetoService.js';

export default function RegistrarObjetoPage() {
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [resumen, setResumen] = useState(null);

  useEffect(() => {
    let activo = true;

    async function cargarCategorias() {
      try {
        const datos = await listarCategoria();

        if (!Array.isArray(datos)) {
          throw new Error('La respuesta de categorías no es válida.');
        }

        if (activo) {
          setCategorias(datos);
        }
      } catch (err) {
        if (activo) {
          setError(`No se pudieron cargar las categorías: ${err.message}`);
        }
      } finally {
        if (activo) {
          setCargando(false);
        }
      }
    }

    cargarCategorias();

    return () => {
      activo = false;
    };
  }, []);

  return (
    <main>
      <h1>Registrar objeto encontrado</h1>
      <p>Completa la información del objeto recibido en el punto de acopio.</p>

      <aside className="registro-aviso">
        <strong>Prototipo de registro</strong>
        <p>Esta pantalla permite revisar los datos, pero todavía no los guarda.</p>
        <p>
          Las categorías se obtienen del sistema. Las fotografías todavía
          se indican mediante URLs de prueba.
        </p>
      </aside>

      {cargando && <p role="status">Cargando categorías…</p>}

      {error && <p role="alert">{error}</p>}

      {!cargando && !error && categorias.length === 0 && (
        <p role="status">
          No hay categorías disponibles para registrar un objeto.
        </p>
      )}

      {!cargando && !error && categorias.length > 0 && (
        <FormularioObjeto
          categorias={categorias}
          onGuardar={setResumen}
          textoBoton="Revisar datos"
          textoProcesando="Revisando…"
        />
      )}

      {resumen && (
        <section
          className="registro-resumen"
          aria-labelledby="titulo-resumen"
        >
          <h2 id="titulo-resumen">Últimos datos revisados</h2>
          <p role="status">
            Revisión completada. El objeto no se ha guardado.
          </p>

          <dl>
            <dt>Categoría</dt>
            <dd>
              {categorias.find(
                categoria => categoria.id_categoria === resumen.id_categoria,
              )?.nombre}
            </dd>

            <dt>Descripción</dt>
            <dd>{resumen.descripcion}</dd>

            <dt>Lugar de hallazgo</dt>
            <dd>{resumen.lugar_hallazgo}</dd>

            <dt>Fecha y hora de hallazgo</dt>
            <dd>
              {new Date(resumen.hallado_en).toLocaleString('es-CL')}
            </dd>

            <dt>Referencias de fotografías</dt>
            <dd>{resumen.fotografias.length} de un máximo de 3</dd>
          </dl>
        </section>
      )}
    </main>
  );
}