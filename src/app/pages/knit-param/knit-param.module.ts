import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KnitParamPageRoutingModule } from './knit-param-routing.module';

import { KnitParamPage } from './knit-param.page';
import {ExploreContainerComponentModule} from '../../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    KnitParamPageRoutingModule
  ],
  declarations: [KnitParamPage]
})
export class KnitParamPageModule {}
