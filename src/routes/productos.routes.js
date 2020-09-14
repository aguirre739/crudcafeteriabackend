import { Router } from 'express';
import cafeteriaController from '../controllers/productos.controllers';

const { getPrueba, crearProducto, listarProductos, borrarProducto, editarProducto } = cafeteriaController
const router = Router();

router.route('/')
    .get(listarProductos)
    .post(crearProducto)

router.route('/:id').delete(borrarProducto).put(editarProducto);
export default router;