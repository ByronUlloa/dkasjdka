import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QraccesPage } from './qracces.page';

const routes: Routes = [
  {
    path: '',
    component: QraccesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QraccesPageRoutingModule {}
