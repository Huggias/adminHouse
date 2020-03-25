import { Component, OnInit } from '@angular/core';
import { ComidasService } from "../../../../services/comidas.service";
import { Router } from "@angular/router";
import { LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-dmenu',
  templateUrl: './dmenu.page.html',
  styleUrls: ['./dmenu.page.scss'],
})
export class DmenuPage implements OnInit {
  public listaMenu;
  public finish:boolean=false;
  private loading:any;
  public check = false;
  private allIngredientes;
  constructor(
    private service : ComidasService,
    private router : Router,
    public loadingController: LoadingController,
    public actionSheetController: ActionSheetController,
    private alertController: AlertController,
  ) { }
  public async openMenu(idMenu){
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
       {
        text: 'Editar menu',
        icon: 'settings',
        handler: () => {
          this.router.navigate(["/menudetail/"+idMenu]);
        }
      }, {
        text: 'Eliminar',
        icon: 'trash',
        handler: async () => {
          const alert = await this.alertController.create({
            header: 'Borrar menu',
            buttons: [
              {
                text: 'Cancelar',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                  console.log('Borrar compra cancelada');
                }
              }, {
                text: 'Borrar',
                handler: () => {
                  this.presentLoading();
                  this.service.deleteMenu(idMenu).subscribe(
                    res => {
                      this.loading.dismiss();
                      this.refresh();
                    }
                  )
                }
              }
            ]
          });
          await alert.present();
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
    // this.router.navigate(["/menudetail/"+idMenu]);
  }
  public obtenerAllMenu(){
    // this.check = false;
    this.presentLoading();
    this.service.menusConIngredientes().subscribe(
      res => {
        this.listaMenu = res;
        console.log(this.listaMenu);
        this.loading.dismiss();
        this.check = true;
      }
    )
  }
  private async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await this.loading.present();
  }
  public refresh(){
    this.obtenerAllMenu();
  }
  ngOnInit() {
    this.obtenerAllMenu();
  }

}
