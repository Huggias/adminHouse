import { Component, OnInit } from '@angular/core';
import { TareasService } from "../../../../services/tareas.service";
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-ctarea',
  templateUrl: './ctarea.page.html',
  styleUrls: ['./ctarea.page.scss'],
})
export class CtareaPage implements OnInit {

  public newTarea : {nombre : string, descripcion : string} = {nombre : "", descripcion : ""};

  constructor(
    private tareasService : TareasService,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }
  async presentToast(mess?) {
    var message = 'Se guardo la tarea';
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
  addTarea(){
    this.tareasService.createTarea(this.newTarea).subscribe(
      res => {
        this.presentToast();
      }
    );
    this.newTarea = {nombre : "", descripcion : ""};
  }

}
