import { Component, OnInit } from '@angular/core';
import { setActive } from "../../setMenuActive";
@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {

  constructor() { }

  ngOnInit() {
    setActive("Cuenta");
  }

}
