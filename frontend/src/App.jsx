import { useState } from 'react';
import CorregirObjetoPage from './pages/CorregirObjetoPage.jsx';
import RegistrarObjetoPage from './pages/RegistrarObjetoPage.jsx';
import './App.css';

export default function App() {
  const [vista, setVista] = useState('corregir');

  return (
    <>
      <nav className="navegacion-objetos" aria-label="Gestión de objetos">
        <button
          type="button"
          aria-pressed={vista === 'registrar'}
          onClick={() => setVista('registrar')}
        >
          Registrar objeto
        </button>

        <button
          type="button"
          aria-pressed={vista === 'corregir'}
          onClick={() => setVista('corregir')}
        >
          Corregir objeto
        </button>
      </nav>

      {vista === 'registrar'
        ? <RegistrarObjetoPage />
        : <CorregirObjetoPage />}
    </>
  );
}
