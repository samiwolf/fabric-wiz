import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KnitParamPageRoutingModule } from './knit-param-routing.module';

import { KnitParamPage } from './knit-param.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KnitParamPageRoutingModule
  ],
  declarations: [KnitParamPage]
})
export class KnitParamPageModule {}
