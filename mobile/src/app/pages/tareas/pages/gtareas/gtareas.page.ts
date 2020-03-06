import { Component, OnInit } from '@angular/core';
import { TareasService } from "../../../../services/tareas.service";
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-gtareas',
  templateUrl: './gtareas.page.html',
  styleUrls: ['./gtareas.page.scss'],
})
export class GtareasPage implements OnInit {
  public tareas:any;
  constructor(
    private tareasService : TareasService,
    private socket : Socket
  ) { }

  ngOnInit() {
    this.tareasService.getMisTareas().subscribe(
      res => {
        console.log(res)
        this.tareas = res;
      },
      err => console.log(err)
    )
  }

  refresh(){
    this.tareasService.getMisTareas().subscribe(
      res => {
        console.log(res)
        this.tareas = res;
      },
      err => console.log(err)
    )
  }

}
