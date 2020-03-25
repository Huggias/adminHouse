import { Router } from 'express';
// import { getUsers, getUser, createUser, signIn } from "../controllers/users.controller";
import { getAllIngredientes, updateIngrediente, getIngredientes, createIngrediente, deleteIngrediente } from "../controllers/ingredientes.controller";

const router = Router();
// obtener Ingredientes
router.route('/getIngredientes/:idMenu')
    .get(getIngredientes)

router.route('/updateIngrediente/:idIngrediente')
    .post(updateIngrediente)

router.route('/getIngredientes')
    .get(getAllIngredientes)


// crear Ingredientes
router.route('/createIngrediente')
    .post(createIngrediente)

router.route('/deleteIngrediente/:idIngrediente')
    .delete(deleteIngrediente)     

export default router;