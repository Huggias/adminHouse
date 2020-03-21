import { Component, OnInit } from '@angular/core';
import { MovimientosService } from "../../../../services/movimientos.service";

@Component({
  selector: 'app-gmovimientos',
  templateUrl: './gmovimientos.page.html',
  styleUrls: ['./gmovimientos.page.scss'],
})
export class GmovimientosPage implements OnInit {
  public movimientos;
  public saldoTotal = 0;
  constructor(
    private movimientosService : MovimientosService
  ) { }

  ngOnInit() {
    this.movimientosService.getUltimosMovimientos().subscribe(
        res => {
          console.log(res);
          this.movimientos = res;
          this.movimientos.forEach(mov => {
            const date = new Date(mov.fecha);
            mov.fecha = date.toLocaleDateString();
            mov.monto = parseFloat(mov.monto);
          });
          this.actualizarSaldo();
        },
        err => console.log(err)
    )
  }
  private actualizarSaldo(){
    this.movimientosService.getMovimientos().subscribe(
      (res : any[]) => {
        res.forEach(mov => {
          if (mov.tipo == "Ingreso") {
            this.saldoTotal += parseFloat(mov.monto);
          } else {
            this.saldoTotal -= parseFloat(mov.monto);
          }
          console.log(this.saldoTotal);
        });
      },
      err => console.log(err)
    )
  }

  public refresh(){
    this.saldoTotal = 0;
    this.actualizarSaldo();
    this.movimientosService.getUltimosMovimientos().subscribe(
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
}
