"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compras_sql_1 = __importDefault(require("../sql/compras.sql"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const keys_1 = require("../keys");
// OBTENER COMPRAS
function getCompras(req, res) {
    const compras = compras_sql_1.default.getCompras();
    compras.then((result) => {
        return res.json(result);
    });
}
exports.getCompras = getCompras;
// CREAR COMPRA
function createCompra(req, res) {
    const newCompra = req.body;
    if (!req.headers.authorization) {
        return res.status(401).send("Necesitas estar logeado");
    }
    const token = req.headers.authorization;
    const tokenObj = jsonwebtoken_1.default.verify(token, keys_1.tokenKey);
    if (!tokenObj._id) {
        return res.status(401).send("error con el token");
    }
    var compraCreada = compras_sql_1.default.createCompra(newCompra, tokenObj._id);
    compraCreada.then(() => {
        return res.json("compra creada");
    });
}
exports.createCompra = createCompra;
function deleteCompra(req, res) {
    const delCompra = req.body;
    console.log("borrando compra: ", delCompra.id);
    var compraBorrada = compras_sql_1.default.deleteCompra(delCompra.id);
    compraBorrada.then(() => {
        return res.json("compra eliminada");
    });
}
exports.deleteCompra = deleteCompra;
