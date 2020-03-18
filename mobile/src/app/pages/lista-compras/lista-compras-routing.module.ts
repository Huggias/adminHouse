import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComprasPage } from './lista-compras.page';

const routes: Routes = [
  {
    path: '',
    component: ListaComprasPage,
    children : [
      {
        path: 'glista-compras',
        loadChildren: () => import('./pages/glista-compras/glista-compras.module').then( m => m.GlistaComprasPageModule)
      },
      {
        path: 'clista-compras',
        loadChildren: () => import('./pages/clista-compras/clista-compras.module').then( m => m.ClistaComprasPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaComprasPageRoutingModule {}
