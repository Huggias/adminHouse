import { Router } from 'express';
// import { getUsers, getUser, createUser, signIn } from "../controllers/users.controller";
// import { getCompras, createCompra, deleteCompra, resetCompras } from "../controllers/compra.controller";
import { getTareas, getMisTareas, createTarea, deleteTarea, resetTareas  } from "../controllers/tareas.controller";

const router = Router();

router.route('/getTareas')
    .get(getTareas)

router.route('/getMisTareas')
    .get(getMisTareas)

router.route('/createTarea')
    .post(createTarea)

router.route('/deleteTarea/:idTarea')
    .delete(deleteTarea)    

router.route('/resetTareas')
    .post(resetTareas)

export default router;