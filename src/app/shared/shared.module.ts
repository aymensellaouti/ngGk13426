import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Btc2usdPipe } from './pipes/btc2usd.pipe';



@NgModule({
  declarations: [Btc2usdPipe],
  imports: [CommonModule],
  exports: [
    CommonModule,
    Btc2usdPipe
  ]
})
export class SharedModule {}
