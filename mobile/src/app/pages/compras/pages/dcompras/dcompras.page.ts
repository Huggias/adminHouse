import { Component, OnInit } from '@angular/core';
import { ComprasService } from "../../../../services/compras.service";
import { Socket } from 'ngx-socket-io';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-dcompras',
  templateUrl: './dcompras.page.html',
  styleUrls: ['./dcompras.page.scss'],
})
export class DcomprasPage implements OnInit {

    
    private compras = this.socket.on('modCompras', (data) => { this.items = data });;
    public items: any;
    constructor(
      private comprasService : ComprasService,
      private socket : Socket,
      private alertController: AlertController
    ) {
      
    }

    ngOnInit() {
      this.comprasService.emmitModCompras();
    }

    borrarCompra(idCompra){
      this.comprasService.deleteCompra(idCompra);
    }

    async handleButtonClick(idCompra) {
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
              this.borrarCompra(idCompra);
            }
          }
        ]
      });
      await alert.present();
    }
  }
