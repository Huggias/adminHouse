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
class SqlCompras {
    constructor() {
        this.connecToMysql();
    }
    connecToMysql() {
        return __awaiter(this, void 0, void 0, function* () {
            this.conn = yield database_1.connect();
        });
    }
    createCompra(newCompra, idUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.conn.query("INSERT INTO `compras`(`idUsuario`, `precio`, `descripcion`) VALUES (?,?,?)", [idUsuario, newCompra.precio, newCompra.descripcion]);
        });
    }
    getCompras() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT c.*, u.username FROM compras c INNER JOIN usuarios u ON (c.idUsuario = u.id) ORDER BY `idCompra` DESC";
            const compras = yield this.conn.query(query);
            return compras[0];
        });
    }
    deleteCompra(idCompra) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM `compras` WHERE idCompra = ";
            yield this.conn.query("DELETE FROM `compras` WHERE idCompra = ?", [idCompra]);
        });
    }
}
const sqlCompra = new SqlCompras();
exports.default = sqlCompra;
