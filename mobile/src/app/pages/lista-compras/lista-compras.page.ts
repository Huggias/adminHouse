import { Component, OnInit } from '@angular/core';
import menu from "../../menu";
import { setActive } from "../../setMenuActive";

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.page.html',
  styleUrls: ['./lista-compras.page.scss'],
})
export class ListaComprasPage implements OnInit {

  constructor() { }

  ngOnInit() {
    setActive("Lista de compras");
  }

}
