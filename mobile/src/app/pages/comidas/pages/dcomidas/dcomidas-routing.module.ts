import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DcomidasPage } from './dcomidas.page';

const routes: Routes = [
  {
    path: '',
    component: DcomidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DcomidasPageRoutingModule {}
