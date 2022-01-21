import { Component, OnInit,EventEmitter, Input,Output,HostListener} from '@angular/core';


@Component({
  selector: 'app-calloutcomp',
  templateUrl: './calloutcomp.component.html',
  styleUrls: ['./calloutcomp.component.css']
})
export class CalloutcompComponent implements OnInit {
  public show;
  public scroll;
  public position;
  public inputtxt="";
 @Input() public HitId;
 @Input() public LabelChanges;
  @Output() onboxCLick : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
  ngOnInit(){
  }
//   @HostListener('window:scroll', ['$event']) // for window scroll events
//   onScroll() {
// if(document.getElementById(this.HitId)!==null){
// let  ElemRect = document.getElementById(this.HitId).getBoundingClientRect();
// let element = document.getElementById(this.HitId);
// if(window.innerHeight-ElemRect.top <= 150){
//   element.classList.remove("bottom");
//   element.classList.add("up")
//   document.getElementById(this.HitId).style.marginTop='-159px'
// }else{
//   // document.getElementById(this.HitId).style.top = ( ElemRect.top - bodyRect.top + ElemRect.height+10)+'px'
//   document.getElementById(this.HitId).style.marginTop='0px'
//   element.classList.remove("up");
//   element.classList.add("bottom");
// }
// }
//   }
  getTxtValue(data){
    this.inputtxt=data
  }

  onClick(){
   this.show=true; 
 
  }  
  onBlur(){
    this.show=false; 
    this.onboxCLick.emit(this.inputtxt);
  }
}