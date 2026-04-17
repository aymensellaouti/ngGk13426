import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-ng-style',
    templateUrl: './ng-style.component.html',
    styleUrls: ['./ng-style.component.css'],
    imports: [NgStyle]
})
export class NgStyleComponent {
  color = 'green'
}
