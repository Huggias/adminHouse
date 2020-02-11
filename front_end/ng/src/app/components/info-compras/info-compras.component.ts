import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-compras',
  templateUrl: './info-compras.component.html',
  styleUrls: ['./info-compras.component.css']
})
export class InfoComprasComponent implements OnInit {

  @Input() public valorTotal : number; 
  @Input() public usuarios; 

  constructor() { }

  ngOnInit() {
    
  }

}
