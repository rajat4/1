import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-robo-advisory1',
  templateUrl: './robo-advisory1.page.html',
  styleUrls: ['./robo-advisory1.page.scss'],
})
export class RoboAdvisory1Page implements OnInit {
  name: string;
  rndNum: JSON;
  constructor(private navController: NavController) { }
  
  ngOnInit() {
  }
  async getFormData(name: string){
    this.navController.navigateForward('/robo-advisory2')
    await console.log("Submit Clicked");
    this.name = name;
    console.log("name");
  }
  
}
