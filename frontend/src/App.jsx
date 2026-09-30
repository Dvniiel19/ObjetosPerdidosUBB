import { useState } from 'react';
import CatalogoPage from './pages/CatalogoPage.jsx';
import CorregirObjetoPage from './pages/CorregirObjetoPage.jsx';
import RegistrarObjetoPage from './pages/RegistrarObjetoPage.jsx';
import DestruccionPage from './pages/DestruccionPage.jsx'; 
import './App.css';

export default function App() {
  const [vista, setVista] = useState('corregir');

  return (
    <>
      <nav className="navegacion-objetos" aria-label="Gestión de objetos">
        <button
          type="button"
          aria-pressed={vista === 'catalogo'}
          onClick={() => setVista('catalogo')}
        >
          Buscar objetos
        </button>

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

        <button
          type="button"
          aria-pressed={vista === 'destruir'}
          onClick={() => setVista('destruir')}
        >
          Destrucción Segura
        </button>
      </nav>

      {vista === 'registrar' && <RegistrarObjetoPage />}
      {vista === 'corregir' && <CorregirObjetoPage />}
      {vista === 'destruir' && <DestruccionPage />}
      {vista === 'catalogo' && <CatalogoPage />}
      {vista === 'registrar' && <RegistrarObjetoPage />}
      {vista === 'corregir' && <CorregirObjetoPage />}
    </>
  );
}