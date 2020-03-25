import { Request, Response } from "express";
import  sqlIngrediente  from "../sql/ingredientes.sql";

// OBTENER INGREDIENTES DE UN MENU
export  function getIngredientes(req:Request, res:Response):void{
    sqlIngrediente.connecToMysql().then(
        resp => {
            const idMenu = req.params.idMenu;
            const ingredientes : any = sqlIngrediente.getIngredientes(idMenu);
            ingredientes.then( (result : any[]) =>{
                sqlIngrediente.disConnecToMysql().then(
                    resp =>{
                        return res.json(result);
                    }
                )
            })
        }
    )
}

export  function getAllIngredientes(req:Request, res:Response):void{
    sqlIngrediente.connecToMysql().then(
        resp => {
            const ingredientes : any = sqlIngrediente.getAllIngredientes();
            ingredientes.then( (result : any[]) =>{
                sqlIngrediente.disConnecToMysql().then(
                    resp =>{
                        return res.json(result);
                    }
                )
            })
        }
    )
}

export  function updateIngrediente(req:Request, res:Response):void{
    sqlIngrediente.connecToMysql().then(
        resp => {
            const idIngrediente = req.params.idIngrediente;
            const ingredientes : any = sqlIngrediente.updateIngrediente(idIngrediente, req.body);
            ingredientes.then( (result : any[]) =>{
                sqlIngrediente.disConnecToMysql().then(
                    resp =>{
                        return res.json(result);
                    }
                )
            })
            
        }
    )
}

// CREAR COMPRA
export  function createIngrediente(req:Request, res:Response):void | Response{
    sqlIngrediente.connecToMysql().then(
        resp => {
            const newIngrediente = req.body;
            var ingredienteCreado = sqlIngrediente.createIngrediente(newIngrediente);
            ingredienteCreado.then( () =>{
                sqlIngrediente.disConnecToMysql().then(
                    resp =>{
                        return res.json("Ingrediente creado");
                    }
                )
            })
            
        }
    )
}

export function deleteIngrediente(req:Request, res:Response){
    sqlIngrediente.connecToMysql().then(
        resp => {
            const idIngrediente = req.params.idIngrediente;
            var ingredienteEliminado = sqlIngrediente.deleteIngrediente(idIngrediente);
            ingredienteEliminado.then( () => {
                sqlIngrediente.disConnecToMysql().then(
                    resp =>{
                        return res.json("Ingrediente eliminado");
                    }
                )
            })
            
        }
    )
}