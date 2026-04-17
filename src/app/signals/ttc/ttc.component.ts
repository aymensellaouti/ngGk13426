import { CurrencyPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ttc',
  templateUrl: './ttc.component.html',
  styleUrl: './ttc.component.css',
  imports: [FormsModule, CurrencyPipe]
})
export class TtcComponent {
  // Notre state
  prixHt = signal(0);
  taxe = signal(18);
  qty = signal(1);

  unitaireTtc = computed(() => this.prixHt() * (100+this.taxe()) / 100);
  discount = computed(() => {
    let discountPercentage = 0;
    if (this.qty() >= 10 && this.qty() <= 15) {
      discountPercentage = 20;
    } else if (this.qty() > 15) {
      discountPercentage = 20;
    }
    return (this.unitaireTtc() * discountPercentage / 100);
  })
  totalTtc = computed(() => (this.unitaireTtc() - this.discount()) * this.qty())
}
