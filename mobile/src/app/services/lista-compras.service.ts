import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import URL_SERVER from "../../URL_SERVER";
@Injectable({
  providedIn: 'root'
})
export class ListaComprasService {

  constructor(
    private http : HttpClient,
  ) {}

  public getListaCompras() {
    return this.http.get(URL_SERVER+"/api/getListaCompras");
  }
  public createCompra(newCompra){
    const http = this.http.post(URL_SERVER+'/api/createListaCompras', newCompra);
    http.subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    return http;
  }
  public deleteCompra(idCompra){
    const http = this.http.delete(URL_SERVER+'/api/deleteListaCompras/'+idCompra);
    http.subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    return http;
  }
  
}
