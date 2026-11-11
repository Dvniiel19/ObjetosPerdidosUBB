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

// Iconos de esta pantalla (SVG simple, toman el color del texto que los rodea)
const TRAZOS = {
  caja: <><path d="M3 8l9-5 9 5v8l-9 5-9-5z" /><path d="M3 8l9 5 9-5M12 13v8" /></>,
  edificio: <><path d="M5 21V4h10v17M15 9h4v12" /><path d="M3 21h18M8 8h4M8 12h4M8 16h4" /></>,
  camara: <><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></>,
  candado: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>,
  check: <path d="m5 12 5 5 9-10" />,
  escudo: <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6z" />,
  etiqueta: <><path d="M3 12V4h8l10 10-8 8z" /><circle cx="7.5" cy="8.5" r="1.5" /></>,
  ruta: <><circle cx="6" cy="19" r="2" /><circle cx="18" cy="5" r="2" /><path d="M8 19h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7" /></>,
  reloj: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
};

function Icono({ nombre, tamano = 20 }) {
  return (
    <svg
      width={tamano}
      height={tamano}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {TRAZOS[nombre]}
    </svg>
  );
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

  // Avance del formulario para el panel lateral (fecha y hora ya vienen listas)
  const pasos = [
    { texto: 'Categoría', listo: datos.id_categoria !== '' },
    { texto: 'Descripción', listo: datos.descripcion.trim() !== '' },
    { texto: 'Lugar del hallazgo', listo: datos.lugar_hallazgo.trim() !== '' },
    { texto: 'Al menos una fotografía', listo: fotos.length > 0 },
  ];
  const listos = pasos.filter((paso) => paso.listo).length;

  // Código que el Encargado escribe en la etiqueta del objeto (por ejemplo BIB-12)
  const codigoRegistrado = registrado
    ? (registrado.punto?.codigo && registrado.numero_en_punto
      ? `${registrado.punto.codigo}-${registrado.numero_en_punto}`
      : `#${registrado.id_objeto}`)
    : '';

  return (
    <main className="registro">
      <header className="registro-hero">
        <span className="registro-hero-icono"><Icono nombre="caja" tamano={30} /></span>
        <div className="registro-hero-texto">
          <p className="registro-hero-antetitulo">Ingreso al inventario</p>
          <h1>Registrar objeto encontrado</h1>
          <p>Completa los datos del objeto que acabas de recibir en tu punto de acopio.</p>
        </div>
        {!cargando && !errorCarga && (
          <p className="registro-hero-punto">
            <Icono nombre="edificio" tamano={18} />
            <span>
              Se registrará en <strong>{nombrePunto || 'tu punto de acopio'}</strong>
              {encargado && <><br />a nombre de <strong>{encargado.nombres} {encargado.apellidos}</strong></>}
            </span>
          </p>
        )}
      </header>

      {errorCarga && <p className="aviso error" role="alert">{errorCarga}</p>}
      {cargando && <p role="status">Cargando formulario…</p>}

      {!cargando && !errorCarga && (
        <div className="dos-columnas">
          <div className="principal">
            <form className="tarjeta registro-formulario" onSubmit={enviar} onReset={limpiar}>
              <fieldset disabled={guardando}>
                <section className="registro-paso" aria-labelledby="paso-1">
                  <h2 id="paso-1"><span className="registro-numero">1</span> ¿Qué objeto es?</h2>
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
                    Descripción
                    <textarea
                      value={datos.descripcion}
                      onChange={(e) => cambiar('descripcion', e.target.value)}
                      placeholder="Color, marca y señas que ayuden a reconocerlo"
                      maxLength={MAX_DESCRIPCION}
                      required
                    />
                    <span className="ayuda registro-contador">{datos.descripcion.length} / {MAX_DESCRIPCION}</span>
                  </label>
                </section>

                <section className="registro-paso" aria-labelledby="paso-2">
                  <h2 id="paso-2"><span className="registro-numero">2</span> ¿Dónde y cuándo se encontró?</h2>
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
                </section>

                <fieldset className="registro-paso">
                  <legend>
                    <span className="registro-numero">3</span> Fotografías
                  </legend>
                  <p className="ayuda">
                    Hasta {MAX_FOTOS} fotos · JPG, PNG o WEBP · máx. {MAX_MB} MB cada una. La primera será la portada en el catálogo.
                  </p>
                  <div className="registro-fotos">
                    {fotos.map((foto, indice) => (
                      <div className="registro-miniatura" key={foto.vista}>
                        <img src={foto.vista} alt={`Vista previa de la fotografía ${indice + 1}`} />
                        {indice === 0 && <span className="registro-portada">Portada</span>}
                        <div>
                          <span title={foto.archivo.name}>{foto.archivo.name}</span>
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
                        <span className="registro-agregar-icono"><Icono nombre="camara" tamano={26} /></span>
                        <strong>Agregar foto</strong>
                        <span className="ayuda">Cámara o galería</span>
                        <small>{fotos.length} de {MAX_FOTOS}</small>
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

                <div className="registro-pie">
                  <p className="ayuda">
                    <Icono nombre="candado" tamano={16} />
                    El autor y la fecha de registro se guardan automáticamente y no se pueden editar después.
                  </p>
                  <div className="registro-botones">
                    <button type="reset">Descartar</button>
                    <button type="submit">
                      <Icono nombre="check" tamano={18} />
                      {guardando ? 'Registrando…' : 'Registrar objeto'}
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>

          <aside className="lateral">
            {registrado && (
              <div className="registro-exito" role="status">
                <span className="registro-exito-icono"><Icono nombre="check" tamano={22} /></span>
                <strong>Objeto registrado correctamente</strong>
                <p className="registro-codigo" aria-label={`Código ${codigoRegistrado}`}>
                  <Icono nombre="etiqueta" tamano={18} />
                  {codigoRegistrado}
                </p>
                <p className="ayuda">
                  Escribe este código en la etiqueta del objeto. Quedó en custodia con{' '}
                  {registrado.fotografias.length}{' '}
                  {registrado.fotografias.length === 1 ? 'fotografía' : 'fotografías'}.
                </p>
                {onIrA && (
                  <button type="button" className="boton-enlace" onClick={() => onIrA('catalogo')}>
                    Ver en el catálogo
                  </button>
                )}
              </div>
            )}

            <section className="tarjeta registro-avance" aria-label="Avance del registro">
              <div className="registro-avance-titulo">
                <h2>Tu registro</h2>
                <span>{listos} de {pasos.length}</span>
              </div>
              <div className="registro-barra" aria-hidden="true">
                <span style={{ width: `${(listos / pasos.length) * 100}%` }} />
              </div>
              <ul className="registro-lista-pasos">
                {pasos.map((paso) => (
                  <li key={paso.texto} className={paso.listo ? 'listo' : ''}>
                    <span className="registro-marca"><Icono nombre="check" tamano={14} /></span>
                    {paso.texto}
                    <span className="visualmente-oculto">{paso.listo ? ' (listo)' : ' (pendiente)'}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="tarjeta registro-confirmar">
              <h2>Al confirmar</h2>
              <ul>
                <li><span className="registro-punto azul"><Icono nombre="escudo" tamano={16} /></span><span>El objeto queda <strong>en custodia</strong> en tu punto de acopio.</span></li>
                <li><span className="registro-punto azul"><Icono nombre="etiqueta" tamano={16} /></span><span>Recibe un código único y aparece en el catálogo con sus fotos.</span></li>
                <li><span className="registro-punto azul"><Icono nombre="ruta" tamano={16} /></span><span>Queda trazable hasta su entrega o baja.</span></li>
                <li><span className="registro-punto amarillo"><Icono nombre="reloj" tamano={16} /></span><span>El plazo de retiro es de <strong>un año</strong> desde hoy.</span></li>
              </ul>
            </section>
          </aside>
        </div>
      )}
    </main>
  );
}
