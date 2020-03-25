import { Component, OnInit } from '@angular/core';
import { MovimientosService } from "../../../../services/movimientos.service";
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-gmovimientos',
  templateUrl: './gmovimientos.page.html',
  styleUrls: ['./gmovimientos.page.scss'],
})
export class GmovimientosPage implements OnInit {
  public movimientos;
  public saldoTotal = 0;
  constructor(
    private movimientosService : MovimientosService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.refresh();
    // this.movimientosService.getUltimosMovimientos().subscribe(
    //     res => {
    //       console.log(res);
    //       this.movimientos = res;
    //       this.movimientos.forEach(mov => {
    //         const date = new Date(mov.fecha);
    //         mov.fecha = date.toLocaleDateString();
    //         mov.monto = parseFloat(mov.monto);
    //       });
    //       this.actualizarSaldo();
    //     },
    //     err => console.log(err)
    // )
  }
  private async actualizarSaldo(){
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    loading.present();
    this.movimientosService.getMovimientos().subscribe(
      (res : any[]) => {
        for (let i = 0; i < res.length; i++) {
          const mov = res[i];
          if (mov.tipo == "Ingreso") {
            this.saldoTotal += parseFloat(mov.monto);
          } else {
            this.saldoTotal -= parseFloat(mov.monto);
          }
        }
        loading.dismiss();
      },
      err => console.log(err)
    )
  }

  public async refresh(){
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    loading.present();
    this.saldoTotal = 0;
    this.actualizarSaldo();
    this.movimientosService.getUltimosMovimientos().subscribe(
      (res:any[]) => {
        // console.log(res);
        this.movimientos = res;
        for (let i = 0; i < this.movimientos.length; i++) {
          const mov = this.movimientos[i];
          const date = new Date(mov.fecha);
          mov.fecha = date.toLocaleDateString();
          mov.monto = parseFloat(mov.monto);
        }
        loading.dismiss();
      },
      err => console.log(err)
    )
  }
}
