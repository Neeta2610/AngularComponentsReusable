import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotellist-card',
  templateUrl: './hotellist-card.component.html',
  styleUrls: ['./hotellist-card.component.css']
})
export class HotellistCardComponent implements OnInit {

  constructor() { }
 @Input()  public card_list;
  ngOnInit() {
  }

}
