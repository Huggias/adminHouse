import { Component, OnInit } from '@angular/core';
import { MovimientosService } from "../../../../services/movimientos.service";
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-dmovimientos',
  templateUrl: './dmovimientos.page.html',
  styleUrls: ['./dmovimientos.page.scss'],
})
export class DmovimientosPage implements OnInit {
  public movimientos;
  public movimientosVisibles;
  public lista = document.getElementById("listaMov");
  private corte = 0;
  infiniteScroll: IonInfiniteScroll;
  public check = false;

  constructor(
    private movimientosService : MovimientosService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) { }
  ngOnInit() {
    this.refresh();
  }
  public async refresh(){
    this.check = false;
    this.corte=0;
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    loading.present();
    this.movimientosService.getMovimientos().subscribe(
      res => {
        this.movimientos = res;
        this.movimientos.forEach(mov => {
          const date = new Date(mov.fecha);
          mov.fecha = date.toLocaleDateString();
          mov.monto = parseFloat(mov.monto);
        });
        this.movimientosVisibles = this.movimientos.slice(0,this.corte);
        this.check = true;
        loading.dismiss();
        this.loadData(null);
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
          handler: async () => {
            const loading = await this.loadingController.create({
              message: 'Cargando...'
            });
            loading.present();
            const http = this.movimientosService.deleteMovimiento(idMovimiento)
            http.subscribe(
              res=>{
                console.log(res);
                loading.dismiss();
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


  loadData(event) {
    setTimeout(() => {
      if (event != null) {
        event.target.complete();
      }
      if ((this.movimientosVisibles.length + 10) < this.movimientos.length) {
        this.corte += 10;
        this.movimientosVisibles = this.movimientos.slice(0,this.corte);
      }else{  
        this.movimientosVisibles = this.movimientos;
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
