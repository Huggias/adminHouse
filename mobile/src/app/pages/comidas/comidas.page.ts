import { Component, OnInit } from '@angular/core';
import { setActive } from "../../setMenuActive";

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.page.html',
  styleUrls: ['./comidas.page.scss'],
})
export class ComidasPage implements OnInit {

  constructor() { }

  ngOnInit() {
    setActive("Comidas");
  }

}
