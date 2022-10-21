import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrmartesPage } from './qrmartes.page';

const routes: Routes = [
  {
    path: '',
    component: QrmartesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrmartesPageRoutingModule {}
