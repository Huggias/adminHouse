import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GcomidasPage } from './gcomidas.page';

const routes: Routes = [
  {
    path: '',
    component: GcomidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GcomidasPageRoutingModule {}
