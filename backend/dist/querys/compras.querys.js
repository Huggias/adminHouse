"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class QueryCompras {
    datoToArray(data) {
        var aux = [];
        data.forEach((doc) => {
            var info = doc.data();
            info.idCompra = doc.id;
            aux.push(info);
        });
        return aux;
    }
    getComrpas() {
        var compras = [];
        var query = database_1.default.collection('compras').orderBy("", "asc");
        return query.get();
    }
    createCompra(newCompra) {
        newCompra.date = Math.floor(Date.now() / 1000);
        database_1.default.collection('compras').add(newCompra);
    }
}
var queryCompras = new QueryCompras();
exports.default = queryCompras;
