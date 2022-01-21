import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {

  
  @Input() public data;
  @Output() public events = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  viewConditions(event) {
    this.events.emit(event)
    this.data.map((fact,i)=>{
      (event == i) && (this.data[i].expanded = !this.data[i].expanded);
    })
  }
}
