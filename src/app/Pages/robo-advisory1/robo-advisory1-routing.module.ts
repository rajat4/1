import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoboAdvisory1Page } from './robo-advisory1.page';

const routes: Routes = [
  {
    path: '',
    component: RoboAdvisory1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoboAdvisory1PageRoutingModule {}
