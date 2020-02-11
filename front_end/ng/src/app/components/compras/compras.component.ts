import { Component, OnInit } from '@angular/core';
import { ComprasService } from "../../services/compras.service";
import { iCompra } from 'src/app/models/compra.model';
// import { settings } from 'cluster';


@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  private usuarios = [
    {
      total: 0,
      dar: 0,
      recibir: 0,
      porcentaje: 0
    },
    {
      total: 0,
      dar: 0,
      recibir: 0,
      porcentaje: 0
    },
    {
      total: 0,
      dar: 0,
      recibir: 0,
      porcentaje: 0
    }
  ]
  compras : any[];
  valorTotal: number = 0;
  usuarioMax;

  nuevaCompra = {
    precio : "",
    descripcion : ""
  }

  constructor(
    private compServ : ComprasService
  ) { }

  ngOnInit() {
    this.compServ.getCompras().subscribe(
      res => {
        this.settings(res);
      },
      err => console.log(err)
    )
  }
  agregarCompra(){
    // console.log(this.nuevaCompra);
    if (this.nuevaCompra.precio == "") {
      alert("cargar un precio");
      return false;
    }
    this.compServ.createCompra(this.nuevaCompra).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    this.nuevaCompra.precio = "";
    this.nuevaCompra.descripcion = "";
  }
  settings(res){
    // console.log(res);
    var valorMax = -1;
    this.compras = res;

    this.compras.forEach(compra => {
      this.usuarios[(compra.idUsuario - 1)].total += parseFloat(compra.precio);
      this.valorTotal += parseFloat(compra.precio);
    });

    
    this.usuarios.forEach(usuario =>{
      if (usuario.total < (this.valorTotal/3)) {
        usuario.dar = Math.round((this.valorTotal/3) - usuario.total);
      }else{
        usuario.recibir = Math.round(usuario.total - (this.valorTotal/3));
      }
      usuario.porcentaje = usuario.total * 100 / this.valorTotal;
    })

    // console.log(this.usuarios);

  }

}
