import { useEffect, useRef, useState } from 'react';
import { listarCategorias, registrarObjeto } from '../services/registroService.js';
import { obtenerUsuarioActual } from '../services/authService.js';
import { listarPuntos } from '../services/catalogoService.js';
import '../styles/registro.css';

// Mismos límites que valida el backend (config/almacenamiento.js)
const MAX_FOTOS = 3;
const MAX_MB = 5;
const FORMATOS = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_DESCRIPCION = 1000;

const dosDigitos = (numero) => String(numero).padStart(2, '0');

// Fecha y hora actuales en el formato que usan <input type="date"> y <input type="time">
function ahoraParaFormulario() {
  const ahora = new Date();
  return {
    fecha: `${ahora.getFullYear()}-${dosDigitos(ahora.getMonth() + 1)}-${dosDigitos(ahora.getDate())}`,
    hora: `${dosDigitos(ahora.getHours())}:${dosDigitos(ahora.getMinutes())}`,
  };
}

function formularioVacio() {
  return { id_categoria: '', descripcion: '', lugar_hallazgo: '', ...ahoraParaFormulario() };
}

// onIrA: función de App.jsx para cambiar de pantalla (se usa en "Ver en el catálogo")
export default function RegistrarObjetoPage({ onIrA }) {
  const [categorias, setCategorias] = useState([]);
  const [encargado, setEncargado] = useState(null);
  const [nombrePunto, setNombrePunto] = useState('');
  const [cargando, setCargando] = useState(true);
  const [errorCarga, setErrorCarga] = useState('');

  const [datos, setDatos] = useState(formularioVacio);
  // Cada foto guarda el archivo y una dirección temporal para mostrar la vista previa
  const [fotos, setFotos] = useState([]);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState(null);
  const [registrado, setRegistrado] = useState(null);

  // Al abrir: categorías, el Encargado de la sesión y el nombre de su punto
  useEffect(() => {
    Promise.all([listarCategorias(), obtenerUsuarioActual(), listarPuntos()])
      .then(([listaCategorias, usuario, puntos]) => {
        setCategorias(listaCategorias);
        setEncargado(usuario);
        setNombrePunto(puntos.find((p) => p.id_punto === usuario?.id_punto)?.nombre ?? '');
      })
      .catch((err) => setErrorCarga(`No se pudieron cargar los datos del formulario: ${err.message}`))
      .finally(() => setCargando(false));
  }, []);

  // Al salir de la pantalla se liberan las vistas previas que queden en memoria
  const fotosActuales = useRef(fotos);
  useEffect(() => {
    fotosActuales.current = fotos;
  }, [fotos]);
  useEffect(() => () => {
    fotosActuales.current.forEach((foto) => URL.revokeObjectURL(foto.vista));
  }, []);

  function cambiar(campo, valor) {
    setDatos((anteriores) => ({ ...anteriores, [campo]: valor }));
  }

  // Revisa formato y tamaño antes de agregar, para avisar sin esperar al servidor
  function agregarFotos(evento) {
    const elegidos = [...evento.target.files];
    evento.target.value = ''; // permite volver a elegir el mismo archivo
    setError(null);

    const problemas = [];
    const validos = [];

    for (const archivo of elegidos) {
      if (!FORMATOS.includes(archivo.type)) {
        problemas.push({ campo: 'fotografias', mensaje: `"${archivo.name}" no es JPG, PNG ni WEBP.` });
      } else if (archivo.size > MAX_MB * 1024 * 1024) {
        problemas.push({ campo: 'fotografias', mensaje: `"${archivo.name}" pesa más de ${MAX_MB} MB.` });
      } else {
        validos.push(archivo);
      }
    }

    const cupo = MAX_FOTOS - fotos.length;
    if (validos.length > cupo) {
      problemas.push({ campo: 'fotografias', mensaje: `Se permiten hasta ${MAX_FOTOS} fotografías.` });
    }

    const nuevas = validos.slice(0, cupo).map((archivo) => ({
      archivo,
      vista: URL.createObjectURL(archivo),
    }));

    setFotos((anteriores) => [...anteriores, ...nuevas]);
    if (problemas.length > 0) {
      setError({ mensaje: 'Algunas fotografías no se agregaron', detalles: problemas });
    }
  }

  function quitarFoto(indice) {
    URL.revokeObjectURL(fotos[indice].vista);
    setFotos(fotos.filter((_, i) => i !== indice));
  }

  function limpiar() {
    fotos.forEach((foto) => URL.revokeObjectURL(foto.vista));
    setFotos([]);
    setDatos(formularioVacio());
    setError(null);
  }

  async function enviar(evento) {
    evento.preventDefault();
    if (guardando) return;
    setError(null);
    setRegistrado(null);

    // La fecha y la hora se interpretan en la hora local del computador del Encargado
    const hallado = new Date(`${datos.fecha}T${datos.hora}`);

    if (Number.isNaN(hallado.getTime())) {
      setError({ mensaje: 'Ingresa una fecha y una hora válidas.', detalles: [] });
      return;
    }
    if (hallado > new Date()) {
      setError({ mensaje: 'La fecha y hora del hallazgo no pueden estar en el futuro.', detalles: [] });
      return;
    }
    if (fotos.length === 0) {
      setError({ mensaje: 'Agrega al menos una fotografía del objeto.', detalles: [] });
      return;
    }

    setGuardando(true);
    try {
      const respuesta = await registrarObjeto({
        id_categoria: datos.id_categoria,
        descripcion: datos.descripcion.trim(),
        lugar_hallazgo: datos.lugar_hallazgo.trim(),
        hallado_en: hallado.toISOString(),
        fotografias: fotos.map((foto) => foto.archivo),
      });
      setRegistrado(respuesta.objeto);
      limpiar();
    } catch (err) {
      setError({ mensaje: err.message, detalles: err.detalles ?? [] });
    } finally {
      setGuardando(false);
    }
  }

  const hoy = ahoraParaFormulario().fecha;

  return (
    <main>
      <div className="cabecera-pagina registro-cabecera">
        <h1>Registrar objeto encontrado</h1>
        <p>Completa los datos del objeto que acabas de recibir en tu punto de acopio.</p>
      </div>

      {errorCarga && <p className="aviso error" role="alert">{errorCarga}</p>}
      {cargando && <p role="status">Cargando formulario…</p>}

      {!cargando && !errorCarga && (
        <div className="dos-columnas">
          <div className="principal">
            <form className="tarjeta" onSubmit={enviar} onReset={limpiar}>
              <p className="aviso">
                Se registrará en <strong>{nombrePunto || 'tu punto de acopio'}</strong>
                {encargado && <> a nombre de <strong>{encargado.nombres} {encargado.apellidos}</strong></>}.
                {' '}El autor y la fecha de registro se guardan automáticamente y no se pueden editar después.
              </p>

              <fieldset disabled={guardando}>
                <div className="fila-campos">
                  <label>
                    Categoría
                    <select
                      value={datos.id_categoria}
                      onChange={(e) => cambiar('id_categoria', e.target.value)}
                      required
                    >
                      <option value="" disabled>Selecciona una categoría</option>
                      {categorias.map((categoria) => (
                        <option key={categoria.id_categoria} value={categoria.id_categoria}>
                          {categoria.nombre}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Lugar del hallazgo
                    <input
                      value={datos.lugar_hallazgo}
                      onChange={(e) => cambiar('lugar_hallazgo', e.target.value)}
                      placeholder="Ej: Biblioteca, segundo piso"
                      maxLength={255}
                      required
                    />
                  </label>
                </div>

                <label>
                  Descripción
                  <textarea
                    value={datos.descripcion}
                    onChange={(e) => cambiar('descripcion', e.target.value)}
                    placeholder="Color, marca y señas que ayuden a reconocerlo"
                    maxLength={MAX_DESCRIPCION}
                    required
                  />
                  <span className="ayuda">{datos.descripcion.length} de {MAX_DESCRIPCION} caracteres</span>
                </label>

                <div className="fila-campos">
                  <label>
                    Fecha del hallazgo
                    <input
                      type="date"
                      value={datos.fecha}
                      max={hoy}
                      onChange={(e) => cambiar('fecha', e.target.value)}
                      required
                    />
                  </label>

                  <label>
                    Hora del hallazgo
                    <input
                      type="time"
                      value={datos.hora}
                      onChange={(e) => cambiar('hora', e.target.value)}
                      required
                    />
                  </label>
                </div>

                <fieldset>
                  <legend>
                    Fotografías{' '}
                    <span className="ayuda">
                      (hasta {MAX_FOTOS} · JPG, PNG o WEBP · máx. {MAX_MB} MB cada una)
                    </span>
                  </legend>
                  <div className="registro-fotos">
                    {fotos.map((foto, indice) => (
                      <div className="registro-miniatura" key={foto.vista}>
                        <img src={foto.vista} alt={`Vista previa de la fotografía ${indice + 1}`} />
                        <div>
                          <span title={foto.archivo.name}>{indice + 1} · {foto.archivo.name}</span>
                          <button
                            type="button"
                            aria-label={`Quitar la fotografía ${indice + 1}`}
                            onClick={() => quitarFoto(indice)}
                          >
                            Quitar
                          </button>
                        </div>
                      </div>
                    ))}

                    {fotos.length < MAX_FOTOS && (
                      <label className="registro-agregar">
                        <span className="registro-mas" aria-hidden="true">+</span>
                        <strong>Agregar foto</strong>
                        <span className="ayuda">Cámara o galería</span>
                        <input
                          type="file"
                          accept={FORMATOS.join(',')}
                          multiple
                          onChange={agregarFotos}
                        />
                      </label>
                    )}
                  </div>
                </fieldset>

                {error && (
                  <div className="aviso error" role="alert">
                    <strong>{error.mensaje}</strong>
                    {error.detalles.length > 0 && (
                      <ul>
                        {error.detalles.map((detalle, i) => (
                          <li key={i}>{detalle.mensaje}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                <div className="acciones">
                  <button type="reset">Descartar</button>
                  <button type="submit">{guardando ? 'Registrando…' : 'Registrar objeto'}</button>
                </div>
              </fieldset>
            </form>
          </div>

          <aside className="lateral">
            <section className="tarjeta">
              <h2>Al confirmar</h2>
              <ul className="lista-simple">
                <li>El objeto queda <strong>en custodia</strong> en tu punto de acopio.</li>
                <li>Recibe un número único y aparece en el catálogo con sus fotos.</li>
                <li>Queda trazable hasta su entrega o baja.</li>
                <li>El plazo de retiro es de <strong>un año</strong> desde hoy.</li>
              </ul>
            </section>

            {registrado && (
              <div className="aviso exito" role="status">
                <strong>Objeto #{registrado.id_objeto} registrado correctamente.</strong>
                <p className="registro-detalle-exito">
                  En custodia · {registrado.fotografias.length}{' '}
                  {registrado.fotografias.length === 1 ? 'fotografía' : 'fotografías'}.
                </p>
                {onIrA && (
                  <button type="button" className="boton-enlace" onClick={() => onIrA('catalogo')}>
                    Ver en el catálogo
                  </button>
                )}
              </div>
            )}
          </aside>
        </div>
      )}
    </main>
  );
}
