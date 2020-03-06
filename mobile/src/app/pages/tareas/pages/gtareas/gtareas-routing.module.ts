import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GtareasPage } from './gtareas.page';

const routes: Routes = [
  {
    path: '',
    component: GtareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GtareasPageRoutingModule {}
