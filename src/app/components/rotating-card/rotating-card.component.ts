import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-rotating-card',
    templateUrl: './rotating-card.component.html',
    styleUrls: ['./rotating-card.component.css'],
    imports: [FormsModule]
})
export class RotatingCardComponent {
  // state de mon composant
  name = 'sellaouti';
  firstname = 'aymen';
  job = 'Enseignant';
  path = 'rotating_card_profile3.png';
}
