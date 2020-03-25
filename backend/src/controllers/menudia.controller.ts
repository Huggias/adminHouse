import { Request, Response } from "express";
import  sqlMenuDia  from "../sql/menudia.sql";

// OBTENER MenuDiaS DE UN MenuDia
export  function getMenuDias(req:Request, res:Response):void{
    sqlMenuDia.connecToMysql().then(
        resp => {
            const MenuDias : any = sqlMenuDia.getMenuDia()
            MenuDias.then( (result : any[]) =>{
                console.log(result);
                sqlMenuDia.disConnecToMysql().then(
                    resp =>{
                        return res.json(result);
                    }
                )
            })
        }
    )
}

export  function getOneMenuDias(req:Request, res:Response):void{
    sqlMenuDia.connecToMysql().then(
        resp => {
            const datos = req.body;
            sqlMenuDia.getOneMenuDia(datos.dia, datos.horario)
            .then( (result : any) =>{
                console.log(result);
                var menu:{
                    nombre : string,
                    cocina : string,
                    preparacion : string,
                    verificacion : string,
                    ingredientes : any[]
                } = {
                    nombre : result[0].nombre,
                    cocina : result[0].cocina,
                    preparacion : result[0].preparacion,
                    verificacion : result[0].verificacion,
                    ingredientes : []
                }
                result.forEach((ingrediente:any) => {
                    menu.ingredientes.push({
                        cantidad : parseFloat(ingrediente.cantidad),
                        cuantificador : ingrediente.cuantificador,
                        nombre : ingrediente.nombreIngrediente
                    })
                });
                sqlMenuDia.disConnecToMysql().then(
                    resp =>{
                        return res.json(menu);
                    }
                )
            })
        }
    )
}

export  function getMenuDia(req:Request, res:Response):void{
    sqlMenuDia.connecToMysql().then(
        resp => {
            const datos = req.body;
            const MenuDias : any = sqlMenuDia.getMenuDiaOf(datos.dia, datos.horario)
            MenuDias.then( (result : any[]) =>{
                sqlMenuDia.disConnecToMysql().then(
                    resp =>{
                        return res.json(result);
                    }
                )
            })
        }
    )
}

export  function setearMenu(req:Request, res:Response):void | Response{
    sqlMenuDia.connecToMysql().then(
        resp => {
            const set = req.body;
            var MenuDiaCreado = sqlMenuDia.setearMenu(set);
            MenuDiaCreado.then( () =>{
                sqlMenuDia.disConnecToMysql().then(
                    resp =>{
                        return res.json("MenuDia seteado");
                    }
                )
            })
        }
    )
}

export  function setearMenuAll(req:Request, res:Response):void | Response{
    sqlMenuDia.connecToMysql().then(
        resp => {
            const set = req.body;
            var MenuDiaCreado = sqlMenuDia.setAll(set);
            MenuDiaCreado.then( () =>{
                sqlMenuDia.disConnecToMysql().then(
                    resp =>{
                        return res.json("MenuDia seteado");
                    }
                )
            })
        }
    )
}

export  function setearCocina(req:Request, res:Response):void | Response{
    sqlMenuDia.connecToMysql().then(
        resp => {
            const set = req.body;
            var MenuDiaCreado = sqlMenuDia.setearCocina(set);
            MenuDiaCreado.then( () =>{
                sqlMenuDia.disConnecToMysql().then(
                    resp =>{
                        return res.json("cocina seteado");
                    }
                )
            })
        }
    )
}

export  function setearPreparacion(req:Request, res:Response):void | Response{
    sqlMenuDia.connecToMysql().then(
        resp => {
            const set = req.body;
            var MenuDiaCreado = sqlMenuDia.setearPreparacion(set);
            MenuDiaCreado.then( () =>{
                sqlMenuDia.disConnecToMysql().then(
                    resp =>{
                        return res.json("preparacion seteado");
                    }
                )
            })
        }
    )
}

export  function setearVerificacion(req:Request, res:Response):void | Response{
    sqlMenuDia.connecToMysql().then(
        resp => {
            const set = req.body;
            var MenuDiaCreado = sqlMenuDia.setearVerificacion(set);
            MenuDiaCreado.then( () =>{
                sqlMenuDia.disConnecToMysql().then(
                    resp =>{
                        return res.json("verificacion seteado");
                    }
                )
            })
        }
    )
}