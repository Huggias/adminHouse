"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_sql_1 = __importDefault(require("../sql/users.sql"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const keys_1 = require("../keys");
/**
el Promise<Response> es para especificar que la funcion devuelve algo de tipo Response pero que soporta promesas o el async await
**/
// OBTENER USUARIOS
function getUsers(req, res) {
    const users = users_sql_1.default.getUsers();
    users.then((result) => {
        return res.json(result);
    });
}
exports.getUsers = getUsers;
// OBTENER UN USUARIO
function getUser(req, res) {
    const id = req.params.userid;
    const user = users_sql_1.default.getUser(id);
    user.then((result) => {
        return res.json(result);
    });
}
exports.getUser = getUser;
// CREAR USUARIOS
function createUser(req, res) {
    const newUser = req.body;
    users_sql_1.default.createUser(newUser);
    const token = jsonwebtoken_1.default.sign({
        _id: newUser.id,
    }, keys_1.tokenKey);
    return res.json({ token: token });
}
exports.createUser = createUser;
// BUSCAR AL USUARIO QUE SE QUIERE LOGEAR
function signIn(req, res) {
    const reqUser = req.body;
    const findedUser = users_sql_1.default.findUser(reqUser.username, reqUser.password);
    findedUser.then((result) => {
        if (result.length > 0) {
            const token = jsonwebtoken_1.default.sign({
                _id: result[0].id
            }, keys_1.tokenKey);
            return res.status(200).json({ token });
        }
        else {
            return res.status(400).json("Las credenciales de usuario no son correctas");
        }
    });
}
exports.signIn = signIn;
