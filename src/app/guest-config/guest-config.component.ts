 import { Component,EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-guest-config',
  templateUrl: './guest-config.component.html',
  styleUrls: ['./guest-config.component.css']
})
export class GuestConfigComponent implements OnInit {
public PopupVisible=false;
public ArrowImage={};
@Input() public maxChild
@Input() public maxAdult
@Input() public minChild;
@Input() public minAdult;
@Input() public defaultAdult
@Input() public defaultChild
@Input() public maximumRooms
@Input() public guestPerRooms
@Input() public totalPax
@Input() public rooms
@Output() public PaxArrayOutData =  new EventEmitter();
public buttoncolor= true;
@Input() public count
public room= 0;
public img= true;
@Input() public storageData
public Inputvalue=''
public data = 0;
public adult = 0;
public child = 0;

public isNormalDropDownAgeVisible= false;
public selectedNormalDropdownAgeValue=1;
public paxAgeOptions = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
    { value: 11, label: 11 },
    { value: 12, label: 12 }

];

constructor() { }

ngOnInit() {
    if(this.storageData.length!==0){
        this.rooms=[];
        let adultData=0;
        let ChilData=0;
        this.storageData.forEach((fact, index) => {
            // console.log("fact",fact.room,fact.adult,fact.children,fact.child);
            adultData=adultData+fact.adult;
            ChilData=ChilData+fact.children;
            this.data = this.data + fact.adult + fact.children;
            this.adult = this.adult + fact.adult;
            this.child = this.child + fact.children;
            let result={ room: fact.room, adult: fact.adult, children: fact.children, child: [...fact.child], adultincrement: fact.adult + fact.children === this.guestPerRooms || fact.adult === this.maxAdult ? false : true, childincrement: fact.adult + fact.children === this.guestPerRooms || fact.children === this.maxChild ? false : true, fontimg: fact.children === this.minChild ? false : true, adultdecrement: fact.adult === this.minAdult ? false : true, childecrement: fact.children === this.minChild ? false : true, disableDiv: index === this.storageData.length - 1 ? false : true }
            // console.log("result======>",result);      
            this.rooms.push(result);
        });
        this.Inputvalue = adultData+' Adult + '+ChilData+' Children, '+this.rooms.length+' Room'
    }else{
        this.Inputvalue = this.defaultAdult+' Adult + '+this.defaultChild+' Children, '+this.rooms.length+' Room'
    }
            if (this.data === this.totalPax || this.storageData.length === this.maximumRooms) {
                this.buttoncolor= false 
            }
  }

onNormalDropDownAgeSelection(index,indexi,value){
    // console.log('ytgjhbuknm,',index,indexi,value)
    var asd = this.rooms;
        asd[index].child[indexi].age = parseInt(value);
        asd[index].child[indexi].isOpen=false;
            this.rooms= asd
    //   console.log('trdfgjhbjknnnnnnnnnnnnnnnnnnnnnn',this.rooms)
  }


  OpenPopup(){
    this.PopupVisible=!this.PopupVisible
  }
  ClosePopup(){
    let adultData=0;
    let ChilData=0;
    this.PopupVisible=false
    this.rooms.forEach((fact)=>{
        adultData=adultData+fact.adult;
        ChilData=ChilData+fact.children;
    })
    this.PaxArrayOutData.emit(this.rooms);
    this.Inputvalue = adultData+' Adult + '+ChilData+' Children, '+this.rooms.length+' Room'

  }

      disableDiv() {
        var asd = this.rooms;
        asd.forEach((a) => {
            a.disableDiv = true;
        });
        // this.setState({
            this.rooms= asd
        // });

    }

    enableDiv(index) {
        var asd = this.rooms;
        asd.forEach((a) => {
            a.disableDiv = true;
        });
        asd[index].disableDiv = false;
        // this.setState({
            this.rooms= asd
        // });
    }

    removeRooms(index) {
  setTimeout(()=>{
    var asd = [...this.rooms];
    if (this.rooms.length > 1) {
        asd.forEach((a) => {
            a.adultincrement = true;
            a.childincrement = true;
            if (a.adult === this.maxAdult) {
                a.adultincrement = false;
            } else if (a.children === this.maxChild) {
                a.childincrement = false;
            }
        });
        // this.setState({
            this.buttoncolor= true
        // });
        this.rooms.splice(index, 1);
        // this.setState({
             this.rooms= this.rooms 
            //  });
        // this.setState({
            
        // });
    }
  },1)
   
    }

    decrement(index) {
        var c = 0;
        var asd = this.rooms;
        asd.forEach((fact) => {
            c = fact.adult + fact.children + c;
        });
        if (asd[index].adult > this.minAdult) {
            if (asd[index].children < this.maxChild) {
                asd[index].childincrement = true;
            }
            if (asd[index].adult < this.maxAdult) {
                asd[index].adultincrement = true;
            }
            asd[index].adultincrement = true;
            asd[index].adult--;
            // this.setState({
                this.rooms= asd
            // });
            // this.setState({
                this.buttoncolor= true
            // });

            if (asd[index].adult === this.minAdult) {
                asd[index].adultdecrement = false;
            }
            if (c === this.totalPax) {

                asd.forEach((a) => {
                    if (a.adult < this.maxAdult) {
                        a.adultincrement = true;
                    }
                    if (a.children < this.maxChild) {
                        a.childincrement = true;
                    }
                    if (a.adult === this.maxAdult && a.children === this.minChild) {
                        a.adultincrement = false;
                        a.childincrement = false;
                    }
                });

            }
        }

        if (this.rooms.length === this.maximumRooms) {
            // this.setState({
                this.buttoncolor= false
            // });
        }
    }

increment(index) {
        var asd = this.rooms;
        var c = 0;
        asd.forEach((fact) => {
            c = fact.adult + fact.children + c;
        });
        if (asd[index].adult < this.maxAdult && c < this.totalPax) {
            if (asd[index].adult + asd[index].children < this.guestPerRooms) {
                asd[index].adult++;
                if (asd[index].adult + asd[index].children === this.guestPerRooms) {
                    asd[index].adultincrement = false;
                    asd[index].childincrement = false;
                }
                // this.setState({
                    this.rooms= asd
                // });
            }
        }
        if (asd[index].adult > this.minAdult) {
            asd[index].adultdecrement = true;
        }
        c = 0;
        asd.forEach((fact) => {
            c = fact.adult + fact.children + c;
        });
        if (c === this.totalPax) {
            // this.setState({
                this.buttoncolor= false
            // });
            asd.forEach((a) => {
                a.adultincrement = false;
                a.childincrement = false;
            });
        }
        if (asd[index].adult === this.maxAdult) {
            asd[index].adultincrement = false;
        }
    }

  incrementch(index) {
        var asd = [...this.rooms];
        var c = 0;
        asd.forEach((fact) => {
            c = fact.adult + fact.children + c;
        });
        if (asd[index].children < this.maxChild && c < this.totalPax) {
            if (asd[index].adult + asd[index].children < this.guestPerRooms) {
                asd[index].children++;
                if (asd[index].adult + asd[index].children === this.guestPerRooms) {
                    asd[index].adultincrement = false;
                    asd[index].childincrement = false;
                }
                asd[index].child.push({ age: 1 ,isOpen:false});
                // this.setState({
                    this.rooms= asd
                // });
            }
        }
        if (asd[index].children > this.minChild) {
            asd[index].childecrement = true;
            asd[index].fontimg = true;
        }
        if (asd[index].children === this.maxChild) {
            asd[index].childincrement = false;
        }
        c = 0;
        asd.forEach((fact) => {
            c = fact.adult + fact.children + c;
        });
        if (c === this.totalPax) {

            // this.setState({
                this.buttoncolor= false
            // });
            asd.forEach((a) => {
                a.adultincrement = false;
                a.childincrement = false;
            });
        }

    }
    decrementch(index) {
        var asd = [...this.rooms];
        var c = 0;
        asd.forEach((fact) => {
            c = fact.adult + fact.children + c;
        });
        if (asd[index].children > this.minChild) {
            if (asd[index].children < this.maxChild) {
                asd[index].childincrement = true;
            }
            if (asd[index].adult < this.maxAdult) {
                asd[index].adultincrement = true;
            }
            asd[index].children--;
            asd[index].child.pop();
            // this.setState({
                this.rooms= asd
            // });
            if (asd[index].children === this.minChild) {
                asd[index].fontimg = false;
                asd[index].childecrement = false;
            }
            if (asd[index].children < this.maxChild) {
                asd[index].childincrement = true;
            }
            // this.setState({
                this.buttoncolor= true
            // });


            if (c === this.totalPax) {

                asd.forEach((a) => {
                    if (a.adult < this.maxAdult) {
                        a.adultincrement = true;
                    }
                    if (a.children < this.maxChild) {
                        a.childincrement = true;
                    }
                    if (a.adult === this.maxAdult && a.children === this.minChild) {
                        a.adultincrement = false;
                        a.childincrement = false;
                    }
                });

            }
        }
        if (this.rooms.length === this.maximumRooms) {
            // this.setState({
                this.buttoncolor= false
            // });
        }
    }

      addRooms() {
        var c = 0;
        this.rooms.forEach((fact, index) => {
            c = c + fact.adult + fact.children;
        });
        if (this.rooms.length < this.maximumRooms && c < this.totalPax) {
            this.disableDiv();
            this.count= this.count + 1 ;
            var add1 = [...this.rooms];
            if (this.defaultAdult + this.defaultChild + c < this.totalPax) {
                add1.push({ room: this.count, adult: this.defaultAdult, children: this.defaultChild, child: [], childincrement: this.maxChild !== this.defaultChild ? true : false, childecrement: this.minChild !== this.defaultChild ? true : false, fontimg: this.minChild !== this.defaultChild ? true : false, adultincrement: this.maxAdult !== this.defaultAdult ? true : false, adultdecrement: this.minAdult !== this.defaultAdult ? true : false ,disableDiv:false});
            }
            else if (this.defaultAdult + this.defaultChild + c === this.totalPax) {
                add1.push({ room: this.count, adult: this.defaultAdult, children: this.defaultChild, child: [], childincrement: false, childecrement: this.minChild !== this.defaultChild ? true : false, fontimg: this.minChild !== this.defaultChild ? true : false, adultincrement: false, adultdecrement: this.minAdult !== this.defaultAdult ? true : false, disableDiv:false });
                // this.setState({
                    this.buttoncolor= false
                // });
                add1.forEach((a) => {
                    a.adultincrement = false;
                    a.childincrement = false;
                });
            }
            else {
                for (var i = 1; i < this.defaultAdult + this.defaultChild; i++) {
                    if (c + i === this.totalPax) {
                        add1.push({ room: this.count, adult: i, children: 0, child: [], childincrement: false, childecrement: this.minChild !== this.defaultChild ? true : false, fontimg: this.minChild !== this.defaultChild ? true : false, adultincrement: false, adultdecrement: this.minAdult !== i ? true : false, disableDiv:false});
                        // this.setState({
                            this.buttoncolor= false
                        // });
                        add1.forEach((a) => {
                            a.adultincrement = false;
                            a.childincrement = false;
                        });
                    }
                }
            }
            this.rooms= add1;
            if (this.rooms.length === this.maximumRooms - 1) {
                // this.setState({
                    this.buttoncolor= false
                // });
            }
        }
      }
    

  


}