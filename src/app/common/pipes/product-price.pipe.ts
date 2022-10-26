import { Pipe, PipeTransform } from '@angular/core';

const CURRENCY_CHAR = '£';

/**
 * The ProductPricePipe is used in place of the currency pipe to generally show
 * prices as whole integer values in this specific case of the VFapparel app.
 */
@Pipe({
  name: 'productPrice'
})
export class ProductPricePipe implements PipeTransform {

  transform( price: number | string): string {
    return CURRENCY_CHAR + (+price);  // + Converts string to number
  }

}
