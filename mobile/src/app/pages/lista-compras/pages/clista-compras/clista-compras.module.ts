import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClistaComprasPageRoutingModule } from './clista-compras-routing.module';

import { ClistaComprasPage } from './clista-compras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClistaComprasPageRoutingModule
  ],
  declarations: [ClistaComprasPage]
})
export class ClistaComprasPageModule {}
