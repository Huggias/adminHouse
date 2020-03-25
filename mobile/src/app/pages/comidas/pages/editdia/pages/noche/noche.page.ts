import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ComidasService } from "../../../../../../services/comidas.service";
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-noche',
  templateUrl: './noche.page.html',
  styleUrls: ['./noche.page.scss'],
})
export class NochePage implements OnInit {
  public menus;
  public usuarios;
  public dia;
  public datos;
  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private service : ComidasService,
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
  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    loading.present();
    this.service.getAllMenu().subscribe(
      res => {
        this.menus = res;
        this.menus.forEach(element => {
          element.idMenu = element.idMenu+"";
        });
        console.log(this.menus)
        loading.dismiss();
      }
    )
    const loading2 = await this.loadingController.create({
      message: 'Cargando...'
    });
    loading.present();
    this.service.getUsers().subscribe(
      res =>{
        this.usuarios = res;
        loading2.dismiss();

      }
    )
    const loading3 = await this.loadingController.create({
      message: 'Cargando...'
    });
    loading.present();
    this.dia = this.route.snapshot.paramMap.get('dia');
    this.service.getMenuDia(this.dia, "noche").subscribe(
      res => {
        this.datos = res[0];
        this.datos.idMenu = this.datos.idMenu+"";
        this.datos.idCocina = this.datos.idCocina+"";
        this.datos.idPreparacion = this.datos.idPreparacion+"";
        this.datos.idVerificacion = this.datos.idVerificacion+"";
        console.log(this.datos)
        loading3.dismiss();

      }
    )
    console.log(this.dia);
  }
  public test(idMenu){
    console.log(idMenu);
  }
  public back(){
    this.router.navigate(['/comidas/dcomidas']);
  }
  async saveDia(form){
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    loading.present();
    form.value.dia = this.dia;
    form.value.horario = "noche";
    console.log(form.value);
    this.service.setAllMenuDia(form.value).subscribe(
      res => {
        console.log(res);  
        loading.dismiss();
        this.presentToast();
        this.back();
      },
      err => {
        console.log(err)
      }
    )
  }

}
