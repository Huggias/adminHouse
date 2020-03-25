import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CmenuPage } from './cmenu.page';

const routes: Routes = [
  {
    path: '',
    component: CmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmenuPageRoutingModule {}
