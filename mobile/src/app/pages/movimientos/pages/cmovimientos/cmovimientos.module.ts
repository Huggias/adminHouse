import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CmovimientosPageRoutingModule } from './cmovimientos-routing.module';

import { CmovimientosPage } from './cmovimientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CmovimientosPageRoutingModule
  ],
  declarations: [CmovimientosPage]
})
export class CmovimientosPageModule {}
