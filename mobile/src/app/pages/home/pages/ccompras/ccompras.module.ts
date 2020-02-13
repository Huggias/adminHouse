import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CcomprasPageRoutingModule } from './ccompras-routing.module';

import { CcomprasPage } from './ccompras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CcomprasPageRoutingModule
  ],
  declarations: [CcomprasPage]
})
export class CcomprasPageModule {}
