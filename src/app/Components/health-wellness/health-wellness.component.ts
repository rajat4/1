import { Component, OnInit } from '@angular/core';
import { DynamicTempleteService } from 'src/app/Services/dynamic-templete.service';

@Component({
  selector: 'app-health-wellness',
  templateUrl: './health-wellness.component.html',
  styleUrls: ['./health-wellness.component.scss'],
})
export class HealthWellnessComponent implements OnInit {
  mySupper:any;
  HealthAccord:any;

  constructor(private _dynamicData: DynamicTempleteService) { 
    this.GetDynamicData()
  }

  ngOnInit() {}

  GetDynamicData() {

    this._dynamicData.GetDynamicHealthData().subscribe(data => {
      if (data) {
        console.log("Health data"+data)
        // console.log("Accordian data : " + data[0].supperAppLandingPage1[0].wealthWellness[0].desciption)

        this.mySupper = data[0].supperAppLandingPage1;

        this.HealthAccord = this.mySupper[0].Accordian[1];

        // console.log(this.mySupper[0].Accordian.length);

        for(let i = 0; i < this.mySupper.length; i++){
          console.log("My health Landing data " + this.mySupper[i].NumberOfAccordion);

          // this.HealthAccord = this.mySupper[2].Accordian;
          // alert( this.HealthAccord )
          // this.accordID =  this.mySupper[i].Accordian
          
          // console.log(this.newAccord[0].AccordianTitle);

          // for(let j = 0; j < this.mySupper[i].Accordian.length; j++){
          
          //   // console.log("accordian " + this.mySupper[i].Accordian[j].AccordianTitle)
            
          //   this.accordPanel = this.mySupper[i].Accordian[j].AccordianPannel

          //   for(let k = 0; k< this.accordPanel.length; k++){
          //     // console.log("new Panel " + this.accordPanel[k].desciption)
          //     this.mySection = this.accordPanel[k].section
          //     for(let l = 0; l < this.mySection.length; l++){
          //       // console.log("new Section " + this.mySection[l].subTitle)

          //       this.verti = this.mySection[l].verticalCard;
          //       this.hori = this.mySection[l].horizontalCard;
          //       for(let m = 0; m <this.verti.length; m++){
          //         // console.log("myVerti " + this.verti[m].title)
          //       }
          //       for(let n = 0; n <this.hori.length; n++){
          //         console.log("myHori " + this.hori[n].title)
          //         if(this.hori[n].button == ""){
          //           this.btnHide = false;
          //           console.log("hide false")
          //         } else {
          //           this.btnHide = true;
          //           console.log("hide true")
          //         }
          //       }
          //     }
          //   }

          // }
         }
        

        // this.desciption = data[0].supperAppLandingPage1[0].wealthWellness[0].desciption;
        // this.Accordian = data[0].supperAppLandingPage1[0].Accordian;
        // this.section = this.Accordian[0].AccordianPannel[0].section;
        // console.log("section"+this.Accordian[0].AccordianPannel[0].section[0])
        // this.VerticalCard = this.Accordian[0].AccordianPannel[0].section[0].verticalCard;
        // console.log("vertical card"+this.VerticalCard)
        // this.horizontalCard = this.Accordian[0].AccordianPannel[0].section[0].horizontalCard;
        // console.log("horizontal card"+this.horizontalCard)
        // console.log(this.Accordian[0].AccordianPannel[0].section[0].horizontalCard)
        // if( data[0].supperAppLandingPage1[0].Accordian[0].AccordianID == 1){
        //   this.showAccordianPanel1 = true;
        //   this.showAccordianPanel2 = false;
        // }else if(data[0].supperAppLandingPage1[0].Accordian[0].AccordianID == 2){
        //   this.showAccordianPanel1 = false;
        //   this.showAccordianPanel2 = true;
        // }
      }
    });
  }
}
