import { CurrencyPipe } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  toastr = inject(ToastrService);

  #alertEffect = effect(() => {
    if(this.totalTtc() > 800 && this.totalTtc() < 1000) {
      this.toastr.warning("Faites attention vous vous approcher de votre solde seuil")
    } else if (this.totalTtc() >= 1000) {
      this.toastr.error("Vous venez de dépassez votre solde seuil, essayer de serrer la ceinture !!! :(")
    }
  })

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
