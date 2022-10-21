import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrmartesPageRoutingModule } from './qrmartes-routing.module';

import { QrmartesPage } from './qrmartes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrmartesPageRoutingModule
  ],
  declarations: [QrmartesPage]
})
export class QrmartesPageModule {}
