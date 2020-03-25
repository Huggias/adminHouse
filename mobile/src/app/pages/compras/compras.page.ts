import { Component, OnInit } from '@angular/core';
import { setActive } from "../../setMenuActive";
@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {
  constructor(
  ) { }

  ngOnInit() {
    setActive("Compras");
  }

}
