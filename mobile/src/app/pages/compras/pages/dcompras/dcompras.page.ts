import { Component, OnInit } from '@angular/core';
import { ComprasService } from "../../../../services/compras.service";
import { Socket } from 'ngx-socket-io';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AuthService } from "../../../../services/auth.service";

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
    public miId;

    constructor(
      private comprasService : ComprasService,
      private socket : Socket,
      private alertController: AlertController,
      public loadingController: LoadingController,
      public toastController : ToastController,
      private auth : AuthService
    ) {
      
    }

    ngOnInit() {
      this.auth.getId().subscribe(
        res =>{
          this.miId = res;
          console.log(this.miId.id)
        }
      )
      this.comprasService.emmitModCompras();
      this.getMessage();
      // console.log("por sokets 2");
      // console.log(this.items);
      this.refresh();
    }

    async refresh(){
      const loading = await this.loadingController.create({
        message: 'Cargando...'
      });
      loading.present();
      this.comprasService.getCompras().subscribe(
        res => { 
          this.items = res;
          loading.dismiss();
        },
        err => console.log(err)
      )
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

    async borrarCompra(idCompra){
      const loading = await this.loadingController.create({
        message: 'Cargando...'
      });
      loading.present();
      this.comprasService.deleteCompra(idCompra).subscribe(
        res => {
            loading.dismiss();
            this.presentToast();
            this.refresh();
        }
      );
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
