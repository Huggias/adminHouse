import { Response, Request, NextFunction } from "express";
import jwt, { verify } from "jsonwebtoken";
import { tokenKey } from "../keys";
export function verifyToken( req : Request, res : Response, next : NextFunction ){
    if (!req.headers.authorization) {
        return res.status(401).send("Necesitas estar logeado");
    }
    const token = req.headers.authorization;
    // console.log(token);
    try{
        const veryfi = jwt.verify(token,tokenKey)
    }
    catch(err){
        console.log(err);
        return res.send("autorizacion invalida");
    }

    next();
}