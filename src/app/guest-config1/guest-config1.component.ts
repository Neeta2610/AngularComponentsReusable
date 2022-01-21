import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-guest-config1',
  templateUrl: './guest-config1.component.html',
  styleUrls: ['./guest-config1.component.css']
})
export class GuestConfig1Component implements OnInit {
  @Input() public AdultTotal;
  @Input() public ChildTotal;
  @Input() public DefAdult;
  @Input() public DefChild;
  @Input() public ChildAge;
  @Input() public PerRoomTotal;
  @Output() public PaxArray = new EventEmitter();
 public  PopUpVisible=false;
 public MouseOver=false;
 public TotalGuest;
 public TotalRoom;
 public MaxPerRoom;
 public MaxChildAge;
 public PaxConfigArray=[]
  constructor() { }
  counter(i: number) {
    return new Array(i);
  }
  ngOnInit() {
    this.PaxConfigArray =[{Adult:this.AdultTotal,DefAdult:this.DefAdult,DefChild:this.DefChild, Children:this.ChildTotal,Child:[],Edit:true,Error:false,ErrorText:"Upto 12 guests allowed in one room."}]
    this.TotalGuest=this.DefAdult+this.DefChild;
    this.TotalRoom=this.PaxConfigArray.length;
    this.MaxPerRoom=this.PerRoomTotal;
    this.MaxChildAge=this.ChildAge;
  }            
  ClosePopup=()=>{
    let total=0;
    this.PaxConfigArray.forEach((a) => {
      total=total+a.DefAdult+a.DefChild
    });
    this.TotalGuest=total;
    this.TotalRoom=this.PaxConfigArray.length;
    let asd = [];
    this.PaxConfigArray.map((fact,index)=>{
     asd.push({Room:index+1,Adult:fact.DefAdult,Children:fact.DefChild,Child:fact.Child})
    })
    this.PaxArray.emit(asd);
    this.PopUpVisible=false;
  }
  
  mouseOver=()=>{
     this.MouseOver=true
  }
  mouseOut=()=>{
    this.MouseOver=false
  }
  EditRoom=(i)=>{
    setTimeout(() => {
      this.UpdateErrorCondition();
     this.PaxConfigArray.forEach((a,index) => {
       if(index===i)
         a.Edit = true;
         else
         a.Edit = false;
    });
    }, 1);
  }
  AdultClick=(Range,Adult)=>{
    if((this.PaxConfigArray[Range].DefChild+Adult)>this.MaxPerRoom){
      this.PaxConfigArray[Range].Error=true
    }else{
      this.PaxConfigArray[Range].DefAdult=Adult
      this.PaxConfigArray[Range].Error=false
    }
  }
  ChildClick=(Range,Child)=>{
    if((this.PaxConfigArray[Range].DefAdult+Child)>this.MaxPerRoom){
      this.PaxConfigArray[Range].Error=true
    }else{
      if(Child===0)
      {
        this.PaxConfigArray[Range].Child=[]
      }else
      if( this.PaxConfigArray[Range].Child.length>Child){
        this.PaxConfigArray[Range].Child = this.PaxConfigArray[Range].Child.slice(0,Child)
      }else{
      let pushChildAge=Child-this.PaxConfigArray[Range].Child.length;
      for(var i=0;i<pushChildAge;i++){
        this.PaxConfigArray[Range].Child.push({Age:1})
      }

      }

    this.PaxConfigArray[Range].DefChild=Child
    this.PaxConfigArray[Range].Error=false
    }
  }


  RemoveRoom=(i)=>{
    setTimeout(() => {
      this.UpdateErrorCondition();
      this.PaxConfigArray.splice(i, 1);
      this.PaxConfigArray.length===1 && (this.PaxConfigArray[0].Edit=true);      
    }, );
  }
  UpdateErrorCondition=()=>{
    this.PaxConfigArray.forEach((a)=>{
      a.Error=false
    })
  }

  AddMoreRoom=()=>{
    this.UpdateErrorCondition();
    let asd=this.PaxConfigArray;
    asd.forEach((a) => {
      a.Edit = false;
  });
  asd.push({Adult:this.AdultTotal,DefAdult:this.DefAdult,DefChild:this.DefChild, Children:this.ChildTotal,Child:[],Edit:true,Error:false,ErrorText:"Upto 12 guests allowed in one room."})
  this.PaxConfigArray=asd;
  }

  onChildAgeChange=(event,Range,ChildRange)=>{
  this.PaxConfigArray[Range].Child[ChildRange].Age=parseInt(event);
  }
}
