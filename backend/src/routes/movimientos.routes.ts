import { Router } from 'express';
// import { getUsers, getUser, createUser, signIn } from "../controllers/users.controller";
import { getMovimientos, createMovimiento, deleteMovimiento, getUltimosMovimientos } from "../controllers/movimientos.controller";

const router = Router();
// obtener compras
router.route('/getMovimientos')
    .get(getMovimientos)
router.route('/getUltimosMovimientos')
    .get(getUltimosMovimientos)

// crear compras
router.route('/createMovimiento')
    .post(createMovimiento)

router.route('/deleteMovimiento/:idMovimiento')
    .delete(deleteMovimiento)     

export default router;