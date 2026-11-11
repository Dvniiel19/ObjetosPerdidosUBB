import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
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

// Frontend compilado (npm run build en frontend/). En el servidor de la universidad
// Express entrega la página y la API desde el mismo puerto, así el frontend usa '/api'.
// En desarrollo la carpeta dist no existe y esto no hace nada (se usa Vite en el 5173).
const CARPETA_FRONTEND = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../frontend/dist');
if (fs.existsSync(CARPETA_FRONTEND)) {
  app.use(express.static(CARPETA_FRONTEND));
}

app.use(rutaNoEncontrada);
app.use(manejarErrores);

export default app;
