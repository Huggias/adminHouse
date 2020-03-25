import { Component, OnInit } from '@angular/core';
import { ComprasService } from "../../../../services/compras.service";
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ccompras',
  templateUrl: './ccompras.page.html',
  styleUrls: ['./ccompras.page.scss'],
})
export class CcomprasPage implements OnInit {

  public newCompra : {precio : string, descripcion : string} = {precio : "", descripcion : ""};


  constructor(
    private compraService : ComprasService,
    public alertController: AlertController,
    public toastController: ToastController

  ) { }

  ngOnInit() {
  }
  async presentToast(mess?) {
    var message = 'Se guardo la compra';
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
  addCompra(){
    this.compraService.createCompra(this.newCompra).subscribe(
      res => {
        this.presentToast();

      }
    );
    this.newCompra = {precio : "", descripcion : ""};
  }

}
