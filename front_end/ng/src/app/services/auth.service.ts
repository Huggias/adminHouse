import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { iUser } from '../models/user.model';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "http://localhost:3000";

  constructor(
    private http : HttpClient,
    private router : Router
  ) { 

   }

  public signUp(user : iUser){
    // return this.http.get(this.URL + "/");
    return this.http.post<any>(this.URL + "/log/signUp", user);
  }

  public signin(user : iUser){
    return this.http.post<any>(this.URL + "/log/logIn", user);
  }

  public loggedIn():boolean{
    return !!localStorage.getItem('token');
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}