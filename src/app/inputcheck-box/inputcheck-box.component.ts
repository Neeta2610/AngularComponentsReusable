import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputcheck-box',
  templateUrl: './inputcheck-box.component.html',
  styleUrls: ['./inputcheck-box.component.css']
})
export class InputcheckBoxComponent implements OnInit {
  @Input() jsonData: any;
  public hit;
  public marked = false;
  @Input() IsDisabled;
  @Output() IsChecked= new EventEmitter();
  @Output() EventCalled= new EventEmitter();
	constructor() {}
  
	ngOnInit() {
		this.hit = this.jsonData;
  }
  
  CheckBoxvalue(event){
    this.marked = event.target.checked;
    this.IsChecked.emit(event.target.checked)
  }


	onLinkClick(event) {
    this.EventCalled.emit(event);
  }
  
}
