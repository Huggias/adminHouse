import { Router } from 'express';
// import { getUsers, getUser, createUser, signIn } from "../controllers/users.controller";
import { updateImg, getMenuConIngredientes, getMenusConIngredientes, getMenu, getMenus, createMenu, deleteMenu } from "../controllers/menus.controller";

const router = Router();
// obtener Menus
router.route('/getMenus')
    .get(getMenus)

router.route('/getMenuConIngredientes/:idMenu')
    .get(getMenuConIngredientes)

router.route('/getMenuConIngredientes')
    .get(getMenusConIngredientes)

router.route('/getMenu/:idMenu')
    .get(getMenu)

// crear Menus
router.route('/createMenu')
    .post(createMenu)

router.route('/updateImg')
    .post(updateImg)

router.route('/deleteMenu/:idMenu')
    .delete(deleteMenu)     

export default router;