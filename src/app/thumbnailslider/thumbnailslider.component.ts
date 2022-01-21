import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thumbnailslider',
  templateUrl: './thumbnailslider.component.html',
  styleUrls: ['./thumbnailslider.component.css']
})
export class ThumbnailsliderComponent implements OnInit {

  constructor() { }
 @Input() public ThumbnailSliderImges;
 @Input() public CardsVisible;
 @Input() public OnShowArrow;
 @Input() public AutomaticSlider;
 @Input() public OnHoverEvent;
 @Input() public OutsideWidth;
 @Input() public Height;
 @Input() public TransitionTime
 @Output() public onHoverImage= new EventEmitter();
public height='';
public width='';
public innerwidth=''
public activeindex=0; 
public innerhoverdata=null;
public transform='';
public position=false;
public InnerWidth = ''
ngOnInit() {
  console.log('this.slider',this.ThumbnailSliderImges)
  this.InnerWidth = ((this.OutsideWidth/this.CardsVisible) * this.ThumbnailSliderImges.length)+'%'
  this.width=(this.OutsideWidth/this.CardsVisible)+'%';
  this.innerwidth=this.OutsideWidth+'%';
  this.height=this.Height+'px';
  this.innerhoverdata=this.OnHoverEvent?0:null;
  this.AutomaticSlider && setInterval(()=>{this.onScroll()},this.TransitionTime);
  }
  handleRightClick=()=>{
    this.activeindex=this.activeindex+1;
    this.TranslateImage();
  }
  handleLeftClick=()=>{
    this.activeindex=this.activeindex-1;
    this.TranslateImage();
  }
  mouseOver=(i)=>{
    console.log('event call at',i)
    this.innerhoverdata=i;
    this.onHoverImage.emit(i);
  }
  onScroll=()=>{
    this.activeindex === this.ThumbnailSliderImges.length-this.CardsVisible ? this.position=true:'';
    this.activeindex===0?this.position=false :'';
    if(this.position){
     this.activeindex=this.activeindex-1;
    }else{
      this.activeindex=this.activeindex+1;
    }
    this.TranslateImage();
    }
  TranslateImage=()=>{
    this.transform=`translateX(-${this.activeindex * (this.OutsideWidth/this.ThumbnailSliderImges.length)}%)`;
    
  }

}
