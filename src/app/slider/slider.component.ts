import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {
  // public getWidth = () => window.innerWidth;
 
  @Input() public ImgArray;
  @Input() public Height;
  @Input() public Width;
  @Input() public ShowDots;
  @Input() public AutomaticSlide;
  @Input() public ShowArrow;
  @Input() public TransitionTime;
  @Input() public SlideOnHover;




  
  public height='';
  public width='';
  public position=false;
  public activeindex=0; 
  public transform='';
  public InnerWidth='';
  public InnerImage=[];
  public HoverScroll;
  public FirstHover=true;
  constructor() { 
    
  }

  mouseOut=()=>{
    if(this.SlideOnHover){
      clearInterval(this.HoverScroll)
    }
  }
  mouseOver=()=>{
    if(this.SlideOnHover){
      this.FirstHover ?this.InnerImage=this.ImgArray:'';
      this.FirstHover=false
    this.HoverScroll=setInterval(()=>{this.onScroll()},this.TransitionTime);
    }
  }
  handleRightClick=()=>{
    this.activeindex=this.activeindex+1;
    this.TranslateImage();
  }
  handleLeftClick=()=>{
    this.activeindex=this.activeindex-1;
    this.TranslateImage();
  }
  onScroll=()=>{
    this.activeindex === this.ImgArray.length-1 ? this.position=true:'';
    this.activeindex===0?this.position=false :'';
    if(this.position){
     this.activeindex=this.activeindex-1;
    }else{
      this.activeindex=this.activeindex+1;
    }
    this.TranslateImage();
    }
   
    TranslateImage=()=>{
      this.transform=`translateX(-${this.activeindex * this.Width}px)`
    }
  ngOnInit() {
   (this.AutomaticSlide && !this.SlideOnHover) && setInterval(()=>{this.onScroll()},this.TransitionTime);
    this.InnerWidth=(window.innerWidth * this.ImgArray.length)+'px' ;
    this.height=this.Height+'px';
    this.width=this.Width + 'px';
    this.InnerImage= this.SlideOnHover ?[this.ImgArray[0]]:this.ImgArray;
  }

}
