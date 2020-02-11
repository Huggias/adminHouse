import { Router } from 'express';
// import { getUsers, getUser, createUser, signIn } from "../controllers/users.controller";
import { getCompras, createCompra } from "../controllers/compra.controller";

const router = Router();
// obtener compras
router.route('/getCompras')
    .get(getCompras)

// crear compras
router.route('/createCompra')
    .post(createCompra)

export default router;