import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '/knit-param',
        loadChildren: () => import('../pages/knit-param/knit-param.module').then(m => m.KnitParamPageModule)
      },
      {
        path: '/prod-calc',
        loadChildren: () => import('../pages/prod-calc/prod-calc.module').then(m => m.ProdCalcPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
