import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DmenuPage } from './dmenu.page';

const routes: Routes = [
  {
    path: '',
    component: DmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DmenuPageRoutingModule {}
