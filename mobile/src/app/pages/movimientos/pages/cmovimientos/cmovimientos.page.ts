import { Component, OnInit } from '@angular/core';
import { MovimientosService } from "../../../../services/movimientos.service";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cmovimientos',
  templateUrl: './cmovimientos.page.html',
  styleUrls: ['./cmovimientos.page.scss'],
})
export class CmovimientosPage implements OnInit {
  newMovimiento = {monto : "", descripcion : "", tipo:"Egreso"};
  constructor(
    private movimientosService : MovimientosService,
    public toastController : ToastController
  ) { }

  ngOnInit() {
  }
  async presentToast(mess?) {
    var message = 'Se guardaron los datos';
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
  addMovimiento(){
    // console.log(this.newMovimiento);
    this.movimientosService.createMovimiento(this.newMovimiento).subscribe(
      res => {
        this.presentToast();
      }
    );
    this.newMovimiento = {monto : "", descripcion : "", tipo:"Egreso"};
  }

}
