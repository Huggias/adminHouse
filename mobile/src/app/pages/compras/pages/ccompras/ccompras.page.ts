import { Component, OnInit } from '@angular/core';
import { ComprasService } from "../../../../services/compras.service";
@Component({
  selector: 'app-ccompras',
  templateUrl: './ccompras.page.html',
  styleUrls: ['./ccompras.page.scss'],
})
export class CcomprasPage implements OnInit {

  private newCompra : {precio : string, descripcion : string} = {precio : "", descripcion : ""};


  constructor(
    private compraService : ComprasService
  ) { }

  ngOnInit() {
  }

  addCompra(){
    this.compraService.createCompra(this.newCompra);
    this.newCompra = {precio : "", descripcion : ""};
  }

}
