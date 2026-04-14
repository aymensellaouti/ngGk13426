import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cvs-list',
  templateUrl: './cvs-list.component.html',
  styleUrls: ['./cvs-list.component.css']
})
export class CvsListComponent {
  @Input()
  cvs: Cv[] = [];
}
