import { Component, OnInit } from '@angular/core';
import { TareasService } from "../../../../services/tareas.service";
import { Socket } from 'ngx-socket-io';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-gtareas',
  templateUrl: './gtareas.page.html',
  styleUrls: ['./gtareas.page.scss'],
})
export class GtareasPage implements OnInit {
  public tareas:any;
  constructor(
    private tareasService : TareasService,
    private socket : Socket,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.refresh();
  }

  async refresh(){
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    loading.present();
    this.tareasService.getMisTareas().subscribe(
      res => {
        // console.log(res)
        this.tareas = res;
        loading.dismiss();
      },
      err => console.log(err)
    )
  }

}
