import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {
@Input() public BreadCumbData;
@Output() public HitBreadCumb = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(item){
  this.HitBreadCumb.emit(item)
    }

}
