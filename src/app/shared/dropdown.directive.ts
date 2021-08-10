import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class') className: string;

  @HostListener('click') onClick(eventData: Event) {
  this.className = "open";
  } 

  @HostListener('mouseleave') onMouseOut(eventData: Event) {
    this.className = "closed";
    } 

  constructor() { }

}
