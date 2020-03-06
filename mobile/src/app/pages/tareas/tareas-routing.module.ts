import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareasPage } from './tareas.page';

const routes: Routes = [
  {
    path: '',
    component: TareasPage,
    children : [
      {
        path : '',
        loadChildren: () => import('./pages/gtareas/gtareas.module').then( m => m.GtareasPageModule)
      },
      {
        path : 'gtareas',
        loadChildren: () => import('./pages/gtareas/gtareas.module').then( m => m.GtareasPageModule)
      },
      {
        path : 'dtareas',
        loadChildren: () => import('./pages/dtareas/dtareas.module').then( m => m.DtareasPageModule)
      },
      {
        path : 'ctarea',
        loadChildren: () => import('./pages/ctarea/ctarea.module').then( m => m.CtareaPageModule)
      }
    ]
  },
  {
    path: 'ctarea',
    loadChildren: () => import('./pages/ctarea/ctarea.module').then( m => m.CtareaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareasPageRoutingModule {}
