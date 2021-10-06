import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'robo-advisory1',
    loadChildren: () => import('./Pages/robo-advisory1/robo-advisory1.module').then( m => m.RoboAdvisory1PageModule)
  },
  {
    path: 'robo-advisory2',
    loadChildren: () => import('./Pages/robo-advisory2/robo-advisory2.module').then( m => m.RoboAdvisory2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
