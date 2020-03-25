import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import URL_SERVER from "../../URL_SERVER";
@Injectable({
  providedIn: 'root'
})
export class MovimientosService{

  constructor(
    private http : HttpClient,
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
    return this.http.post(URL_SERVER+"/api/createMovimiento", newMovimiento);
   }
   public deleteMovimiento(idMovimiento){
    return this.http.delete(URL_SERVER+'/api/deleteMovimiento/'+idMovimiento);
    
  }


}
