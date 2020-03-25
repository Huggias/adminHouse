import { Component, OnInit } from '@angular/core';
import { ComidasService } from "../../../../services/comidas.service";
import { ThrowStmt } from '@angular/compiler';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-gcomidas',
  templateUrl: './gcomidas.page.html',
  styleUrls: ['./gcomidas.page.scss'],
})
export class GcomidasPage implements OnInit {
  public menu;
  public dia;
  public horario;
  public ingredientes;
  constructor(
    private service : ComidasService,
    public loadingController: LoadingController

  ) { }
  public async refresh(){
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    loading.present();
    var hoy = new Date();
    switch (hoy.getDay()) {
      case 1:
          this.dia = "lunes";
        break;
        case 2:
          this.dia = "martes";
        break;
        case 3:
          this.dia = "miercoles";
        break;
        case 4:
          this.dia = "jueves";
        break;
        case 5:
          this.dia = "viernes";
        break;
        case 6:
          this.dia = "sabado";
        break;
        case 7:
          this.dia = "domingo";
        break;
    }
    if (hoy.getHours() > 17) {
      this.horario = "noche";
    }else{
      this.horario = "mediodia";
    }
    this.service.getOneMenuDia(this.dia, this.horario).subscribe(
      res => {
        this.menu = res;
        loading.dismiss();
      }
    )
  }
  ngOnInit() {
    this.refresh();  
  }

}
