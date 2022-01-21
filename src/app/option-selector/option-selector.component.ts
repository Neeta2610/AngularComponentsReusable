import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-option-selector',
  templateUrl: './option-selector.component.html',
  styleUrls: ['./option-selector.component.css']
})
export class OptionSelectorComponent implements OnInit {
  public selectedId = 0;
  @Input() public selectedOption
  @Output() public UserSelectedOption = new EventEmitter();
  constructor() { }
  ngOnInit(): void { }


  onSelect(i){
    this.selectedId = i;
    this.UserSelectedOption.emit(i);
  }

}
