import { Component } from '@angular/core';

@Component({
    selector: 'app-rotating-card',
    templateUrl: './rotating-card.component.html',
    styleUrls: ['./rotating-card.component.css'],
    standalone: false
})
export class RotatingCardComponent {
  // state de mon composant
  name = 'sellaouti';
  firstname = 'aymen';
  job = 'Enseignant';
  path = 'rotating_card_profile3.png';
}
