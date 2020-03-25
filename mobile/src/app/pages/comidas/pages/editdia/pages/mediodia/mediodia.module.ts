import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediodiaPageRoutingModule } from './mediodia-routing.module';

import { MediodiaPage } from './mediodia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediodiaPageRoutingModule
  ],
  declarations: [MediodiaPage]
})
export class MediodiaPageModule {}
