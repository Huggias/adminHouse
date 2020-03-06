import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CtareaPage } from './ctarea.page';

const routes: Routes = [
  {
    path: '',
    component: CtareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CtareaPageRoutingModule {}
