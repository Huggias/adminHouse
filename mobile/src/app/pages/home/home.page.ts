import { Component } from '@angular/core';
import menu from "../../menu";
import { Router } from "@angular/router";
import { setActive } from "../../setMenuActive";
import usr from "../../../idUsuario";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  public listItems:any[] = [];
  constructor(
    private router : Router
  ) {}

  ngOnInit(){
    setActive("Home");
    // menu[0].active = true;
    menu.forEach( (elem:any) => {
      if(elem.title != "Home"){
        this.listItems.push(elem);
      }
    })
  }
  public go(url){
    this.router.navigate([url]);
    // console.log(url)
  }

}
