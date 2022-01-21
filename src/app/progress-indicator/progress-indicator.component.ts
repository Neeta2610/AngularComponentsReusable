import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.css']
})
export class ProgressIndicatorComponent implements OnInit {
  public percentValue;
  public strokeValue;
  @Input() Value : any;


  constructor() { }

  ngOnInit(): void {
    this.percentValue = this.Value
    console.log('PercentValue from AppComponent is = ',this.percentValue);
    
    if(this.percentValue==100){
      this.strokeValue='0px'
    }
    if(this.percentValue<100 && this.percentValue>=95)
    {
      this.strokeValue='15px'
    }
    if(this.percentValue<95 && this.percentValue>=90)
    {
      this.strokeValue='30px'
    }
    if(this.percentValue<90 && this.percentValue>=85)
    {
      this.strokeValue='45px'
    }
    if(this.percentValue<85 && this.percentValue>=80)
    {
      this.strokeValue='60px'
    }
    if(this.percentValue<80 && this.percentValue>=75)
    {
      this.strokeValue='75px'
    }
    if(this.percentValue<75 && this.percentValue>=70)
    {
      this.strokeValue='90px'
    }
    if(this.percentValue<70 && this.percentValue>=65)
    {
      this.strokeValue='105px'
    }
    if(this.percentValue<65 && this.percentValue>=60)
    {
      this.strokeValue='120px'
    }
    if(this.percentValue<60 && this.percentValue>=55)
    {
      this.strokeValue='135px'
    }
    if(this.percentValue<55 && this.percentValue>=50)
    {
      this.strokeValue='150px'
    }
    if(this.percentValue<50 && this.percentValue>=45)
    {
      this.strokeValue='165px'
    }
    if(this.percentValue<45 && this.percentValue>=40)
    {
      this.strokeValue='180px'
    }
    if(this.percentValue<40 && this.percentValue>=35)
    {
      this.strokeValue='195px'
    }
    if(this.percentValue<35 && this.percentValue>=30)
    {
      this.strokeValue='210px'
    }
    if(this.percentValue<30 && this.percentValue>=25)
    {
      this.strokeValue='225px'
    }
    if(this.percentValue<25 && this.percentValue>=20)
    {
      this.strokeValue='240px'
    }
    if(this.percentValue<20 && this.percentValue>=15)
    {
      this.strokeValue='255px'
    }
    if(this.percentValue<15 && this.percentValue>=10)
    {
      this.strokeValue='270px'
    }
    if(this.percentValue<10 && this.percentValue>=5)
    {
      this.strokeValue='285px'
    }
    if(this.percentValue<5 && this.percentValue>=0)
    {
      this.strokeValue='290px'
    }
    if(this.percentValue==0)
    {
      this.strokeValue='299px'
    }
  }

}
