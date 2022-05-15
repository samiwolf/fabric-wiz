import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdCalcPageRoutingModule } from './prod-calc-routing.module';
import {ExploreContainerComponentModule} from '../../explore-container/explore-container.module';
import { ProdCalcPage } from './prod-calc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    ProdCalcPageRoutingModule
  ],
  declarations: [ProdCalcPage]
})
export class ProdCalcPageModule {}
