import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoboAdvisory2PageRoutingModule } from './robo-advisory2-routing.module';

import { RoboAdvisory2Page } from './robo-advisory2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoboAdvisory2PageRoutingModule
  ],
  declarations: [RoboAdvisory2Page]
})
export class RoboAdvisory2PageModule {}
