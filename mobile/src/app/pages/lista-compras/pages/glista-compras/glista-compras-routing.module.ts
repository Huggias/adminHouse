import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlistaComprasPage } from './glista-compras.page';

const routes: Routes = [
  {
    path: '',
    component: GlistaComprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlistaComprasPageRoutingModule {}
