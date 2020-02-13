import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DcomprasPage } from './dcompras.page';

const routes: Routes = [
  {
    path: '',
    component: DcomprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DcomprasPageRoutingModule {}
