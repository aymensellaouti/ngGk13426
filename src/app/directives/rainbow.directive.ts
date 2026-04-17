import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({ selector: 'input[appRainbow][type=text]' })
export class RainbowDirective {

  @HostBinding('style.color')
  @HostBinding('style.borderColor')
  color = 'black';
  constructor() {
    console.log('rainbow');
  }
  @HostListener('keyup')
  onKeyUp() {
    this.color = this.getRandomColor();
  }
  getRandomColor(): string {
    return `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')}`;
  }

}
