import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoboAdvisory2Page } from './robo-advisory2.page';

const routes: Routes = [
  {
    path: '',
    component: RoboAdvisory2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoboAdvisory2PageRoutingModule {}
