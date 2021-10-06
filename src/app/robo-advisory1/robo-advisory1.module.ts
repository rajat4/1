import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoboAdvisory1PageRoutingModule } from './robo-advisory1-routing.module';

import { RoboAdvisory1Page } from './robo-advisory1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoboAdvisory1PageRoutingModule
  ],
  declarations: [RoboAdvisory1Page]
})
export class RoboAdvisory1PageModule {}
