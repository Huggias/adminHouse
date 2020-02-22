"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
const router = express_1.Router();
router.route('/getUsers')
    .get(users_controller_1.getUsers);
router.route('/getUser/:userid')
    .get(users_controller_1.getUser);
router.route('/signUp')
    .post(users_controller_1.createUser);
router.route('/logIn')
    .post(users_controller_1.signIn);
router.route('/test')
    .post((req, res) => { res.json("probando"); });
exports.default = router;
