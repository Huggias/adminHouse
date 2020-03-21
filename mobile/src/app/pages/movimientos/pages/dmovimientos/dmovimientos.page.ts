import { Component, OnInit } from '@angular/core';
import { MovimientosService } from "../../../../services/movimientos.service";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dmovimientos',
  templateUrl: './dmovimientos.page.html',
  styleUrls: ['./dmovimientos.page.scss'],
})
export class DmovimientosPage implements OnInit {
  public movimientos;
  constructor(
    private movimientosService : MovimientosService,
    private alertController: AlertController

  ) { }
  ngOnInit() {
    this.movimientosService.getMovimientos().subscribe(
        res => {
          console.log(res);
          this.movimientos = res;
          this.movimientos.forEach(mov => {
            const date = new Date(mov.fecha);
            mov.fecha = date.toLocaleDateString();
            mov.monto = parseFloat(mov.monto);
          });
        },
        err => console.log(err)
    )
  }

  public refresh(){
    this.movimientosService.getMovimientos().subscribe(
      res => {
        console.log(res);
        this.movimientos = res;
        this.movimientos.forEach(mov => {
          const date = new Date(mov.fecha);
          mov.fecha = date.toLocaleDateString();
          mov.monto = parseFloat(mov.monto);
        });
      },
      err => console.log(err)
    )
  }
  public async deleteMovimiento(idMovimiento){
    const alert = await this.alertController.create({
      header: 'Borrar movimiento',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Borrar movimeinto cancelada');
          }
        }, {
          text: 'Borrar',
          handler: () => {
            const http = this.movimientosService.deleteMovimiento(idMovimiento)
            http.subscribe(
              res=>{
                console.log(res);
                this.refresh();
              },
              err=>console.log(err)
            );
          }
        }
      ]
    });
    await alert.present();
  }

}
