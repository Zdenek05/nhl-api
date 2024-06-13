import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HockeyDetailPage } from './hockey-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HockeyDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HockeyDetailPageRoutingModule {}
