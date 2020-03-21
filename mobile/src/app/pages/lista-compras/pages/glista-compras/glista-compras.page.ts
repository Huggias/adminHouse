import { Component, OnInit } from '@angular/core';
import { ListaComprasService } from "../../../../services/lista-compras.service";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-glista-compras',
  templateUrl: './glista-compras.page.html',
  styleUrls: ['./glista-compras.page.scss'],
})
export class GlistaComprasPage implements OnInit {
  public lista;
  constructor(
    private service : ListaComprasService,
    private alertController : AlertController
  ){}

  private obtenerListaCompras(){
    this.service.getListaCompras().subscribe(
        res => {this.lista = res; console.log(res)},
        err => console.log(err)
    )
  }
  public async deleteCompra(idCompra){
    const alert = await this.alertController.create({
      header: 'Borrar compra',
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
            this.service.deleteCompra(idCompra);
            this.obtenerListaCompras();
          }
        }
      ]
    });
    await alert.present();
  }
  ngOnInit() {
    this.obtenerListaCompras();
  }

}
