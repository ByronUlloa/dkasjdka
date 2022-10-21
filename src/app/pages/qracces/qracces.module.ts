import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QraccesPageRoutingModule } from './qracces-routing.module';

import { QraccesPage } from './qracces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QraccesPageRoutingModule
  ],
  declarations: [QraccesPage]
})
export class QraccesPageModule {}
