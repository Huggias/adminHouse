import { Request, Response } from "express";
import  sqlUser  from "../sql/user.sql"

import { iUser, iNewUser, iReqUser } from "../interface/user.interface";

import jwt  from "jsonwebtoken";
import { tokenKey } from "../keys";

/** 
el Promise<Response> es para especificar que la funcion devuelve algo de tipo Response pero que soporta promesas o el async await
**/ 

// OBTENER USUARIOS
export  function getUsers(req:Request, res:Response):void{
    sqlUser.connecToMysql().then(
        resp =>{ 
            console.log("conectado a bd")
            const users : any = sqlUser.getUsers();
            users.then( (result : iUser[]) =>{
                return res.json(result);
            })
            sqlUser.disConnecToMysql().then(
                res => {console.log("desconctado de la bd")}
            )
        }
    );
}
export  function getId(req:Request, res:Response):void | Response{
    if (!req.headers.authorization) {
        return res.status(401).send("Necesitas estar logeado");
    }
    const token = req.headers.authorization;
    const tokenObj : any | undefined =  jwt.verify(token, tokenKey);
    if(!tokenObj._id){ return res.status(401).send("error con el token")}
    return res.json({"id":tokenObj._id});
}
// OBTENER UN USUARIO
export function getUser(req:Request, res:Response):void{
    sqlUser.connecToMysql().then(
        resp =>{ 
            const id = req.params.userid;
            const user = sqlUser.getUser(id);
            user.then( (result: iUser)=>{
                return res.json(result);
            } )
            sqlUser.disConnecToMysql().then()
        }
    )
}

// CREAR USUARIOS
export function createUser(req:Request, res:Response): void{
    sqlUser.connecToMysql().then(
        resp =>{
            const newUser : iUser = req.body;
            sqlUser.createUser(newUser);
            const token = jwt.sign({
                _id : newUser.id,
            }, tokenKey);
        
            sqlUser.disConnecToMysql().then()
            return res.json({token : token});
        }
    )
}


// BUSCAR AL USUARIO QUE SE QUIERE LOGEAR
export function signIn(req:Request, res:Response):void {
    sqlUser.connecToMysql().then(
        resp =>{
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
            sqlUser.disConnecToMysql().then()
        }
    )

}