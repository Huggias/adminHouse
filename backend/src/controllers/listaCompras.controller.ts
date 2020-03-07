import { Request, Response } from "express";
import  sqlListaCompras  from "../sql/listaCompras.sql";

export  function getCompras(req:Request, res:Response):void{
    const compras : any = sqlListaCompras.getCompras();
    compras.then( (result : any[]) =>{
        return res.json(result);
    })
}

export  function createCompra(req:Request, res:Response):void | Response{
    var newCompra = req.body
    var compraCreada = sqlListaCompras.createCompra(newCompra);
    compraCreada.then( () =>{
        return res.json("compra creada");
    })
}

export function deleteCompra(req:Request, res:Response){
    const delCompra  = req.params.idCompra;
    var compraBorrada = sqlListaCompras.deleteCompra(delCompra);
    compraBorrada.then( () => {
        return res.json("compra eliminada");
    })
}