import { Component } from '@angular/core';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css'],
    standalone: false
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
