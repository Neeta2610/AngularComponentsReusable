import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.css']
})

export class ProfileSidebarComponent implements OnInit {
  @Input() public data;
  @Output()   public events = new EventEmitter();
  isSelected = false
  constructor() { }
  ngOnInit() {
  }
  selectedLink(event) {
    this.events.emit(event);
    for (let i = 0; i <this.data.ProfileBody.length; i++) {
     this.data.ProfileBody[i].isSelected=false
      if (event === i ) {
        this.data.ProfileBody[i].isSelected = true;
      }      
    }
  }

}
