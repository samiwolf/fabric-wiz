import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdCalcPageRoutingModule } from './prod-calc-routing.module';
import { ProdCalcPage } from './prod-calc.page';
import {PolyFleeceCalcComponent} from './poly-fleece-calc/poly-fleece-calc.component';
import {NormalRibCalcComponent} from './normal-rib-calc/normal-rib-calc.component';
import {CtnFleeceCalcComponent} from './ctn-fleece-calc/ctn-fleece-calc.component';
import {SjCalcComponent} from './sj-calc/sj-calc.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdCalcPageRoutingModule
  ],
  declarations: [ProdCalcPage, PolyFleeceCalcComponent, NormalRibCalcComponent, CtnFleeceCalcComponent, SjCalcComponent],
  exports:[PolyFleeceCalcComponent, NormalRibCalcComponent, CtnFleeceCalcComponent, SjCalcComponent]
})
export class ProdCalcPageModule {}
