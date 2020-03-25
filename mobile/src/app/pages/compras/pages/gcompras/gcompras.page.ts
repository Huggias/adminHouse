import { Component, OnInit } from '@angular/core';
import { ComprasService } from "../../../../services/compras.service";
import { Socket } from 'ngx-socket-io';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-gcompras',
  templateUrl: './gcompras.page.html',
  styleUrls: ['./gcompras.page.scss'],
})
export class GcomprasPage implements OnInit {


  // private actComp = this.socket.on('modCompras', (data) => { this.compras = data; this.actualizacrCompras() });
  loading:any;
  compras : any;
  costoTotal : number = 0;
  usuarios : {gasto:number, dar: number, recibir: number, name: string}[] = [
    {gasto : 0, dar: 0, recibir : 0, name:"Thomy"},
    {gasto : 0, dar: 0, recibir : 0, name:"Sofi"},
    {gasto : 0, dar: 0, recibir : 0, name:"Braian"}
  ];
  constructor(
    private compraService : ComprasService,
    private socket : Socket,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.refresh();
    // console.log("se creo el componente gCompras");
    // this.compraService.getCompras().subscribe(
    //   res => {
    //     this.compras = res;
    //     this.actualizacrCompras();
    //   },
    //   err => console.log(err)
    // )
    // this.getMessage();

  }
  async refresh(){
    this.loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    this.loading.present();
    this.compraService.getCompras().subscribe(
      res => {
        this.compras = res;
        this.actualizacrCompras();
        this.loading.dismiss();
      },
      err => console.log(err)
    )
  }

  getMessage() {
    return this.socket
        .fromEvent("modCompras")
        .subscribe( 
            res => { 
              console.log(res) 
              this.compras = res;
              this.actualizacrCompras()
            },
            err => console.log(err)
          )
  }

  actualizacrCompras(){
    this.usuarios = [
      {gasto : 0, dar: 0, recibir : 0, name:"Thomy"},
      {gasto : 0, dar: 0, recibir : 0, name:"Sofi"},
      {gasto : 0, dar: 0, recibir : 0, name:"Braian"}
    ];
    this.costoTotal = 0;
    
    this.compras.forEach(compra => {
      this.costoTotal += parseFloat(compra.precio);
      this.usuarios[(compra.idUsuario - 1)].gasto += parseFloat(compra.precio);
      this.usuarios[(compra.idUsuario - 1)].name = compra.username;
    })
    this.usuarios.forEach(usuario =>{
      if (usuario.gasto < (this.costoTotal/3)) {
        usuario.dar = Math.round((this.costoTotal/3) - usuario.gasto);
      }else{
        usuario.recibir = Math.round(usuario.gasto - (this.costoTotal/3));
      }
    })
  }

}
