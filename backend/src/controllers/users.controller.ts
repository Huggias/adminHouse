import { Request, Response } from "express";
import  sqlUser  from "../sql/users.sql";

import { iUser, iNewUser, iReqUser } from "../interface/user.interface";

import jwt  from "jsonwebtoken";
import { tokenKey } from "../keys";

/** 
el Promise<Response> es para especificar que la funcion devuelve algo de tipo Response pero que soporta promesas o el async await
**/ 

// OBTENER USUARIOS
export  function getUsers(req:Request, res:Response):void{
    const users : any = sqlUser.getUsers();
    users.then( (result : iUser[]) =>{
        return res.json(result);
    })
}

// OBTENER UN USUARIO
export function getUser(req:Request, res:Response):void{
    const id = req.params.userid;
    const user = sqlUser.getUser(id);
    user.then( (result: iUser)=>{
        return res.json(result);
    } )
}

// CREAR USUARIOS
export function createUser(req:Request, res:Response): Response{
    const newUser : iUser = req.body;
    sqlUser.createUser(newUser);
    const token = jwt.sign({
        _id : newUser.id,
    }, tokenKey);

    return res.json({token : token});
}


// BUSCAR AL USUARIO QUE SE QUIERE LOGEAR
export function signIn(req:Request, res:Response):void {
    const reqUser : iReqUser = req.body;
    const findedUser = sqlUser.findUser(reqUser.username, reqUser.password)
    findedUser.then( (result : iUser[]) => {
        if (result.length > 0) {
            const token = jwt.sign({
                _id : result[0].id
            }, tokenKey)
            return res.status(200).json({token})
        }else{
            return res.status(400).json("Las credenciales de usuario no son correctas")
        }
    })
}