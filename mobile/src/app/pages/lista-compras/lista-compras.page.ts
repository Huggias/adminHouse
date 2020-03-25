import { Component, OnInit } from '@angular/core';
import menu from "../../menu";
import { setActive } from "../../setMenuActive";
import usr from "../../../user";


@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.page.html',
  styleUrls: ['./lista-compras.page.scss'],
})
export class ListaComprasPage implements OnInit {

  constructor() { }

  ngOnInit() {
    if (usr[0].username == "") {
      usr[0].username = localStorage.getItem("username");
    }
    setActive("Lista de compras");
  }

}
