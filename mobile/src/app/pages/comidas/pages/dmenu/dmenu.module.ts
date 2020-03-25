import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DmenuPageRoutingModule } from './dmenu-routing.module';

import { DmenuPage } from './dmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DmenuPageRoutingModule
  ],
  declarations: [DmenuPage]
})
export class DmenuPageModule {}
