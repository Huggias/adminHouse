import { Component, OnInit } from '@angular/core';
import { setActive } from '../../setMenuActive'
import { from } from 'rxjs';
import usr from "../../../user";
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {

  constructor() { }

  ngOnInit() {
    if (usr[0].username == "") {
        usr[0].username = localStorage.getItem("username");
      }
    setActive("Tareas de limpieza");
  }

}
