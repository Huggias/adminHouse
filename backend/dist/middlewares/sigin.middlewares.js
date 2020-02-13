"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const keys_1 = require("../keys");
function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("Necesitas estar logeado");
    }
    const token = req.headers.authorization;
    // console.log(token);
    try {
        const veryfi = jsonwebtoken_1.default.verify(token, keys_1.tokenKey);
    }
    catch (err) {
        console.log(err);
        return res.send("autorizacion invalida");
    }
    next();
}
exports.verifyToken = verifyToken;
