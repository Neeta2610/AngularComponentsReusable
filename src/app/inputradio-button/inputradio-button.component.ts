import { EventEmitter,Component, OnInit,Output,Input } from '@angular/core';

@Component({
  selector: 'app-inputradio-button',
  templateUrl: './inputradio-button.component.html',
  styleUrls: ['./inputradio-button.component.css']
})
export class InputradioButtonComponent implements OnInit {
  @Output() public radioValue = new EventEmitter();
  @Input() public  RadioLabel;
  @Input() public  Disable;
  constructor() { }

  ngOnInit() {
   
  }
  onRadioButtonClick(event){
    this.radioValue.emit(event.target.value);
  }

}
