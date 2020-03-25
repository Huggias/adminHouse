import { Request, Response } from "express";
import  sqlMovimiento  from "../sql/movimientos.sql";

import jwt  from "jsonwebtoken";
import { tokenKey } from "../keys";

// OBTENER COMPRAS
export  function getMovimientos(req:Request, res:Response):void{
    sqlMovimiento.connecToMysql().then(
        resp => {
            const movimientos : any = sqlMovimiento.getMovimientos();
            movimientos.then( (result : any[]) =>{
                return res.json(result);
            })
            sqlMovimiento.disConnecToMysql().then()
        }
    )
}

export  function getUltimosMovimientos(req:Request, res:Response):void{
    sqlMovimiento.connecToMysql().then(
        resp => {
            const movimientos : any = sqlMovimiento.getUltimosMovimientos();
            movimientos.then( (result : any[]) =>{
                return res.json(result);
            })
            sqlMovimiento.disConnecToMysql().then()
        }
    )
}

// CREAR COMPRA
export  function createMovimiento(req:Request, res:Response):void | Response{
    sqlMovimiento.connecToMysql().then(
        resp => {
            const newMovimiento : any = req.body;
            var movimientoCreado = sqlMovimiento.createMovimiento(newMovimiento);
            movimientoCreado.then( () =>{
                return res.json("Movimiento creado");
            })
            sqlMovimiento.disConnecToMysql().then()
        }
    )
}

export function deleteMovimiento(req:Request, res:Response){
    sqlMovimiento.connecToMysql().then(
        resp => {
            const delMovimiento  = req.params.idMovimiento;
            console.log("borrando compra: ", delMovimiento);
            var movimientoBorrado = sqlMovimiento.deleteMovimiento(delMovimiento);
            movimientoBorrado.then( () => {
                return res.json("Movimiento eliminado");
            })
            sqlMovimiento.disConnecToMysql().then()
        }
    )
}