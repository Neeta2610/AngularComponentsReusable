import { Directive, Input, Output, EventEmitter, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appEventClick]'
})
export class EventClickDirective {

  @Output() appEventClick = new EventEmitter();

  constructor(private elementRef: ElementRef) { }


  @HostListener('document:click', ['$event.target'])onClick(target) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.appEventClick.emit();
    }
  }

}
