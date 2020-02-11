import { Component, OnInit } from '@angular/core';
import { iUser } from 'src/app/models/user.model';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar'
import { LoginDialogErrorComponent } from "../login-dialog-error/login-dialog-error.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : iUser = {
    username : "",
    password : "",
    email : ""
  }
  constructor(
    private auth : AuthService,
    private router : Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }
  register(){
    this.router.navigate(['/signup']);
  }
  signin(){
    this.auth.signin(this.user).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/inicio']);
      },
      err => {
        console.log(err);
        this._snackBar.openFromComponent(LoginDialogErrorComponent, {
          duration: 1000, // 1 segundo
        });
      }
    )
  }

}
