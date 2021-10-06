import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-robo-advisory2',
  templateUrl: './robo-advisory2.page.html',
  styleUrls: ['./robo-advisory2.page.scss'],
})
export class RoboAdvisory2Page implements OnInit {
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
