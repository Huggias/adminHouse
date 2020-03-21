import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import URL_SERVER from "../../URL_SERVER";
@Injectable({
  providedIn: 'root'
})
export class MovimientosService{

  constructor(
    private http : HttpClient,
    private router : Router
  ) { 

   }

   /**
    * getMovimientos
    */
   public getMovimientos() {
      return this.http.get(URL_SERVER+"/api/getMovimientos");
   }
   public getUltimosMovimientos() {
    return this.http.get(URL_SERVER+"/api/getUltimosMovimientos");
   }
   public createMovimiento(newMovimiento) {
    const http = this.http.post(URL_SERVER+"/api/createMovimiento", newMovimiento);
    http.subscribe(
        res => {
          console.log(res)
          return res;
        },
        err => console.log(err)
    );
    return http;
   }
   public deleteMovimiento(idMovimiento){
    return this.http.delete(URL_SERVER+'/api/deleteMovimiento/'+idMovimiento);
    
  }


}
