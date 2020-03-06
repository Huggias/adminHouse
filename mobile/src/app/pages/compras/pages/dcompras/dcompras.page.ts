import { Component, OnInit } from '@angular/core';
import { ComprasService } from "../../../../services/compras.service";
import { Socket } from 'ngx-socket-io';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { Observable } from 'rxjs';
@Component({
  selector: 'app-dcompras',
  templateUrl: './dcompras.page.html',
  styleUrls: ['./dcompras.page.scss'],
})
@Injectable()
export class DcomprasPage implements OnInit {
    
    // private compras = this.socket.on('modCompras', (data) => { 
    //   this.items = data; 
    // });

    public items: any;


    constructor(
      private comprasService : ComprasService,
      private socket : Socket,
      private alertController: AlertController
    ) {
      
    }

    ngOnInit() {
      this.comprasService.emmitModCompras();
      this.getMessage();
      // console.log("por sokets 2");
      // console.log(this.items);
      this.comprasService.getCompras().subscribe(
        res => { this.items = res; console.log("por http"); console.log(this.items) },
        err => console.log(err)
      )
    }

    refresh(){
      this.comprasService.getCompras().subscribe(
        res => { this.items = res; },
        err => console.log(err)
      )
    }

    getMessage() {
      return this.socket
          .fromEvent("modCompras")
          .subscribe( 
              res => { 
                console.log(res) 
                this.items = res;
              },
              err => console.log(err)
            )
          
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

    async resetCompras(){
        const alert = await this.alertController.create({
            header: 'Se borraran todas las compras',
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
                  this.comprasService.resetCompras();
                }
              }
            ]
      });
      await alert.present();
    }

  }
