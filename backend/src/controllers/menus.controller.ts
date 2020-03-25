import { Request, Response } from "express";
import  sqlMenu  from "../sql/menus.sql";
import sqlIngrediente from "../sql/ingredientes.sql";

// OBTENER MenuS DE UN MENU
export  function getMenus(req:Request, res:Response):void{
    sqlMenu.connecToMysql().then(
        resp => {
            const Menus : any = sqlMenu.getMenus();
            Menus.then( (result : any[]) =>{
                sqlMenu.disConnecToMysql().then(
                    resp => {
                        return res.json(result);

                    }
                )
            })
        }
    )
}

export  function getMenu(req:Request, res:Response):void{
    sqlMenu.connecToMysql().then(
        resp => {
            const Menus : any = sqlMenu.getMenu(req.params.idMenu);
            Menus.then( (result : any[]) =>{
                sqlMenu.disConnecToMysql().then(
                    resp => {
                        return res.json(result);

                    }
                )
            })
        }
    )
}
export  function getMenuConIngredientes(req:Request, res:Response):void{
    sqlMenu.connecToMysql().then(
        resp => {
            sqlMenu.getMenuConIngredientes(req.params.idMenu).then(
                (respMenu:any) => {
                    
                    var menu : {
                        nombre : string,
                        descripcion : string,
                        img : string,
                        ingredientes : any[]
                    }={nombre:"", descripcion:"", img:"", ingredientes:[]}
                    
                    menu.nombre = respMenu[0].nombre;
                    menu.descripcion = respMenu[0].descripcion;
                    menu.img = respMenu[0].img;
                    respMenu.forEach((element:any) => {
                        var ingrediente = {
                            idIngrediente : element.idIngrediente,
                            nombre : element.nombreIngrediente,
                            cantidad : parseFloat(element.cantidad),
                            cuantificador : element.cuantificador
                        }
                        menu.ingredientes.push(ingrediente);
                    });
                    console.log(respMenu);
                    sqlMenu.disConnecToMysql().then(
                        respDisc =>{
                            return res.json(menu)
                        }
                    )
                }
            )
        }
    )
}
export  function getMenusConIngredientes(req:Request, res:Response):void{
    sqlMenu.connecToMysql().then(
        resp => {
            const Menus : any = sqlMenu.getMenusConIngredientes();
            Menus.then( (result : any[]) =>{

                var allMenus : {
                    idMenu: number,
                    nombre: string,
                    descripcion: string,
                    img : string,
                    ingredientes : any[]
                }[] = [];
                var modIngrediente : {
                    idIngrediente : string,
                    idMenu : string,
                    nombre : string,
                    cantidad : string,
                    cuantifiador : string
                }

                // matcheo
                var i = 0;
                result.forEach( menu => {
                    modIngrediente = {
                        idIngrediente : menu.idIngrediente,
                        idMenu : menu.idMenuIngrediente,
                        nombre : menu.nombreIngrediente,
                        cantidad : parseFloat(menu.cantidad)+"",
                        cuantifiador : menu.cuantifiador
                    }
                    var encontrado = false;
                    var pos = 1;
                    var j = 0;
                    allMenus.forEach( elem => {
                        if (elem.idMenu == menu.idMenu) {
                            encontrado = true;
                            pos = j;
                        }
                        j++;
                    })
                    if (!encontrado) {
                        var obj = {idMenu:menu.idMenu, 
                            nombre:menu.nombre, 
                            descripcion:menu.descripcion,
                            img : menu.img, 
                            ingredientes: [modIngrediente]}
                        allMenus.push(obj);
                        i++;
                    }else{
                        allMenus[pos].ingredientes.push(modIngrediente);
                    }
                })
                sqlMenu.disConnecToMysql().then(
                    resp => {
                        return res.json(allMenus);

                    }
                )
            })
        }
    )
}

// CREAR MENU
export  function createMenu(req:Request, res:Response):void | Response{
    sqlMenu.connecToMysql().then(
        resp => {
            const newMenu = req.body;
            var MenuCreado = sqlMenu.createMenu(newMenu);
            MenuCreado.then( (result:any) =>{
                sqlMenu.disConnecToMysql().then(
                    resp => {
                        return res.json("Menu creado");

                    }
                )
            })
        }
    )
}

export  function updateImg(req:Request, res:Response):void | Response{
    sqlMenu.connecToMysql().then(
        resp => {
            const data = req.body;
            sqlMenu.updateImg(data.link, data.idMenu).then( (result:any) =>{
                sqlMenu.disConnecToMysql().then(
                    resp => {
                        return res.json("Menu actualizado");

                    }
                )
            })
        }
    )
}

export function deleteMenu(req:Request, res:Response){
    sqlMenu.connecToMysql().then(
        resp => {
            const idMenu = req.params.idMenu;
            var MenuEliminado = sqlMenu.deleteMenu(idMenu);
            MenuEliminado.then( () => {
                sqlMenu.disConnecToMysql().then(
                    resp => {
                        return res.json("Menu eliminado");
                    }
                )
            })
        }
    )
}