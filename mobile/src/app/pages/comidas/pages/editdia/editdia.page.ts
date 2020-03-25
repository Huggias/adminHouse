import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-editdia',
  templateUrl: './editdia.page.html',
  styleUrls: ['./editdia.page.scss'],
})
export class EditdiaPage implements OnInit {
  
  public dia;

  constructor(
    private router : Router,
    private route : ActivatedRoute
  ) { }
  ngOnInit() {
    this.dia = this.route.snapshot.paramMap.get('idMenu');
    // this.router.navigate(['editdia/mediodia/lunes'])
  }

}
