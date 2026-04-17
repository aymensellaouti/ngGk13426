import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONFIG } from '../../config/app-const.config';

@Pipe({
  name: 'btc2usd'
})
export class Btc2usdPipe implements PipeTransform {

  transform(amount: number, isBtc2Usd = true): number {
    return isBtc2Usd ? APP_CONFIG.btcUsd * amount
                     : amount / APP_CONFIG.btcUsd;
  }

}
