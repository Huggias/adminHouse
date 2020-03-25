import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CmenuPageRoutingModule } from './cmenu-routing.module';

import { CmenuPage } from './cmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CmenuPageRoutingModule
  ],
  declarations: [CmenuPage]
})
export class CmenuPageModule {}
