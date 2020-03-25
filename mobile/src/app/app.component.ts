import { Component, enableProdMode } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";

import menu from "./menu";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public logged : boolean = false;
  public appPages = menu;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth : AuthService,
    private router : Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.logged = this.auth.loggedIn();
  }
  logout(){
    console.log("holaa");
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  closeApp(){
    // console.log("cerrando aplicacion");
    // this.platform.exitApp();
  }

}
