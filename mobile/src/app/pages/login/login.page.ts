import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import usr from "../../../user";
// import io from 'socket.io-client';
// import { URL_SERVER } from "../../../URL_SERVER";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  socket : any;
  username : string;
  constructor(
    private auth : AuthService,
    private router : Router,
    public loadingController: LoadingController,
    private menu: MenuController,
    public toastController: ToastController
  ) { }
  async presentToast(mess?) {
    var message = 'Usuario correcto!';
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
  ngOnInit() {
    this.menu.enable(false);
    if (this.auth.loggedIn()) {
      usr[0].username = localStorage.getItem("username");
      console.log("desde login auto");
      console.log(usr);
      this.presentToast();
      this.menu.enable(true);
      this.router.navigate(['/home']);
    }
    // this.socket = io(URL_SERVER);
  }
  public async login(form){
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    loading.present();
    this.auth.signin(form.value).subscribe(
      res => {
        console.log("logeado!!!");
        console.log(res);
        this.presentToast();
        this.menu.enable(true);
        loading.dismiss();
        localStorage.setItem('token', res[0].token);
        usr[0].username = res[1].username;
        console.log("usr");
        console.log(usr);
        localStorage.setItem('username', res[1].username);
        this.router.navigate(['/home']);
      },
      err => {
        loading.dismiss();
        this.presentToast(err.error);
      }
    )
  }

}
