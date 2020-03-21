import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovimientosPage } from './movimientos.page';

const routes: Routes = [
  {
    path: '',
    component: MovimientosPage,
    children : [
      {
        path : 'gmovimientos',
        loadChildren: () => import('./pages/gmovimientos/gmovimientos.module').then( m => m.GmovimientosPageModule)
      },
      {
        path : 'dmovimientos',
        loadChildren: () => import('./pages/dmovimientos/dmovimientos.module').then( m => m.DmovimientosPageModule)
      },
      {
        path : 'cmovimientos',
        loadChildren: () => import('./pages/cmovimientos/cmovimientos.module').then( m => m.CmovimientosPageModule)
      }
    ]
  },
  {
    path: 'gmovimientos',
    loadChildren: () => import('./pages/gmovimientos/gmovimientos.module').then( m => m.GmovimientosPageModule)
  },
  {
    path: 'dmovimientos',
    loadChildren: () => import('./pages/dmovimientos/dmovimientos.module').then( m => m.DmovimientosPageModule)
  },
  {
    path: 'cmovimientos',
    loadChildren: () => import('./pages/cmovimientos/cmovimientos.module').then( m => m.CmovimientosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovimientosPageRoutingModule {}
