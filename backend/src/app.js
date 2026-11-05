import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import rutas from './routes/index.js';
import { rutaNoEncontrada, manejarErrores } from './middlewares/manejoErrores.js';
import { CARPETA_FOTOS_OBJETOS, RUTA_PUBLICA_FOTOS_OBJETOS } from './config/almacenamiento.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Fotografías de objetos (Req 02), por ejemplo: GET /uploads/objetos/<nombre>.jpg
// nosniff evita que el navegador interprete un archivo como algo distinto a imagen
app.use(RUTA_PUBLICA_FOTOS_OBJETOS, express.static(CARPETA_FOTOS_OBJETOS, {
  index: false,
  dotfiles: 'deny',
  setHeaders: (res) => res.set('X-Content-Type-Options', 'nosniff'),
}));

app.use('/api', rutas);

app.use(rutaNoEncontrada);
app.use(manejarErrores);

export default app;
