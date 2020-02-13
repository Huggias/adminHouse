import { Request, Response } from "express";
import  sqlCompra  from "../sql/compras.sql";

import { iCompra } from "../interface/compra.interface";

import jwt  from "jsonwebtoken";
import { tokenKey } from "../keys";

// OBTENER COMPRAS
export  function getCompras(req:Request, res:Response):void{
    const compras : any = sqlCompra.getCompras();
    compras.then( (result : iCompra[]) =>{
        return res.json(result);
    })
}

// CREAR COMPRA
export  function createCompra(req:Request, res:Response):Response{
    const newCompra : iCompra = req.body;
    if (!req.headers.authorization) {
        return res.status(401).send("Necesitas estar logeado");
    }
    const token = req.headers.authorization;
    const tokenObj : any | undefined =  jwt.verify(token, tokenKey);
    if(!tokenObj._id){ return res.status(401).send("error con el token")}
    sqlCompra.createCompra(newCompra, tokenObj._id);
    return res.json("compra creada");
}

export function deleteCompra(req:Request, res:Response){
    const delCompra  = req.body;
    console.log("borrando compra: ", delCompra.id);
    sqlCompra.deleteCompra(delCompra.id);
    return res.json("compra eliminada");
}