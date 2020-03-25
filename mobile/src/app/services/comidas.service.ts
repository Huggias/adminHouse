import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import URL_SERVER from "../../URL_SERVER"
@Injectable({
  providedIn: 'root'
})
export class ComidasService {

  constructor(
    private http : HttpClient
  ) { }

  public getIngredientes(idMenu){
    return this.http.get(URL_SERVER+'/api/getIngredientes/'+idMenu);
  }
  public getAllIngredientes(){
    return this.http.get(URL_SERVER+'/api/getIngredientes');
  }
  public menusConIngredientes(){
    return this.http.get(URL_SERVER+'/api/getMenuConIngredientes');
  }
  public menuConIngredientes(idMenu){
    return this.http.get(URL_SERVER+'/api/getMenuConIngredientes/'+idMenu);
  }
  public updateImg(link, idMenu){
    return this.http.post(URL_SERVER+'/api/updateImg',{link, idMenu})
  }
  public getUsers(){
    return this.http.get(URL_SERVER+'/log/getUsers');
  }
  public getAllMenu(){
    return this.http.get(URL_SERVER+'/api/getMenus');
  }
  public getAllMenuDia(){
    return this.http.get(URL_SERVER+'/api/getMenuDia');
  }
  public setAllMenuDia(data){
    return this.http.post(URL_SERVER+'/api/setAll', data);

  }
  public getMenuDia(dia, horario){
    return this.http.post(URL_SERVER+'/api/getMenuDia/', {dia, horario});
  }
  public getOneMenuDia(dia:any, horario:any){
    return this.http.post(URL_SERVER+'/api/getOneMenuDia', {"dia":dia, "horario":horario});
  }
  public getMenu(idMenu){
    return this.http.get(URL_SERVER+'/api/getMenu/'+idMenu);
  }
  public updateIngrediente(idIngrediente, ingrediente){
    return this.http.post(URL_SERVER+'/api/updateIngrediente/'+idIngrediente, ingrediente);
  }
  public createIngrediente(ingrediente){
    return this.http.post(URL_SERVER+'/api/createIngrediente', ingrediente);
  }
  public deleteIngrediente(idIngrediente){
    return this.http.delete(URL_SERVER+'/api/deleteIngrediente/'+idIngrediente);
  }
  public createMenu(menu){
    return this.http.post(URL_SERVER+'/api/createmenu', menu);
  }
  public deleteMenu(menu){
    return this.http.delete(URL_SERVER+'/api/deleteMenu/'+menu);
  }

}
