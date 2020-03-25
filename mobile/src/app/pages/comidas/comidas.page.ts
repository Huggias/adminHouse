import { Component, OnInit } from '@angular/core';
import { setActive } from "../../setMenuActive";
import usr from "../../../user";

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.page.html',
  styleUrls: ['./comidas.page.scss'],
})
export class ComidasPage implements OnInit {

  constructor() { }

  ngOnInit() {
    if (usr[0].username == "") {
      usr[0].username = localStorage.getItem("username");
    }
    setActive("Comidas");
  }

}
