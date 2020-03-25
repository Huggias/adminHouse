import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComidasPage } from './comidas.page';

const routes: Routes = [
  {
    path: '',
    component: ComidasPage,
    children : [
      {
        path : '',
        redirectTo : 'gcomidas',
        pathMatch : 'full'
      },
      {
        path: 'gcomidas',
        loadChildren: () => import('./pages/gcomidas/gcomidas.module').then( m => m.GcomidasPageModule)
      },
      {
        path: 'dcomidas',
        loadChildren: () => import('./pages/dcomidas/dcomidas.module').then( m => m.DcomidasPageModule)
      },
      {
        path: 'dmenu',
        loadChildren: () => import('./pages/dmenu/dmenu.module').then( m => m.DmenuPageModule)
      },
      {
        path: 'cmenu',
        loadChildren: () => import('./pages/cmenu/cmenu.module').then( m => m.CmenuPageModule)
      }
      ,{
        path: 'menudetail/:idMenu',
        loadChildren: () => import('./pages/menudetail/menudetail.module').then( m => m.MenudetailPageModule)
      },
      {
        path: 'editdia/:dia',
        loadChildren: () => import('./pages/editdia/editdia.module').then( m => m.EditdiaPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComidasPageRoutingModule {}
