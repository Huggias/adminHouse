import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprasPage } from './compras.page';

const routes: Routes = [
  {
    path: '',
    component: ComprasPage,
    children : [
      {
        path : 'gcompras',
        loadChildren: () => import('./pages/gcompras/gcompras.module').then( m => m.GcomprasPageModule)
      },
      {
        path : 'dcompras',
        loadChildren: () => import('./pages/dcompras/dcompras.module').then( m => m.DcomprasPageModule)
      },
      {
        path : 'ccompras',
        loadChildren: () => import('./pages/ccompras/ccompras.module').then( m => m.CcomprasPageModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprasPageRoutingModule {}
