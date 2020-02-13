import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GcomprasPageRoutingModule } from './gcompras-routing.module';

import { GcomprasPage } from './gcompras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GcomprasPageRoutingModule
  ],
  declarations: [GcomprasPage]
})
export class GcomprasPageModule {}
