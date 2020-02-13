import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GcomprasPage } from './gcompras.page';

const routes: Routes = [
  {
    path: '',
    component: GcomprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GcomprasPageRoutingModule {}
