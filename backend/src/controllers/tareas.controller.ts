import { Request, Response } from "express";
import  sqlTareas  from "../sql/tareas.sql";

import jwt  from "jsonwebtoken";
import { tokenKey } from "../keys";

// OBTENER TAREAS
export  function getTareas(req:Request, res:Response):void{
    sqlTareas.connecToMysql().then(
        resp => {
            const tareas : any = sqlTareas.getTareas();
            tareas.then( (result : any[]) =>{
                return res.json(result);
            })
            sqlTareas.disConnecToMysql().then()
        }
    )
}

export  function getMisTareas(req:Request, res:Response):void | Response{
    sqlTareas.connecToMysql().then(
        resp => {
            // console.log(req.params)
            if (!req.headers.authorization) { return res.status(401).send("Necesitas estar logeado"); }
            const token = req.headers.authorization;
            const tokenObj : any | undefined =  jwt.verify(token, tokenKey);
            const tareas : any = sqlTareas.getMisTareas(tokenObj._id);
            tareas.then( (result : any[]) =>{
                return res.json(result);
            })
            sqlTareas.disConnecToMysql().then()
        }
    )
}

export  function createTarea(req:Request, res:Response):void | Response{
    sqlTareas.connecToMysql().then(
        resp => {
            if (!req.headers.authorization) { return res.status(401).send("Necesitas estar logeado"); }
            const token = req.headers.authorization;
            const tokenObj : any | undefined =  jwt.verify(token, tokenKey);
            let newTarea = {"idUsuario" : tokenObj._id, "nombre":req.body.nombre, "descripcion":req.body.descripcion}
            const tareaAgregada = sqlTareas.createTarea(newTarea);
            tareaAgregada.then( () => {
                return res.json("se agrego la tarea");
            })
            sqlTareas.disConnecToMysql().then()
        }
    )
}
// resetear tareas por usuario
export  function deleteTarea(req:Request, res:Response):void{
    sqlTareas.connecToMysql().then(
        resp => {
            const tareaBorrada : any = sqlTareas.deleteTarea(req.params.idTarea);
            tareaBorrada.then( () =>{
                return res.json("se borro la tarea");
            })
            sqlTareas.disConnecToMysql().then()
        }
    )
}

function getRandomInt(min:number, max:number) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function find(array:any, elem:any){
    var encontrado = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i]==elem) {
            encontrado = true;
        }
    }
    return encontrado;
}
function shuffle(array:any) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {
  
      // Seleccionar un elemento sin mezclar...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // E intercambiarlo con el elemento actual
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
export  function resetTareas(req:Request, res:Response):void | Response{
    sqlTareas.connecToMysql().then(
        resp => {
            const tareas : any = sqlTareas.getTareas();
            tareas.then( (result : any[]) =>{
                // return res.json(result);
                let tareasPorUsuaro:any[] = [[],[],[]];
                var resultaAux = shuffle(result);
                resultaAux.forEach( (elem:any) => {
                    tareasPorUsuaro[0].push(elem);
                    tareasPorUsuaro = tareasPorUsuaro.sort( (elem1:any, elem2:any)=>{
                        return elem1.length-elem2.length;
                    } )
                })
                for (let i = 0; i < tareasPorUsuaro.length; i++) {
                    var aux = shuffle(tareasPorUsuaro[i]);
                    tareasPorUsuaro[i] = aux;             
                }
                var tpu = shuffle(tareasPorUsuaro);
                // console.log(min);
                // console.log(tpu);
                var usuarios = [1,2,3];
                var yaUsados:any[] = [];
                for (let i = 0; i < 3; i++) {
                    var usuario = getRandomInt(1,4);
                    while(find(yaUsados, usuario)){
                        var usuario = getRandomInt(1,4);
                    }
                    yaUsados.push(usuario);
                }
                console.log(yaUsados);
                sqlTareas.deleteTareas().then(
                    resp => sqlTareas.insertTareaUsuario(tpu,yaUsados).then(
                        resp =>{ 
                            sqlTareas.disConnecToMysql();
                            return res.json("Se reasignaron las tareas")
                        }
                    )
                )
                     
            })
        }
    )
}