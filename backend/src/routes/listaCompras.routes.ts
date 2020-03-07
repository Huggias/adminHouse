import { Router } from 'express';
// import { getUsers, getUser, createUser, signIn } from "../controllers/users.controller";
import { getCompras, createCompra, deleteCompra } from "../controllers/listaCompras.controller";

const router = Router();
// obtener compras
router.route('/getListaCompras')
    .get(getCompras)

// crear compras
router.route('/createListaCompras')
    .post(createCompra)

router.route('/deleteListaCompras/:idCompra')
    .delete(deleteCompra)    
 

export default router;