import { Component, OnInit } from '@angular/core';
import { setActive } from '../../setMenuActive'
  import { from } from 'rxjs';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {

  constructor() { }

  ngOnInit() {
    setActive("Tareas de limpieza");
  }

}
