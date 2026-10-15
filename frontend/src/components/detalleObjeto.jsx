import { fechaParaMostrar } from '../utils/fechaUtils.js';

// Hora en formato chileno: 14:30
function horaParaMostrar(valor) {
  return new Date(valor).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' });
}

export default function DetalleObjeto({ objeto, onVolver }) {
  const metodos = objeto.categoria?.metodos_verificacion ?? [];

  return <article className="objeto detalle-objeto">
    <button type="button" onClick={onVolver}>← Volver al catálogo</button>
    <small>Objeto #{objeto.id_objeto} · {objeto.categoria?.nombre}</small>
    <h2>{objeto.descripcion}</h2>
    <p>Lugar del hallazgo: {objeto.lugar_hallazgo}</p>
    <p>Encontrado el: {fechaParaMostrar(objeto.hallado_en)} a las {horaParaMostrar(objeto.hallado_en)}</p>
    <p>Retirar en: {objeto.punto?.nombre ?? 'Sin información'}{objeto.punto?.ubicacion && ` (${objeto.punto.ubicacion})`}</p>
    <p>Disponible para retiro hasta: {fechaParaMostrar(objeto.disponible_hasta)}</p>
    {metodos.length > 0 && <aside>
      <h3>Para reclamarlo debes acreditar que es tuyo con:</h3>
      <ul>{metodos.map(metodo => <li key={metodo}>{metodo}</li>)}</ul>
    </aside>}
  </article>;
}
