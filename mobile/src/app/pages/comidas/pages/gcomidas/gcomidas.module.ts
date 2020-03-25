import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GcomidasPageRoutingModule } from './gcomidas-routing.module';

import { GcomidasPage } from './gcomidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GcomidasPageRoutingModule
  ],
  declarations: [GcomidasPage]
})
export class GcomidasPageModule {}
