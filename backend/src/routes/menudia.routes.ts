import { Router } from 'express';
// import { getUsers, getUser, createUser, signIn } from "../controllers/users.controller";
import { getOneMenuDias, setearMenuAll, getMenuDia, getMenuDias, setearCocina, setearMenu, setearPreparacion, setearVerificacion } from "../controllers/menudia.controller";

const router = Router();
// obtener Menus

router.route('/getMenuDia')
    .get(getMenuDias)
    .post(getMenuDia)

router.route('/getOneMenuDia')
    .post(getOneMenuDias)
    
// crear Menus
router.route('/setearMenu')
    .post(setearMenu)

router.route('/setAll')
    .post(setearMenuAll)

router.route('/setearPreparacion')
    .post(setearPreparacion)

router.route('/setearCocina')
    .post(setearCocina)

router.route('/setearVerificacion')
    .post(setearVerificacion)

export default router;