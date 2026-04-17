import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { NgClass } from '@angular/common';
import { CvItemComponent } from '../cv-item/cv-item.component';

@Component({
    selector: 'app-cvs-list',
    templateUrl: './cvs-list.component.html',
    styleUrls: ['./cvs-list.component.css'],
    imports: [NgClass, CvItemComponent]
})
export class CvsListComponent {
  @Input()
  cvs: Cv[] = [];

  // @Output()
  // forwardCv = new EventEmitter<Cv>();
}
