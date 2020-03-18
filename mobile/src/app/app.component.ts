import { Component, enableProdMode } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from "./services/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public logged : boolean = false;
  public appPages = [
    {
      title: 'Compras',
      url: '/compras/gcompras',
      icon: 'list'
    }
    ,{
      title: 'Tareas de limpieza',
      url: '/tareas/gtareas',
      icon: 'list'
    }
    // ,{
    //   title: 'Lista de compras',
    //   url: '/lista-compras/glista-compras',
    //   icon: 'list'
    // }
    // {
    //   title: 'Home',
    //   url: '/home',
    //   icon: 'home'
    // },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth : AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.logged = this.auth.loggedIn();
    console.log("logeado: ", this.logged);
  }

  closeApp(){
    console.log("cerrando aplicacion");
    this.auth.logout();
    navigator['app'].exitApp();
    // this.platform.exitApp();
  }

}
