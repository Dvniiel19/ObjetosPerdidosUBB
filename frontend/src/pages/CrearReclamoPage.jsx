import { useState } from 'react';
import { crearReclamoService } from '../services/reclamosService.js';

const FORMULARIO_VACIO = {
  id_objeto: '',
  rut_reclamante: '',
  nombre_reclamante: '',
  evidencia_identidad: '',
  evidencia_propiedad: '',
};

// RF10, paso 1: el Encargado registra la solicitud de reclamo presentada en persona.
export default function CrearReclamoPage({ onContinuar }) {
  const [formulario, setFormulario] = useState(FORMULARIO_VACIO);
  const [creado, setCreado] = useState(null);
  const [error, setError] = useState(null);
  const [enviando, setEnviando] = useState(false);

  function actualizar(campo, valor) {
    setFormulario((anterior) => ({ ...anterior, [campo]: valor }));
  }

  async function enviar(e) {
    e.preventDefault();
    setError(null);
    setCreado(null);
    setEnviando(true);
    try {
      const resultado = await crearReclamoService({
        id_objeto: Number(formulario.id_objeto),
        rut_reclamante: formulario.rut_reclamante.trim(),
        nombre_reclamante: formulario.nombre_reclamante.trim(),
        evidencia_identidad: formulario.evidencia_identidad.trim(),
        evidencia_propiedad: formulario.evidencia_propiedad.trim(),
      });
      setCreado(resultado);
      setFormulario(FORMULARIO_VACIO);
    } catch (err) {
      setError(err);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="dos-columnas">
      <form className="tarjeta principal" onSubmit={enviar}>
        <h2>Nueva solicitud</h2>
        <fieldset disabled={enviando}>
          <div className="fila-campos">
            <label>
              N° del objeto en custodia
              <input
                type="number"
                min="1"
                required
                value={formulario.id_objeto}
                onChange={(e) => actualizar('id_objeto', e.target.value)}
              />
            </label>
            <label>
              RUT del reclamante
              <input
                required
                value={formulario.rut_reclamante}
                onChange={(e) => actualizar('rut_reclamante', e.target.value)}
                placeholder="12345678-9"
                pattern="[0-9]{7,8}-[0-9kK]"
              />
              <span className="ayuda">Sin puntos y con guion.</span>
            </label>
          </div>
          <label>
            Nombre del reclamante
            <input
              required
              maxLength={200}
              value={formulario.nombre_reclamante}
              onChange={(e) => actualizar('nombre_reclamante', e.target.value)}
              placeholder="Nombre y apellidos"
            />
          </label>
          <label>
            Evidencia de identidad
            <input
              required
              value={formulario.evidencia_identidad}
              onChange={(e) => actualizar('evidencia_identidad', e.target.value)}
              placeholder="Ej: cédula de identidad vigente revisada en persona"
            />
          </label>
          <label>
            Evidencia de propiedad
            <input
              required
              value={formulario.evidencia_propiedad}
              onChange={(e) => actualizar('evidencia_propiedad', e.target.value)}
              placeholder="Ej: describe el contenido, boleta, fotografía"
            />
          </label>
        </fieldset>
        <div className="acciones">
          <button type="submit" disabled={enviando}>{enviando ? 'Registrando…' : 'Registrar solicitud'}</button>
        </div>
      </form>

      <aside className="lateral">
        <section className="tarjeta">
          <h2>Cómo sigue</h2>
          <ol className="lista-simple">
            <li>La solicitud queda <strong>en revisión</strong>.</li>
            <li>Luego la apruebas o la rechazas indicando el motivo.</li>
            <li>Si se aprueba, verificas identidad y propiedad y confirmas la entrega.</li>
          </ol>
        </section>

        {creado && (
          <section className="aviso exito" role="status">
            <div>
              <strong>Reclamo #{creado.reclamo.id_reclamo} registrado.</strong>
              <br />
              {creado.mensaje}
              <br />
              <button
                type="button"
                className="boton-enlace"
                onClick={() => onContinuar?.(creado.reclamo.id_reclamo)}
              >
                Revisar esta solicitud
              </button>
            </div>
          </section>
        )}

        {error && (
          <section className="aviso error" role="alert">
            <div>
              <strong>{error.message}</strong>
              {error.detalles?.length > 0 && (
                <ul>
                  {error.detalles.map((detalle, i) => <li key={i}>{detalle.mensaje}</li>)}
                </ul>
              )}
            </div>
          </section>
        )}
      </aside>
    </div>
  );
}
