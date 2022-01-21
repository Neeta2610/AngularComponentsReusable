import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  public IsMapIconClicked = false
  constructor() { }

  ngOnInit(): void {
    console.log('value',this.IsMapIconClicked);
    
  }

  onMapIconClick(){
    this.IsMapIconClicked = !this.IsMapIconClicked
    console.log('value',this.IsMapIconClicked);
  }

}
