import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { URL_SERVER } from "../../URL_SERVER"
@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(
    private http : HttpClient
  ) { }

  public getCompras(){
    return this.http.get<any>(URL_SERVER+'/api/getCompras');
  }

  public createCompra(nuevaCompra : any){
    console.log("creando compra: ", nuevaCompra);
    return this.http.post<any>(URL_SERVER+'/api/createCompra', nuevaCompra);
  }

}
