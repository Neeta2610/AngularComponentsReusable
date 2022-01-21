import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-view',
  templateUrl: './toggle-view.component.html',
  styleUrls: ['./toggle-view.component.css']
})
export class ToggleViewComponent implements OnInit {
  @Input() public images;
  @Output() public event = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  changeImage(event) {
    this.event.emit(event)

    if (event == 0) {
      this.images[event].active = true
      this.images[1].active = false
      this.images[2].active = false
    }

    if (event == 1) {
      this.images[event].active = true
      this.images[0].active = false
      this.images[2].active = false
    }

    if (event == 2) {
      this.images[event].active = true
      this.images[0].active = false
      this.images[1].active = false
    }

  }

}
