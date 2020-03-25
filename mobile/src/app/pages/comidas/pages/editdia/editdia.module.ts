import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditdiaPageRoutingModule } from './editdia-routing.module';

import { EditdiaPage } from './editdia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditdiaPageRoutingModule
  ],
  declarations: [EditdiaPage]
})
export class EditdiaPageModule {}
