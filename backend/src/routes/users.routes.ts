import { Router } from 'express';
import { getId, getUsers, getUser, createUser, signIn } from "../controllers/users.controller";
const router = Router();

router.route('/getUsers')
    .get(getUsers)
    
router.route('/getId')
    .get(getId)
    
router.route('/getUser/:userid')
    .get(getUser);

router.route('/signUp')
    .post(createUser);

router.route('/logIn')
    .post(signIn);

router.route('/test')
    .post( (req, res)=> {res.json("probando")} );

export default router;