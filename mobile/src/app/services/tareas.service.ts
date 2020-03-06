import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import URL_SERVER from "../../URL_SERVER"
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(
    private http : HttpClient,
    private socket: Socket
  ) { }

  public getTareas(){
    return this.http.get<any>(URL_SERVER+'/api/getTareas');
  }

  public getMisTareas(){
    return this.http.get<any>(URL_SERVER+'/api/getMisTareas');
  }

  public resetTareas(){
    return this.http.post<any>(URL_SERVER+'/api/resetTareas', {});
  }

  public borrarTarea(idTarea){
    return this.http.delete<any>(URL_SERVER+'/api/deleteTarea/'+idTarea);
  }

  public createTarea(tarea){
    return this.http.post<any>(URL_SERVER+'/api/createTarea/', tarea);

  }

}
