import { useState } from 'react';
import { login, esUBB } from '../services/authService.js';

export default function LoginPage({ onIngresar, onExterno }) {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState('');
    const [cargando, setCargando] = useState(false);

    async function enviar(evento) {
        evento.preventDefault();
        setError('');

        if (!esUBB(correo)) {
            onExterno();
            return;
        }

        setCargando(true);
        try {
            const usuario = await login(correo, contrasena);
            onIngresar(usuario);
        } catch (err) {
            setError(err.message);
        } finally {
            setCargando(false);
        }
    }

    return (
        <main className="login">
            <h1>Objetos Perdidos UBB</h1>
            <p>Ingresa con tu correo institucional.</p>
            {error && <p role="alert">{error}</p>}
            <form onSubmit={enviar}>
                <fieldset disabled={cargando}>
                    <label>Correo institucional
                        <input
                            type="email"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            placeholder="nombre@alumnos.ubiobio.cl"
                            autoComplete="username"
                            required
                        />
                    </label>
                    <label>Contraseña
                        <input
                            type="password"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            autoComplete="current-password"
                            required
                        />
                    </label>
                    <button type="submit">{cargando ? 'Ingresando…' : 'Ingresar'}</button>
                </fieldset>
            </form>
            <button type="button" onClick={onExterno}>No pertenezco a la universidad</button>
        </main>
    );
}
