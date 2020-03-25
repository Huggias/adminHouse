import { Component, OnInit, ElementRef } from '@angular/core';
import { ComidasService } from "../../../../services/comidas.service";
import { Router } from "@angular/router";
import { ActionSheetController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-dcomidas',
  templateUrl: './dcomidas.page.html',
  styleUrls: ['./dcomidas.page.scss'],
})
export class DcomidasPage implements OnInit {
  items = [
      {
        "dia" : "Lunes",
        "mediodia" : "",
        "noche" : "",
        "preparacionD" : "",
        "verificacionD" : "",
        "cocinaD" : "",
        "preparacionN" : "",
        "verificacionN" : "",
        "cocinaN" : ""
      },
      {
        "dia" : "Martes",
        "mediodia" : "",
        "noche" : "",
        "preparacionD" : "",
        "verificacionD" : "",
        "cocinaD" : "",
        "preparacionN" : "",
        "verificacionN" : "",
        "cocinaN" : ""
      },
      {
        "dia" : "Miercoles",
        "mediodia" : "",
        "noche" : "",
        "preparacionD" : "",
        "verificacionD" : "",
        "cocinaD" : "",
        "preparacionN" : "",
        "verificacionN" : "",
        "cocinaN" : ""
      },
      {
        "dia" : "Jueves",
        "mediodia" : "",
        "noche" : "",
        "preparacionD" : "",
        "verificacionD" : "",
        "cocinaD" : "",
        "preparacionN" : "",
        "verificacionN" : "",
        "cocinaN" : ""
      },
      {
        "dia" : "Viernes",
        "mediodia" : "",
        "noche" : "",
        "preparacionD" : "",
        "verificacionD" : "",
        "cocinaD" : "",
        "preparacionN" : "",
        "verificacionN" : "",
        "cocinaN" : ""
      },
      {
        "dia" : "Sabado",
        "mediodia" : "",
        "noche" : "",
        "preparacionD" : "",
        "verificacionD" : "",
        "cocinaD" : "",
        "preparacionN" : "",
        "verificacionN" : "",
        "cocinaN" : ""
      },
      {
        "dia" : "Domingo",
        "mediodia" : "",
        "noche" : "",
        "preparacionD" : "",
        "verificacionD" : "",
        "cocinaD" : "",
        "preparacionN" : "",
        "verificacionN" : "",
        "cocinaN" : ""
      }

    ]
  menuDias;
  public check = false;
  constructor(
    private service : ComidasService,
    private router : Router,
    public actionSheetController: ActionSheetController,
    private elementRef : ElementRef,
    private loadingController : LoadingController
  ) { }
  async obtenerDatos(){
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    loading.present();
    this.service.getAllMenuDia().subscribe(
      res => {
        this.menuDias = res;
        console.log(this.menuDias)
        this.setearDatos();
        loading.dismiss();
        this.check = true;
      }
    )
  }
  setearDatos(){
    this.items.forEach( item => {
      var ok = false;
      this.menuDias.forEach( elem => {
        if (item.dia == elem.dia) {
          if (elem.horario == "Mediodia") {
            item.mediodia = elem.nombre;
            item.cocinaD = elem.cocina;
            item.verificacionD = elem.verificacion;
            item.preparacionD = elem.preparacion;
          }else{
            item.noche = elem.nombre;
            item.cocinaN = elem.cocina;
            item.verificacionN = elem.verificacion;
            item.preparacionN = elem.preparacion;
          }
        }
      })
    })
    // console.log(this.items);
  }
  public async openEditDia(dia){
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
       {
        text: 'Editar mediodia',
        icon: 'sunny',
        handler: () => {
          console.log('Share clicked');
          // this.elementRef.nativeElement.remove();
          this.router.navigate(['editDia/mediodia/'+dia]);
        }
      }, {
        text: 'Editar noche',
        icon: 'moon',
        handler: () => {
          console.log('Play clicked');
          this.router.navigate(['editDia/noche/'+dia]);
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
    });
    await actionSheet.present();
  }
  ngOnInit() {
    console.log("contruyendo?");
    this.refresh();
  }
  refresh(){
    this.check = false;
    this.obtenerDatos();
  }
  // destroy() {
  //   this.elementRef.nativeElement.remove();
  // }

}
