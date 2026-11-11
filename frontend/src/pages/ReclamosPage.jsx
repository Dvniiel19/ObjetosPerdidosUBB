import { useState } from 'react';
import CrearReclamoPage from './CrearReclamoPage.jsx';
import RevisarReclamoPage from './RevisarReclamoPage.jsx';
import { EntregaReclamoPage } from './EntregaReclamoPage.jsx';

const PASOS = [
  { id: 'crear', etiqueta: '1. Nueva solicitud' },
  { id: 'revisar', etiqueta: '2. Aprobar o rechazar' },
  { id: 'entregar', etiqueta: '3. Verificar y entregar' },
];

// RF10: sección de reclamos del Encargado. Reúne los tres pasos de un reclamo
// y lleva el número del reclamo de un paso al siguiente.
export default function ReclamosPage() {
  const [paso, setPaso] = useState('crear');
  const [idReclamo, setIdReclamo] = useState('');

  function continuar(siguientePaso, id) {
    setIdReclamo(String(id));
    setPaso(siguientePaso);
  }

  return (
    <main>
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

      {paso === 'crear' && <CrearReclamoPage onContinuar={(id) => continuar('revisar', id)} />}
      {paso === 'revisar' && (
        <RevisarReclamoPage
          key={idReclamo}
          idInicial={idReclamo}
          onContinuar={(id) => continuar('entregar', id)}
        />
      )}
      {paso === 'entregar' && <EntregaReclamoPage key={idReclamo} idInicial={idReclamo} />}
    </main>
  );
}
