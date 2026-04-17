import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective implements OnInit {

  @Input() in = 'yellow';
  @Input() out = 'green';

  // Quels attributs je veux cibler
  @HostBinding('style.backgroundColor')
  bgc = this.out;
  constructor() { }
  ngOnInit(): void {
    this.bgc = this.out;
  }

  // Quel comportement appliquer et à quel moment
  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgc = this.out;
  }
}
