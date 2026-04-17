import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';
import { RainbowDirective } from '../rainbow.directive';

@Component({
    selector: 'app-ng-class',
    templateUrl: './ng-class.component.html',
    styleUrls: ['./ng-class.component.css'],
    imports: [NgClass, HighlightDirective, RainbowDirective]
})
export class NgClassComponent {
  isOpen = false;
}
