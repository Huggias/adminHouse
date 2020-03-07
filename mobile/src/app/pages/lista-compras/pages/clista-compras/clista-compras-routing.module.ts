import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClistaComprasPage } from './clista-compras.page';

const routes: Routes = [
  {
    path: '',
    component: ClistaComprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClistaComprasPageRoutingModule {}
