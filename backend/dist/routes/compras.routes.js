"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { getUsers, getUser, createUser, signIn } from "../controllers/users.controller";
const compra_controller_1 = require("../controllers/compra.controller");
const router = express_1.Router();
// obtener compras
router.route('/getCompras')
    .get(compra_controller_1.getCompras);
// crear compras
router.route('/createCompra')
    .post(compra_controller_1.createCompra);
router.route('/deleteCompra')
    .post(compra_controller_1.deleteCompra);
exports.default = router;
