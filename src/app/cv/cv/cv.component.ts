import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs: Cv[] = [
    new Cv(
      1,
      'Farid',
      'Chouakria',
      'Ingénieur',
      '12345678',
      20,
      'rotating_card_profile3.png',
    ),
    new Cv(
      2,
      'Stephane',
      'Bailly',
      'Ingénieur',
      '12345679',
      20,
      '',
    ),
    new Cv(
      3,
      'Aymen',
      'Sellaouti',
      'Ingénieur',
      '12345688',
      20,
      '           ',
    ),
  ];
  today = new Date();
  selectedCv: Cv | null = null;

  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
    // for() {
    //   // ce que je répéte
    // }
  }
}
