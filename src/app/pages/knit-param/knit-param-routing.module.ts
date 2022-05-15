import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KnitParamPage } from './knit-param.page';

const routes: Routes = [
  {
    path: '',
    component: KnitParamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KnitParamPageRoutingModule {}
