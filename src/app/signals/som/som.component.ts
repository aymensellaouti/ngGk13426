import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-som',
  imports: [FormsModule],
  templateUrl: './som.component.html',
  styleUrl: './som.component.css'
})
export class SomComponent {
  x = signal(0);
  y = signal(0);
  z = computed(() => this.x() + this.y());
  zz = computed(() => {
    console.log('in zz');

    return 2 * this.z()
  })
}
