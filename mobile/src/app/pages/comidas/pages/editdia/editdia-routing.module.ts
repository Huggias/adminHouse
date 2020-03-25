import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditdiaPage } from './editdia.page';

const routes: Routes = [
  {
    path: '',
    component: EditdiaPage,
    children : [
      {
        path: '',
        redirectTo : 'mediodia',
        pathMatch : "full"
      },
      {
        path: 'mediodia',
        loadChildren: () => import('./pages/mediodia/mediodia.module').then( m => m.MediodiaPageModule)
      },
      {
        path: 'noche',
        loadChildren: () => import('./pages/noche/noche.module').then( m => m.NochePageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditdiaPageRoutingModule {}
