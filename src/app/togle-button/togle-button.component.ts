import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-togle-button',
  templateUrl: './togle-button.component.html',
  styleUrls: ['./togle-button.component.css']
})
export class TogleButtonComponent implements OnInit {

  @Output() toggleValue = new EventEmitter();
  @Input() ToggleLable;
  @Input() disable;
  public ToggleValue;
  constructor() { }

  ngOnInit(): void {
  }

  onToggleChange(event){
    this.ToggleValue=event.target.value;
    this.toggleValue.emit(this.ToggleValue)
  }

}
