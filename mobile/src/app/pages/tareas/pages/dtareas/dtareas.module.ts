import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DtareasPageRoutingModule } from './dtareas-routing.module';

import { DtareasPage } from './dtareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DtareasPageRoutingModule
  ],
  declarations: [DtareasPage]
})
export class DtareasPageModule {}
