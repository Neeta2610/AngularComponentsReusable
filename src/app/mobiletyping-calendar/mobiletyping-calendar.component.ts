import {  Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {isWithinInterval, addYears} from 'date-fns'

@Component({
  selector: 'app-mobiletyping-calendar',
  templateUrl: './mobiletyping-calendar.component.html',
  styleUrls: ['./mobiletyping-calendar.component.css']
})
export class MobiletypingCalendarComponent implements OnInit {

  @Input() public ValidationYear;
  @Output() public ValidateDate = new EventEmitter();
  public index = 0;
  position = 0;
  date = ['','D', '/', 'M', 'M', '/', 'Y', 'Y', 'Y', 'Y']
  data = '';
  element;
  public ErrorFlag=false;
  ngOnInit() {
    let inputDocument = document.getElementById('firstNameInput');
    this.element = <HTMLInputElement>inputDocument;
  }

  ngAfterViewChecked() {
    this.element.setSelectionRange(this.index, this.index)
  }

  onStartfocus = (event) => {
    event.target.setSelectionRange(this.index, this.index);
    this.data=this.date.join("");
  }
  onBlurDate(event){
    let date=new Date(event.target.value);
   if(isWithinInterval(date,{start:new Date(),end:addYears(new Date(),this.ValidationYear)})){
     this.ValidateDate.emit(date);
  }else{
    this.ErrorFlag=true;
  }
  }
  changingin(event) {
    this.ErrorFlag=false;
    let pos = this.index
    let finaldata=this.date;
      if(event.data==null){
          console.log(pos);
          if(pos===0){
            event.target.value = finaldata.join("");
          }
           if(pos=== 10){
             finaldata[pos-1]=''
             event.target.value = finaldata.join("");
             this.index = pos-1;
           }else if((pos <=9 && pos >=7) || pos === 4 || pos === 1)
           {
             finaldata[pos-1]='';
             finaldata[pos]= pos === 4?'M':pos === 1 ? 'D':'Y';
             event.target.value = finaldata.join("")
             this.index = pos-1;
           }else if(pos === 6 || pos===3 ){
             finaldata[pos-2]='';
             finaldata[pos]= pos === 3?'M':'Y';
             event.target.value = finaldata.join("");
             this.index = pos-2;
           }
      }else{
          if (pos == 1 || pos == 4){ 
            finaldata[pos]=event.data;
            finaldata[pos+2]='';
            event.target.value = finaldata.join("")
            this.index = pos + 2;
          }
          else { 
            if(pos<9){finaldata[pos]=event.data;finaldata[pos+1] ='';};
            this.data = finaldata.join("")
            this.index = pos+1;
          };
        }
  }
}
