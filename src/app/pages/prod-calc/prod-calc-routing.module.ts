import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdCalcPage } from './prod-calc.page';

const routes: Routes = [
  {
    path: '',
    component: ProdCalcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdCalcPageRoutingModule {}
