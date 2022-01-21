import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail-component',
  templateUrl: './thumbnail-component.component.html',
  styleUrls: ['./thumbnail-component.component.css']
})
export class ThumbnailComponentComponent implements OnInit {
  @Input() public TransitionTime;
  @Input() public CardsVisible;
  @Input() public Width;
  @Input() public Height;
  @Input() public ThumbnailSliderImges;
  public innerimage:any;
  // public ThumbnailSliderImges=['https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1544097935-e6d136448533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1551525212-a1dc18871d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80','https://images.unsplash.com/photo-1559841644-08984562005a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60']
   public InnerHeight1=0;
   public InnerHeight='';
   public height='';
   public width='';
  constructor() { }
  ngOnInit() { 
    this.InnerHeight=(this.Height-this.Height/4)+'px';
    this.InnerHeight1=this.Height/4;
    this.width=this.Width+'px';
    this.height=this.Height+'px';
    this.innerimage= this.ThumbnailSliderImges[0];
  }

   
  OnThumbnailHover=(i)=>{
  this.innerimage=this.ThumbnailSliderImges[i];
}

}
