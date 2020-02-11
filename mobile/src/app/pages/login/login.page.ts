import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private auth : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  login(form){
    this.auth.signin(form.value).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        console.log("logeado!!!");
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
