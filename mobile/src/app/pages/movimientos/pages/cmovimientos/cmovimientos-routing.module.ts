import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CmovimientosPage } from './cmovimientos.page';

const routes: Routes = [
  {
    path: '',
    component: CmovimientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmovimientosPageRoutingModule {}
