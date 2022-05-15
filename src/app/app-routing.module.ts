import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'knit-param',
    loadChildren: () => import('./pages/knit-param/knit-param.module').then( m => m.KnitParamPageModule)
  },
  {
    path: 'prod-calc',
    loadChildren: () => import('./pages/prod-calc/prod-calc.module').then( m => m.ProdCalcPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
