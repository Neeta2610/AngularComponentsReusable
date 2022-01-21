import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() public dropDownOptions;
  @Input() public selectedDropdownValue;
  @Input() public isDropDownVisible;
  @Input() public iconDropdown;
  @Output() public onDropDownSelection = new EventEmitter();
  @Output() public handleDropDownToggle = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDropDownSelect(value){
    this.onDropDownSelection.emit(value);
  }

  onDropDownToggle(){
    this.handleDropDownToggle.emit();
  }

}
