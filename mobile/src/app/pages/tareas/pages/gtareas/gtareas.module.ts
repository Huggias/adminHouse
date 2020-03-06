import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GtareasPageRoutingModule } from './gtareas-routing.module';

import { GtareasPage } from './gtareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GtareasPageRoutingModule
  ],
  declarations: [GtareasPage]
})
export class GtareasPageModule {}
