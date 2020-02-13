import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DcomprasPageRoutingModule } from './dcompras-routing.module';

import { DcomprasPage } from './dcompras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DcomprasPageRoutingModule
  ],
  declarations: [DcomprasPage]
})
export class DcomprasPageModule {}
