import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import URL_SERVER from "../../URL_SERVER"
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
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
    return this.http.post(URL_SERVER+'/api/createCompra', nuevaCompra);
  }

  public deleteCompra(idCompra){
    return this.http.post(URL_SERVER+'/api/deleteCompra', {id: idCompra});
  }

  public resetCompras(){
    const http:Observable<any> = this.http.post(URL_SERVER+'/api/resetCompras', {});
    http.subscribe(
      res=>{
        console.log("emitiendo que se reiniciaron las compras");
        this.socket.emit('modCompras'); 
        return res;
      },
      err=>console.log(err)
    )
  }
  public emmitModCompras(){
    this.socket.emit('modCompras');
  }

}
