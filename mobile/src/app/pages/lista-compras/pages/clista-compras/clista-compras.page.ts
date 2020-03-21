import { Component, OnInit } from '@angular/core';
import { ListaComprasService } from "../../../../services/lista-compras.service";
@Component({
  selector: 'app-clista-compras',
  templateUrl: './clista-compras.page.html',
  styleUrls: ['./clista-compras.page.scss'],
})
export class ClistaComprasPage implements OnInit {
  
  public newCompra : {nombre : string, descripcion : string, cantidad:number} = {nombre : "", descripcion : "", cantidad:1};

  constructor(
    private service : ListaComprasService
  ) { }

  ngOnInit() {
  }

  addCompra(){
    this.service.createCompra(this.newCompra);
    this.newCompra = {nombre : "", descripcion : "", cantidad:1};
  }
}
