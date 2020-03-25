import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.page.html',
  styleUrls: ['./exit.page.scss'],
})
export class ExitPage implements OnInit {

  constructor(
    private auth : AuthService,
    private menu: MenuController

  ) { }

  ngOnInit() {
    // this.router.navigate(['home']);
    this.delogear();
  }
  delogear(){
    this.menu.enable(false);
    this.auth.logout();
  }

}
