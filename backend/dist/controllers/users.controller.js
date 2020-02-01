"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
/**
el Promise<Response> es para especificar que la funcion devuelve algo de tipo Response pero que soporta promesas o el async await
**/
function objectToMysql(obj) {
    var values = "";
    for (var clave in obj) {
        values += "'" + obj[clave] + "',";
    }
    return values.slice(0, (values.length - 1));
}
// OBTENER USUARIOS
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const users = yield conn.query("SELECT * FROM prueba");
        return res.json(users[0]); // como users tiene banda de cosas de la base, en la pos 0 tiene los datos propios
    });
}
exports.getUsers = getUsers;
// OBTENER UN USUARIO
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.userid;
        const conn = yield database_1.connect();
        const user = yield conn.query("SELECT * FROM prueba WHERE id = ?", [id]);
        return res.json(user[0]);
    });
}
exports.getUser = getUser;
// CREAR USUARIOS
function createUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const newUser = req.body;
        const query = "INSERT INTO `prueba`(`nombre`, `apellido`, `edad`) VALUES (" + objectToMysql(newUser) + ")";
        yield conn.query(query);
        return res.json(query);
    });
}
exports.createUsers = createUsers;
