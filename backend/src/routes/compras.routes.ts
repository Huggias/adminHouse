import { Router } from 'express';
// import { getUsers, getUser, createUser, signIn } from "../controllers/users.controller";
import { getCompras, createCompra, deleteCompra, resetCompras } from "../controllers/compra.controller";

const router = Router();
// obtener compras
router.route('/getCompras')
    .get(getCompras)

// crear compras
router.route('/createCompra')
    .post(createCompra)

router.route('/deleteCompra')
    .post(deleteCompra)    

router.route('/resetCompras')
    .post(resetCompras)    

export default router;