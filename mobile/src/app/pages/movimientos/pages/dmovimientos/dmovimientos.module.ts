import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DmovimientosPageRoutingModule } from './dmovimientos-routing.module';

import { DmovimientosPage } from './dmovimientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DmovimientosPageRoutingModule
  ],
  declarations: [DmovimientosPage]
})
export class DmovimientosPageModule {}
