import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { URL_SERVER } from "../../URL_SERVER"
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  

  constructor(
    private http : HttpClient,
    private socket: Socket
  ) { }

  public getCompras(){
    return this.http.get<any>(URL_SERVER+'/api/getCompras');
  }

  public createCompra(nuevaCompra : any){
    const http = this.http.post<any>(URL_SERVER+'/api/createCompra', nuevaCompra);
    http.subscribe(
      res => { 
        this.socket.emit('modCompras'); 
      },
      err => console.log(err)
    )
    return http;
  }

  public deleteCompra(idCompra){
    const http = this.http.post<any>(URL_SERVER+'/api/deleteCompra', {id: idCompra});
    http.subscribe(
      res=>{
        console.log("emitiendo que se borro una compra");
        this.socket.emit('modCompras'); 
      },
      err=>console.log(err)
    )
  }

  public emmitModCompras(){
    this.socket.emit('modCompras');
  }

}
