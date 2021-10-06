import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-robo-advisory1',
  templateUrl: './robo-advisory1.page.html',
  styleUrls: ['./robo-advisory1.page.scss'],
})
export class RoboAdvisory1Page implements OnInit {
  name: string;
  rndNum: JSON;
  constructor() { }
  
  ngOnInit() {
  }
  async getFormData(name: string){
    await console.log("Submit Clicked");
    this.name = name;
    console.log("name");
  }
  
}
