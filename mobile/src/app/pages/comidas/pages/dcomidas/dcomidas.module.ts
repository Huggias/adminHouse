import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DcomidasPageRoutingModule } from './dcomidas-routing.module';

import { DcomidasPage } from './dcomidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DcomidasPageRoutingModule
  ],
  declarations: [DcomidasPage]
})
export class DcomidasPageModule {}
