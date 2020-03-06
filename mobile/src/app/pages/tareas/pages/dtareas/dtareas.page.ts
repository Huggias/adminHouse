import { Component, OnInit } from '@angular/core';
import { TareasService } from "../../../../services/tareas.service";
import { Socket } from 'ngx-socket-io';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-dtareas',
  templateUrl: './dtareas.page.html',
  styleUrls: ['./dtareas.page.scss'],
})
export class DtareasPage implements OnInit {
  public tareas:any;
  constructor(
    private tareasService : TareasService,
    private socket : Socket,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.tareasService.getTareas().subscribe(
      res => {
        console.log(res)
        this.tareas = res;
      },
      err => console.log(err)
    )
  }

  refresh(){
    this.tareasService.getTareas().subscribe(
      res => {
        console.log(res)
        this.tareas = res;
      },
      err => console.log(err)
    )
  }

  async resetTareas(){
    const alert = await this.alertController.create({
        header: 'Se reasignaran todas las tareas',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Borrar compra cancelada');
            }
          }, {
            text: 'Aceptar',
            handler: () => {
              this.tareasService.resetTareas().subscribe();
            }
          }
        ]
  });
  await alert.present();
}

async borrarTarea(idTarea){
  console.log(idTarea);
  const alert = await this.alertController.create({
    header: 'Se borrara la tarea',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Borrar compra cancelada');
        }
      }, {
        text: 'Borrar',
        handler: () => {
          this.tareasService.borrarTarea(idTarea).subscribe();
        }
      }
    ]
});
await alert.present();
}

}
