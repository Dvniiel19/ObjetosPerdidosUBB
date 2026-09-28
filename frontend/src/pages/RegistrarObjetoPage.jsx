import { useState } from 'react';
import FormularioObjeto from '../components/formularioObjeto.jsx';

// Categorías de demostración basadas en el seed del equipo.
const categoriasDemo = [
  { id_categoria: 1, nombre: 'Electrónica' },
  { id_categoria: 2, nombre: 'Ropa y accesorios' },
  { id_categoria: 3, nombre: 'Documentos y tarjetas' },
  { id_categoria: 4, nombre: 'Llaves' },
  { id_categoria: 5, nombre: 'Mochilas y bolsos' },
  { id_categoria: 6, nombre: 'Útiles y libros' },
  { id_categoria: 7, nombre: 'Otros' },
];

export default function RegistrarObjetoPage() {
  const [resumen, setResumen] = useState(null);

  return (
    <main>
      <h1>Registrar objeto encontrado</h1>
      <p>Completa la información del objeto recibido en el punto de acopio.</p>

      <aside className="registro-aviso">
        <strong>Prototipo de registro</strong>
        <p>Esta pantalla permite revisar los datos, pero todavía no los guarda.</p>
        <p>
          Las categorías son de demostración y las fotografías se indican
          mediante URLs de prueba.
        </p>
      </aside>

      <FormularioObjeto
        categorias={categoriasDemo}
        onGuardar={setResumen}
        textoBoton="Revisar datos"
        textoProcesando="Revisando…"
      />

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
              {categoriasDemo.find(
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
