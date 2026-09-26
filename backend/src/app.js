import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import rutas from './routes/index.js';
import { rutaNoEncontrada, manejarErrores } from './middlewares/manejoErrores.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', rutas);

app.use(rutaNoEncontrada);
app.use(manejarErrores);

export default app;
