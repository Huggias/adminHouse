import { Component, OnInit } from '@angular/core';
import { iUser } from 'src/app/models/user.model';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : iUser={
    username : "",
    password : "",
    email : ""
  }

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
  }
  cancel(){
    this.router.navigate(['/login']);
  }
  signup(){
    this.authService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res.token)
          localStorage.setItem('token', res.token);
          this.router.navigate(['/inicio']);
        },
        err => {
          console.log(err)
        }
      )
  }

}
