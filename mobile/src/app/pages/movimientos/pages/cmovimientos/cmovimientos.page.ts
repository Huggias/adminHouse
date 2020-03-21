import { Component, OnInit } from '@angular/core';
import { MovimientosService } from "../../../../services/movimientos.service";
@Component({
  selector: 'app-cmovimientos',
  templateUrl: './cmovimientos.page.html',
  styleUrls: ['./cmovimientos.page.scss'],
})
export class CmovimientosPage implements OnInit {
  newMovimiento = {monto : "", descripcion : "", tipo:"Egreso"};
  constructor(
    private movimientosService : MovimientosService
  ) { }

  ngOnInit() {
  }

  addMovimiento(){
    // console.log(this.newMovimiento);
    this.movimientosService.createMovimiento(this.newMovimiento);
    this.newMovimiento = {monto : "", descripcion : "", tipo:"Egreso"};
  }

}
