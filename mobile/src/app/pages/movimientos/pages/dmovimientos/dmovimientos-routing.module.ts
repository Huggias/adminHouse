import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DmovimientosPage } from './dmovimientos.page';

const routes: Routes = [
  {
    path: '',
    component: DmovimientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DmovimientosPageRoutingModule {}
