import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-desktop-filtertag',
  templateUrl: './desktop-filtertag.component.html',
  styleUrls: ['./desktop-filtertag.component.css']
})
export class DesktopFiltertagComponent implements OnInit {
 @Input() parentData
 @Output() childEvent=new EventEmitter();
  constructor() { }
  
  removeData( i: number): void {
    let response
    // this.counter = this.counter+1;
    response = this.parentData.splice(i, 1)
    this.childEvent.emit(response)
    console.log("close method call ", this.parentData);
  }
  ngOnInit() {
  }

}
