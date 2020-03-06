import { Component, OnInit } from '@angular/core';
import { TareasService } from "../../../../services/tareas.service";
@Component({
  selector: 'app-ctarea',
  templateUrl: './ctarea.page.html',
  styleUrls: ['./ctarea.page.scss'],
})
export class CtareaPage implements OnInit {

  public newTarea : {nombre : string, descripcion : string} = {nombre : "", descripcion : ""};

  constructor(
    private tareasService : TareasService
  ) { }

  ngOnInit() {
  }
  addTarea(){
    this.tareasService.createTarea(this.newTarea).subscribe();
    this.newTarea = {nombre : "", descripcion : ""};
  }

}
