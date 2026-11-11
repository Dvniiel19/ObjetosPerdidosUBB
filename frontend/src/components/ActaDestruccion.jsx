import { fechaParaMostrar } from '../utils/fechaUtils.js';

// Fecha con hora, por ejemplo "11-11-2026 14:35"
function fechaYHora(valor) {
  if (!valor) return '';
  const hora = new Date(valor).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' });
  return `${fechaParaMostrar(valor)} ${hora}`;
}

// Código de la etiqueta del objeto, por ejemplo "BIB-12" (mismo formato del inventario)
function codigoDe(objeto) {
  return objeto.punto?.codigo && objeto.numero_en_punto
    ? `${objeto.punto.codigo}-${objeto.numero_en_punto}`
    : `#${objeto.id_objeto}`;
}

// Req 05: acta de destrucción lista para imprimir o guardar como PDF.
// Se arma solo con los datos guardados del acta, que no cambian, así que
// se puede volver a descargar cuando se necesite y siempre sale igual.
export default function ActaDestruccion({ acta }) {
  const responsable = `${acta.firmante.nombres} ${acta.firmante.apellidos}`;

  return (
    <article className="acta">
      <header className="acta-encabezado">
        <p>Universidad del Bío-Bío · Sistema de Objetos Perdidos</p>
        <h1>Acta de destrucción segura</h1>
        <p className="acta-numero">N° {acta.numero_acta}</p>
      </header>

      <section>
        <h2>1. Datos de la baja</h2>
        <dl className="acta-datos">
          <div><dt>Fecha y hora de ejecución</dt><dd>{fechaYHora(acta.ejecutada_en)}</dd></div>
          <div><dt>Responsable</dt><dd>{responsable}</dd></div>
          <div><dt>Correo institucional</dt><dd>{acta.firmante.correo_institucional}</dd></div>
          <div><dt>Cargo</dt><dd>Administrador del sistema</dd></div>
        </dl>
      </section>

      <section>
        <h2>2. {acta.objetos.length === 1 ? 'Objeto dado de baja' : 'Objetos dados de baja'}</h2>
        {acta.objetos.map((objeto) => (
          <dl className="acta-datos" key={objeto.id_objeto}>
            <div><dt>Código</dt><dd>{codigoDe(objeto)} (N° interno {objeto.id_objeto})</dd></div>
            <div><dt>Descripción</dt><dd>{objeto.descripcion}</dd></div>
            <div><dt>Categoría</dt><dd>{objeto.categoria?.nombre}</dd></div>
            <div><dt>Punto de acopio</dt><dd>{objeto.punto?.nombre}</dd></div>
            <div><dt>Lugar del hallazgo</dt><dd>{objeto.lugar_hallazgo}</dd></div>
            <div><dt>Fecha del hallazgo</dt><dd>{fechaParaMostrar(objeto.hallado_en)}</dd></div>
            <div><dt>Ingreso a custodia</dt><dd>{fechaParaMostrar(objeto.registrado_en)}</dd></div>
            <div>
              <dt>Aviso de retención</dt>
              <dd>{objeto.alerta_enviada_en ? fechaParaMostrar(objeto.alerta_enviada_en) : 'Sin registro'}</dd>
            </div>
          </dl>
        ))}
      </section>

      <section>
        <h2>3. Motivo</h2>
        <p>
          El objeto cumplió un año en custodia sin ser retirado por su dueño. Se dio aviso al
          Encargado del punto de acopio y al Administrador con anticipación, pasó a estado
          no reclamado y no tiene reclamos pendientes. Por lo anterior, se registra su
          eliminación segura y queda dado de baja en el sistema.
        </p>
        {acta.archivo_url && (
          <p className="acta-copia">Copia firmada: {acta.archivo_url}</p>
        )}
      </section>

      <section>
        <h2>4. Firmas</h2>
        <div className="acta-firmas">
          <div>
            <span className="acta-linea" />
            <p>{responsable}</p>
            <p>Responsable</p>
          </div>
          <div>
            <span className="acta-linea" />
            <p>Nombre:</p>
            <p>Testigo</p>
          </div>
        </div>
      </section>

      <footer className="acta-pie">
        Generado por el sistema el {fechaYHora(new Date())}, a partir del registro
        N° {acta.numero_acta}, que no puede modificarse.
      </footer>
    </article>
  );
}
