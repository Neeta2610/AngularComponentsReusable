import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { format,addMonths,subMonths,addYears,isSameMonth,getWeeksInMonth,startOfWeek,startOfMonth, addDays, isAfter, isSameDay,isWithinInterval, isBefore, differenceInMonths} from 'date-fns'

@Component({
  selector: 'app-desktop-calendar',
  templateUrl: './desktop-calendar.component.html',
  styleUrls: ['./desktop-calendar.component.css']
})
export class DesktopCalendarComponent implements OnInit {

  constructor() { }  
 @Output()  DatesArray=new EventEmitter();
public Hover1=false;
public Hover2=false;
public CalendarVisible=false;
public CalendarVisible1=false;
public ArrayMonth=[];
public ArrayMonth1=[];
public StartDate = new Date();
public EndDate = addYears(new Date(),1);
public PreviousArrow=false;
public NextArrow=false;
public Month1=new Date();
public OnLoad=true;
public DepartureDate = new Date();
public ReturnDate = addDays(new Date(),4);
public Month2= addMonths(new Date(),1);
public WeekDays=[{label:'S',title:'Sunday'},{label:'M',title:'Monday'},{label:'T',title:'Tuesday'},
{label:'W',title:'Wednesday'},{label:'T',title:'Thursday'},{label:'F',title:'Friday'},{label:'S',title:'Saturday'}]
public MonthTitle1='';
public MonthTitle2='';
public label1='';
public label2='';
public HeaderDate1='';
public HeaderDate2='';
public first=true;
  ngOnInit() {
    this.HeaderDate1=format(this.DepartureDate,'dd-LLL-yy-EEEE');
    this.HeaderDate2=format(this.ReturnDate,'dd-LLL-yy-EEEE');
  }
  SetLabels=()=>{

    this.SetDaysInWeek()
    this.MonthTitle1=format(this.Month1,'MMMM-yyyy');
    this.MonthTitle2=format(this.Month2,'MMMM-yyyy');
    this.label1=format(this.DepartureDate,'dd LLL yy');
    this.label2=this.ReturnDate!==null?format(this.ReturnDate,'dd LLL yy'):'Select Checkout Date';
    this.HeaderDate1=format(this.DepartureDate,'dd-LLL-yy-EEEE');
    this.HeaderDate2=format(this.ReturnDate,'dd-LLL-yy-EEEE');
    if(isSameMonth(addMonths(this.Month2,1),this.EndDate)){
       this.NextArrow=true;
    }else{
      this.NextArrow=false;
    }
    if(isSameMonth(this.Month1,this.StartDate)){
      this.PreviousArrow=true;
   }else{
     this.PreviousArrow=false;
   }
   
  }

  SetDaysInWeek=()=>{
   
    setTimeout(() => {
      let day1 = startOfWeek(startOfMonth(this.Month1));
      let day2 = startOfWeek(startOfMonth(this.Month2));
      let month1=[]
      let month2=[]
      for(var i=0;i<getWeeksInMonth(this.Month1);i++){
        let array=[]
       for(var j=0;j<7;j++){
        array.push({date:day1,day:format(day1,'d'),outside:isSameMonth(this.Month1,day1)?false:true,disable:this.first?isAfter(day1,new Date())|| isSameDay(day1,new Date()) ?false:true:isAfter(day1,this.DepartureDate)|| isSameDay(day1,this.DepartureDate) ?false:true,start:isSameDay(this.DepartureDate,day1)?true:false,end:this.ReturnDate!==null?isSameDay(this.ReturnDate,day1)?true:false:false,selected:this.ReturnDate!==null?isWithinInterval(day1,{start:this.DepartureDate,end:this.ReturnDate})?true:false:false})
        day1=addDays(day1,1);
  
       }
       month1.push({Week:array})
      }
      for(var i=0;i<getWeeksInMonth(this.Month2);i++){
        let array=[]
       for(var j=0;j<7;j++){
        array.push({date:day2,day:format(day2,'d'),outside:isSameMonth(this.Month2,day2)?false:true,disable:this.first?isAfter(day2,new Date())|| isSameDay(day2,new Date()) ?false:true:isAfter(day2,this.DepartureDate)|| isSameDay(day2,this.DepartureDate) ?false:true,start:isSameDay(this.DepartureDate,day2)?true:false,end:this.ReturnDate!==null?isSameDay(this.ReturnDate,day2)?true:false:false,selected:this.ReturnDate!==null?isWithinInterval(day2,{start:this.DepartureDate,end:this.ReturnDate})?true:false:false})
        day2=addDays(day2,1);
  
       }
       month2.push({Week:array})
      }
      this.ArrayMonth=month1;
      this.ArrayMonth1=month2;
      
    }, 1);

  }
  PreviousMonth=()=>{
    if(!isSameMonth(this.Month1,this.StartDate)){
      this.Month1=subMonths(this.Month1,1);
      this.Month2=subMonths(this.Month2,1);
      this.SetLabels();
    }else{
      this.SetLabels();
    }
  }
  NextMonth=()=>{
    if(!isSameMonth(addMonths(this.Month2,1),this.EndDate)){
      this.Month1=addMonths(this.Month1,1);
      this.Month2=addMonths(this.Month2,1);
      this.SetLabels();
    }else{
      this.SetLabels();
    }
  }
  ClosePopup=()=>{
    this.CalendarVisible=false;
    this.CalendarVisible1=false;
    this.OnLoad=true;
    let dates={DepartureDate:this.DepartureDate,ReturnDate:this.ReturnDate};
    this.DatesArray.emit(dates);
  }
  CheckInBlock=()=>{
    this.CalendarVisible=true;
    this.CalendarVisible1=false;
    if(this.OnLoad){
      this.Month1=this.DepartureDate;
       this.Month2=isSameMonth(this.DepartureDate,this.ReturnDate)?addMonths(this.DepartureDate,1):differenceInMonths(this.ReturnDate,this.DepartureDate)>1?addMonths(this.DepartureDate,1):this.ReturnDate;
        this.OnLoad=false
      }
    this.first=true;
    this.SetLabels();
  }
  CheckOutBlock=()=>{
    this.CalendarVisible1=true;
    this.CalendarVisible=false;
    if(this.OnLoad){
      this.Month1=differenceInMonths(this.ReturnDate,this.DepartureDate)>1?subMonths(this.ReturnDate,1):this.DepartureDate;
       this.Month2=isSameMonth(this.DepartureDate,this.ReturnDate)?addMonths(this.DepartureDate,1):this.ReturnDate
        this.OnLoad=false
      }
    this.first=false;
    this.SetLabels();
    }
   OnDateClick=(event,outside,disable)=>{ 
  if(!outside && !disable){
    if(this.first){
      this.DepartureDate=event;
      this.ReturnDate=addDays(event,2)
      this.first=false;
      this.CheckOutBlock()
      this.SetLabels();
    }else if(isBefore(this.DepartureDate,event)){
      this.ReturnDate=event;
      this.first=true;
      this.ClosePopup()
      this.SetLabels();
    }
  }
  }
}
