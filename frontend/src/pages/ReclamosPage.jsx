import { useState } from 'react';
import CrearReclamoPage from './CrearReclamoPage.jsx';
import GestionReclamoEntregaPage from './GestionReclamoEntregaPage.jsx';

const PASOS = [
  { id: 'crear', etiqueta: '1. Nueva solicitud' },
  { id: 'gestionar', etiqueta: '2. Aprobar, verificar y entregar' },
];

// Sección de entregas del Encargado: registrar solicitud y gestionar (aprobar/rechazar + entrega).
export default function ReclamosPage() {
  const [paso, setPaso] = useState('crear');
  const [idReclamo, setIdReclamo] = useState('');

  function continuarGestion(id) {
    setIdReclamo(String(id));
    setPaso('gestionar');
  }

  return (
    <main className="pagina-entregas">
      <div className="cabecera-pagina">
        <div>
          <h1>Entregas</h1>
          <p>Entregas presenciales de objetos en custodia en tu punto de acopio.</p>
        </div>
      </div>

      <div className="pestanas" role="tablist" aria-label="Pasos de la entrega">
        {PASOS.map((p) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={paso === p.id}
            onClick={() => setPaso(p.id)}
          >
            {p.etiqueta}
          </button>
        ))}
      </div>

      {paso === 'crear' && <CrearReclamoPage onContinuar={(id) => continuarGestion(id)} />}
      {paso === 'gestionar' && <GestionReclamoEntregaPage key={idReclamo} idInicial={idReclamo} />}
    </main>
  );
}
