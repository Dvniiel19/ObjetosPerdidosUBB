import { useState } from 'react';
import { pedir } from '../services/api.js';

export default function DestruccionPage() {
const [idObjeto, setIdObjeto] = useState('');
const [archivoUrl, setArchivoUrl] = useState('');
const [mensaje, setMensaje] = useState(null);

const handleDestruir = async (e) => {
    e.preventDefault();
    setMensaje(null); 
    
    try {
    const respuesta = await pedir('/destrucciones', {
        metodo: 'POST',
        body: { id_objeto: Number(idObjeto), archivo_url: archivoUrl },
        idUsuario: 1 // Simulamos al admin
    });
    
    setMensaje({ 
        tipo: 'exito', 
        texto: `¡Éxito! ${respuesta.mensaje}. Acta: ${respuesta.datos.acta.numero_acta}` 
    });
    setIdObjeto('');
    setArchivoUrl('');
    } catch (error) {
    setMensaje({ 
        tipo: 'error', 
        texto: error.message || 'Error al intentar dar de baja el objeto.' 
    });
    }
};

return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '20px auto', border: '1px solid #ccc', borderRadius: '8px' }}>
    <h2 style={{ color: '#d32f2f' }}>Panel de Destrucción Segura</h2>
    <p style={{ color: '#555' }}>Registra la baja definitiva de objetos no reclamados tras cumplir el plazo.</p>
    
    {mensaje && (
        <div style={{ padding: '12px', marginBottom: '20px', background: mensaje.tipo === 'exito' ? '#d4edda' : '#f8d7da', color: mensaje.tipo === 'exito' ? '#155724' : '#721c24', borderRadius: '4px' }}>
        {mensaje.texto}
        </div>
    )}

    <form onSubmit={handleDestruir} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label>ID del Objeto a destruir:</label>
        <input 
            type="number" 
            value={idObjeto}
            onChange={(e) => setIdObjeto(e.target.value)}
            required 
            style={{ padding: '8px' }}
        />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label>URL del Acta de Respaldo:</label>
        <input 
            type="url" 
            value={archivoUrl}
            onChange={(e) => setArchivoUrl(e.target.value)}
            placeholder="https://..."
            required 
            style={{ padding: '8px' }}
        />
        </div>

        <button type="submit" style={{ padding: '10px', background: '#d32f2f', color: 'white', border: 'none', cursor: 'pointer' }}>
        Dar de Baja
        </button>
    </form>
    </div>
);
}