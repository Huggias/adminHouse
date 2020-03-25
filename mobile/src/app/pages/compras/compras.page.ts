import { Component, OnInit } from '@angular/core';
import { setActive } from "../../setMenuActive";
import usr from "../../../user";

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {
  constructor(
  ) { }

  ngOnInit() {
    if (usr[0].username == "") {
      usr[0].username = localStorage.getItem("username");
    }
    setActive("Compras");
  }

}
