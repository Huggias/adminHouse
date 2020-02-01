import { Router } from 'express';
// import { getUsers, getUser, createUser, signIn } from "../controllers/users.controller";
import { getCompradores } from "../controllers/compradores.controller";
const router = Router();

router.route('/getCompradores')
    .get(getCompradores)

export default router;