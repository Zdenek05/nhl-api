import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HockeyDetailPageRoutingModule } from './hockey-detail-routing.module';

import { HockeyDetailPage } from './hockey-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HockeyDetailPageRoutingModule
  ],
  declarations: [HockeyDetailPage]
})
export class HockeyDetailPageModule {}
