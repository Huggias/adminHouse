import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
// import io from 'socket.io-client';
// import { URL_SERVER } from "../../../URL_SERVER";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  socket : any;
  constructor(
    private auth : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
    if (this.auth.loggedIn()) {
      this.router.navigate(['/compras/gcompras']);
    }
    // this.socket = io(URL_SERVER);
  }

  login(form){
    this.auth.signin(form.value).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        console.log("logeado!!!");
        this.router.navigate(['/compras/gcompras']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
