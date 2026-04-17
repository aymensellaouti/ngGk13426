import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-two-way',
    templateUrl: './two-way.component.html',
    styleUrls: ['./two-way.component.css'],
    imports: [FormsModule]
})
export class TwoWayComponent {
  two = "initial value";
}
