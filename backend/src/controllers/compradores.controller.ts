import { Request, Response } from "express";
import  sqlComprador  from "../sql/comprador.sql";
import { iComprador } from "../interface/compradores.interface";

// OBTENER USUARIOS
export  function getCompradores(req:Request, res:Response):void{
    // const users : Promise<any> = sqlComprador.getCompradores();
    // users.then( (result : iComprador[]) =>{
    //     return res.json(result);
    // })
    // return res.json("hola");
}