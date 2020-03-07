import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlistaComprasPageRoutingModule } from './glista-compras-routing.module';

import { GlistaComprasPage } from './glista-compras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlistaComprasPageRoutingModule
  ],
  declarations: [GlistaComprasPage]
})
export class GlistaComprasPageModule {}
