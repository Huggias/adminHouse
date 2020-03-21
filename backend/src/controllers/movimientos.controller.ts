import { Request, Response } from "express";
import  sqlMovimiento  from "../sql/movimientos.sql";

import jwt  from "jsonwebtoken";
import { tokenKey } from "../keys";

// OBTENER COMPRAS
export  function getMovimientos(req:Request, res:Response):void{
    const movimientos : any = sqlMovimiento.getMovimientos();
    movimientos.then( (result : any[]) =>{
        return res.json(result);
    })
}

export  function getUltimosMovimientos(req:Request, res:Response):void{
    const movimientos : any = sqlMovimiento.getUltimosMovimientos();
    movimientos.then( (result : any[]) =>{
        return res.json(result);
    })
}

// CREAR COMPRA
export  function createMovimiento(req:Request, res:Response):void | Response{
    const newMovimiento : any = req.body;
    var movimientoCreado = sqlMovimiento.createMovimiento(newMovimiento);
    movimientoCreado.then( () =>{
        return res.json("Movimiento creado");
    })
}

export function deleteMovimiento(req:Request, res:Response){
    const delMovimiento  = req.params.idMovimiento;
    console.log("borrando compra: ", delMovimiento);
    var movimientoBorrado = sqlMovimiento.deleteMovimiento(delMovimiento);
    movimientoBorrado.then( () => {
        return res.json("Movimiento eliminado");
    })
}