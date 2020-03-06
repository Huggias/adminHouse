import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DtareasPage } from './dtareas.page';

const routes: Routes = [
  {
    path: '',
    component: DtareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DtareasPageRoutingModule {}
