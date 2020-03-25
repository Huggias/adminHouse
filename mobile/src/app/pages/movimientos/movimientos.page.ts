import { Component, OnInit } from '@angular/core';
import { setActive } from "../../setMenuActive";
import usr from "../../../user";

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {

  constructor() { }

  ngOnInit() {
    if (usr[0].username == "") {
      usr[0].username = localStorage.getItem("username");
    }
    setActive("Cuenta");
  }

}
