import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ComidasService } from "../../../../services/comidas.service";
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import menu from 'src/app/menu';
@Component({
  selector: 'app-menudetail',
  templateUrl: './menudetail.page.html',
  styleUrls: ['./menudetail.page.scss'],
})
export class MenudetailPage implements OnInit {
  public menu;
  public idMenu;
  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private service : ComidasService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) { }
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
  public async obtenerDatos(){
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    loading.present();
    this.idMenu = this.route.snapshot.paramMap.get('idMenu')

    this.service.menuConIngredientes(this.idMenu).subscribe(
      res => {
        console.log(res);
        this.menu = res;
        loading.dismiss();
      }
    )
  }
  refresh(){
    this.obtenerDatos();
  }
  ngOnInit() {
    this.obtenerDatos();
  }
  public back(){
    this.router.navigate(['/comidas/dmenu']);
  }
  public async editIngrediente(ingrediente){
    const alert = await this.alertController.create({
      header: ingrediente.nombre,
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre : '+ingrediente.nombre
        },
        {
          name: 'cantidad',
          placeholder: 'Cantidad : '+ingrediente.cantidad
        },
        {
          name: 'cuantificador',
          placeholder: 'Cuantificador : '+ingrediente.cuantificador
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
        },
        {
          text : "Borrar",
          role : "delete",
          handler : async () => {
            console.log("borrando ingrediente");
            const loading = await this.loadingController.create({
              message: 'Cargando...'
            });
            loading.present();
            this.service.deleteIngrediente(ingrediente.idIngrediente).subscribe(
              res => {
                loading.dismiss();
                this.obtenerDatos();
                this.presentToast();
              }
            )
          }
        }, 
        {
          text: 'Guardar',
          handler: async (data) => {
            if (data.nombre == "") {
              data.nombre = ingrediente.nombre;
            }
            if (data.cantidad == "") {
              data.cantidad = ingrediente.cantidad;
            }
            if (data.cuantificador == "") {
              data.cuantificador = ingrediente.cuantificador;
            }
            console.log(data);
            const loading = await this.loadingController.create({
              message: 'Cargando...'
            });
            loading.present();
            const http = this.service.updateIngrediente(ingrediente.idIngrediente, data)
            http.subscribe(
              res =>{
                this.obtenerDatos();
                loading.dismiss();
                this.presentToast();
              }
            )
          }
        }
      ]
    });

    await alert.present();
  }
  public async editImg(){
    const alert = await this.alertController.create({
      header: "Imagen",
      inputs: [
        {
          name: 'img',
          placeholder : this.menu.img
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
        },
        {
          text: 'Guardar',
          handler: async (data) => {
            console.log(data);
            if (data.img != "") {
              const loading = await this.loadingController.create({
                message: 'Cargando...'
              });
              loading.present();
              const http = this.service.updateImg(data.img, this.idMenu)
              http.subscribe(
                res =>{
                  this.obtenerDatos();
                  loading.dismiss();
                  this.presentToast();
                }
              )
            }else{
              this.presentToast("No se ingreso un link");
            }
          }
        }
      ]
    });

    await alert.present();
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
        }, 
        {
          text: 'Guardar',
          handler: async (data) => {
            console.log(data);
            if (data.nombre == "" || data.cuantificador == "" || !Number.isInteger(parseInt(data.cantidad))) {
              this.presentToast('Se cargaron mal los datos');
            }else{
              const loading = await this.loadingController.create({
                message: 'Cargando...'
              });
              loading.present();
              data.idMenu = this.idMenu;
              const http = this.service.createIngrediente(data)
              http.subscribe(
                res =>{
                  this.obtenerDatos();
                  loading.dismiss();
                  this.presentToast();
                }
              )
            }
          }
        }
      ]
    });
    await alert.present();

  }

}
