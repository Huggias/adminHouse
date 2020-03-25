import { Component, OnInit } from '@angular/core';
import { ListaComprasService } from "../../../../services/lista-compras.service";
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-glista-compras',
  templateUrl: './glista-compras.page.html',
  styleUrls: ['./glista-compras.page.scss'],
})
export class GlistaComprasPage implements OnInit {
  public lista;
  constructor(
    private service : ListaComprasService,
    private alertController : AlertController,
    public loadingController: LoadingController
  ){}

  public async obtenerListaCompras(){
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    loading.present();
    this.service.getListaCompras().subscribe(
        res => {
          this.lista = res; 
          loading.dismiss();
        },
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
          handler: async () => {
            const loading = await this.loadingController.create({
              message: 'Cargando...'
            });
            loading.present();
            const http = this.service.deleteCompra(idCompra);
            http.subscribe(
              res=>{
                this.obtenerListaCompras();
                loading.dismiss();
              }
            )
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
