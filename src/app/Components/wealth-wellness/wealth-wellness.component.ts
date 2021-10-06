import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicTempleteService } from 'src/app/Services/dynamic-templete.service';
 
@Component({
  selector: 'app-wealth-wellness',
  templateUrl: './wealth-wellness.component.html',
  styleUrls: ['./wealth-wellness.component.scss'],
})
export class WealthWellnessComponent implements OnInit {
  SuperAppLandingFrom: FormGroup;
  desciption: string;
  Accordian:any;
  section:any;
  VerticalCard:any;
  horizontalCard:any;

  //start changes by umesh
  mySupper:any;
  newAccord:any;
  accordID:any;
  accordPanel:any;
  mySection:any;
  verti:any;
  hori:any;

  link:any;

  edited : boolean= true;
  //end changes by umesh

  showAccordianPanel1: boolean= false;
  showAccordianPanel2: boolean = false;

  btnHide: boolean = true;

 /**
   * The name of the technology that will be displayed as the title for the accordion header
   * @public
   * @property name
   * @type {string}
   */
  @Input()
  name : string;
 /**
   * The description of the technology that will be displayed within the accordion body (when activated 
   * by the user)
   * @public
   * @property description
   * @type {string}
   */
  @Input()
  description : string;
/**
   * The official logo identifying the technology that will be displayed within the accordion body (when activated 
   * by the user)
   * @public
   * @property image
   * @type {string}
   */
  @Input()
  image : string;


  /**
   * The change event that will be broadcast to the parent component when the user interacts with the component's 
   * <ion-button> element
   * @public
   * @property change
   * @type {EventEmitter}
   */
  @Output()
  change : EventEmitter<string> = new EventEmitter<string>();

 /**
   * Determines and stores the accordion state (I.e. opened or closed)
   * @public
   * @property isMenuOpen
   * @type {boolean}
   */
  public isMenuOpen : boolean = false;
  public ArrowSign :boolean = false;

  constructor(private _dynamicData: DynamicTempleteService, private fb: FormBuilder) {
    this.GetDynamicData()
  }


  ngOnInit() {
    this.SuperAppLandingFrom = this.fb.group({
      AccordianNo1: [''],
      AccordianNo2: [''],
      AccordianNo3: ['']
    });
  }
 /**
   * Allows the accordion state to be toggled (I.e. opened/closed)
   * @public
   * @method toggleAccordion
   * @returns {none}
   */
  public toggleAccordion(id): void {
    if(id==1){
      this.ArrowSign = !this.ArrowSign;
    }
    this.isMenuOpen = !this.isMenuOpen;
  }


  /**
   * Allows the value for the  element to be broadcast to the parent component
   * @public
   * @method broadcastName
   * @returns {none}
   */
  public broadcastName(name: string): void {
     this.change.emit(name);
  }

  GetDynamicData() {
    this._dynamicData.GetDynamicWealthData().subscribe(data => {
      if (data) {
        console.log(data)
        // console.log("Accordian data : " + data[0].supperAppLandingPage1[0].wealthWellness[0].desciption)

        this.mySupper = data[0].supperAppLandingPage1;

        this.newAccord = this.mySupper[0].Accordian;

        for(let i = 0; i < this.mySupper.length; i++){
          console.log("My Landing data " + this.mySupper[i].NumberOfAccordion);

          // this.newAccord = this.mySupper[0].Accordian;
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

  showAccordian(AccordianId){
    // this.SuperAppLandingFrom.addControl('AccordianNo'+AccordianId, this.fb.control(''));
    // alert( this.SuperAppLandingFrom.controls['AccordianNo'+AccordianId].value)
    if(AccordianId == 1){
      alert("click 1")
      this.showAccordianPanel1 = !this.showAccordianPanel1;
    } else if (AccordianId == 2){
      alert("click 2")
      this.showAccordianPanel2 = !this.showAccordianPanel2;
    }

  }

  redirect(){

  }

  testShow(AccordianPannel){
    // console.log("kajal "+this.accordID + "\t" +AccordianPannel)
    this.link = document.getElementById(AccordianPannel);
    // console.log("link"+this.link)
    // if(link.style.display == 'hidden'){
    //   link.style.display = 'block'; //or
    // } else{
    //   link.style.display = 'none';
    // }

    console.log(this.accordID[0].AccordianTitle)
    for(let i = 0; i < this.accordID.length; i++){
      if(this.accordID[i].AccordianID == AccordianPannel){
        this.edited = false;
        console.log("test match")
      } else{
        this.edited = true;
        console.log("test not match")
      }
    }
    

    

    // this.link.style.display = 'none'; //or
    // this.link.style.display = 'hidden'; //or
  }

}
