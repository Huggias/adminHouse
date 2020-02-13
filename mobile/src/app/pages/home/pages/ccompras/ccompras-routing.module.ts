import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CcomprasPage } from './ccompras.page';

const routes: Routes = [
  {
    path: '',
    component: CcomprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CcomprasPageRoutingModule {}
