import { Request, Response } from "express";
import  sqlListaCompras  from "../sql/listaCompras.sql";

export  function getCompras(req:Request, res:Response):void{
    sqlListaCompras.connecToMysql().then(
        resp => {
            const compras : any = sqlListaCompras.getCompras();
            compras.then( (result : any[]) =>{
                return res.json(result);
            })
            sqlListaCompras.disConnecToMysql()
        }
    )
}

export  function createCompra(req:Request, res:Response):void | Response{
    sqlListaCompras.connecToMysql().then(
        resp => {
            var newCompra = req.body
            var compraCreada = sqlListaCompras.createCompra(newCompra);
            compraCreada.then( () =>{
                return res.json("compra creada");
            })
            sqlListaCompras.disConnecToMysql()
        }
    )
}

export function deleteCompra(req:Request, res:Response){
    sqlListaCompras.connecToMysql().then(
        resp => {
            const delCompra  = req.params.idCompra;
            var compraBorrada = sqlListaCompras.deleteCompra(delCompra);
            compraBorrada.then( () => {
                return res.json("compra eliminada");
            })
            sqlListaCompras.disConnecToMysql()
        }
    )
}