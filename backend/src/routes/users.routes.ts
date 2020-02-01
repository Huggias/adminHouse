import { Router } from 'express';
import { getUsers, getUser, createUser, signIn } from "../controllers/users.controller";
const router = Router();

router.route('/getUsers')
    .get(getUsers)
    
router.route('/getUser/:userid')
    .get(getUser);

router.route('/signUp')
    .post(createUser);

router.route('/logIn')
    .post(signIn);

export default router;