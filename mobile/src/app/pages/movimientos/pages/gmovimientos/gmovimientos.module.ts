import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GmovimientosPageRoutingModule } from './gmovimientos-routing.module';

import { GmovimientosPage } from './gmovimientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GmovimientosPageRoutingModule
  ],
  declarations: [GmovimientosPage]
})
export class GmovimientosPageModule {}
