import { Component, OnInit } from '@angular/core';
import { ComidasService } from "../../../../services/comidas.service";
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cmenu',
  templateUrl: './cmenu.page.html',
  styleUrls: ['./cmenu.page.scss'],
})
export class CmenuPage implements OnInit {
  public menu : {"nombre":string, "descripcion":string, "ingredientes":any[]} = {"nombre":"", "descripcion":"", "ingredientes":[]};
  public ingredientes:any[] = []
  public proxIngrediente = 0;
  constructor(
    private service : ComidasService,
    public alertController: AlertController,
    public toastController: ToastController

  ) { }

  ngOnInit() {
  }

  public addMenu(){
    this.menu.ingredientes = this.ingredientes;
    console.log(this.menu);
    const http = this.service.createMenu(this.menu);
    http.subscribe(
      res => {
        console.log(res);
        this.presentToast();
      }
    )
    this.ingredientes = [];
    this.menu = {"nombre":"", "descripcion":"", "ingredientes":[]};
  }
  async presentToast(mess?) {
    var message = 'Se guardaron los datos';
    var color = "success";
    if (mess != undefined) {
      message = mess;
      color = "danger";
    }
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color : color
    });
    toast.present();
  }
  public deleteIngrediente(id){
    this.ingredientes.splice(id,1);
    for (let i = id; i < this.ingredientes.length; i++) {
      const ingrediente = this.ingredientes[i];
      ingrediente.id = parseInt(ingrediente.id)-1;
      console.log(ingrediente.nombre, " : ", ingrediente.id);
    }
    this.proxIngrediente--;
  }
  public async addIngrediente(){
    const alert = await this.alertController.create({
      header: "Nuevo ingrediente",
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre : '
        },
        // multiline input.
        {
          name: 'cantidad',
          placeholder: 'Cantidad : '
        },
        {
          name: 'cuantificador',
          placeholder: 'Cuantificador : '
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Guardar',
          handler: async (data) => {
            console.log(data);
            if (data.nombre == "" || data.cuantificador == "" || !Number.isInteger(parseInt(data.cantidad))) {
              this.presentToast('Se cargaron mal los datos');
            }else{
              data.id = this.proxIngrediente;
              this.ingredientes.push(data);
              this.proxIngrediente++;
            }
          }
        }
      ]
    });
    await alert.present();
  }

}
