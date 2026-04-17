import { Component } from '@angular/core';
import { SecondComponent } from '../second/second.component';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css'],
    imports: [SecondComponent]
})
export class FirstComponent {
  name = 'aymen';
  isHidden = false;
  constructor() {
    // setInterval(() => {
    //   this.isHidden = !this.isHidden
    // }, 2000)
  }
  showHide() {
    this.isHidden = !this.isHidden;
  }
}
