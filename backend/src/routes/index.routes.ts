import { Router } from 'express';
import { pruebaController } from "./../controllers/index.controller";
const router = Router();

router.route('/')
    .get( pruebaController );

export default router;