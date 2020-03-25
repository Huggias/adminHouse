import { Component, OnInit } from '@angular/core';
import { TareasService } from "../../../../services/tareas.service";
import { Socket } from 'ngx-socket-io';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

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
    private alertController: AlertController,
    public loadingController: LoadingController,
    public toastController: ToastController

  ) { }

  ngOnInit() {
    this.refresh();
  }
  async presentToast(mess?) {
    var message = 'Se reasignaron las tareas';
    var color = "success";
    if (mess != undefined) {
      message = mess;
      color = "danger";
    }
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color : color
    });
    toast.present();
  }
  async refresh(){
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    loading.present();
    this.tareasService.getTareas().subscribe(
      res => {
        this.tareas = res;
        loading.dismiss();

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
            handler: async () => {
              const loading = await this.loadingController.create({
                message: 'Cargando...'
              });
              loading.present();
              this.tareasService.resetTareas().subscribe(
                res => {
                  console.log(res);
                  loading.dismiss();
                  this.presentToast();
                }
              );
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
        handler: async () => {
          const loading = await this.loadingController.create({
            message: 'Cargando...'
          });
          loading.present();
          this.tareasService.borrarTarea(idTarea).subscribe(
            res =>{
              loading.dismiss();
              this.refresh();
            }
          );
        }
      }
    ]
});
await alert.present();
}

}
