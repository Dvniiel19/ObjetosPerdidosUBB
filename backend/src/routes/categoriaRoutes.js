import {Router} from 'express'; 
import {mostrarCategoria} from '../controllers/categoriaController.js';

const router = Router(); 

router.get('/', mostrarCategoria);

export default router;