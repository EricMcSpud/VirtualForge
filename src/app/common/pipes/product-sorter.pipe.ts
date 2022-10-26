import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { SortTypes } from 'src/app/common/utils/sort-types';

/**
 * The ProductSorterPipe implements the basic sorting requirement for the
 * VFapparel app. By default, it sorts by price; high to low, but for any
 * any other recognised sortType parameter (as declared in SortTypes) it
 * explicity sorts according to that parameter value.
 * 
 * NOTE: for now, only the first variant is considered for sorting by price.
 */
@Pipe({
  name: 'productSorter'
})
export class ProductSorterPipe implements PipeTransform {

  transform( products: ProductModel[], sortType: string): ProductModel[] {
    switch( sortType) {
      case SortTypes.SORTBY_TITLEAZ: {
        return this.sortByTitle( products, false);
      }
      case SortTypes.SORTBY_TITLEZA: {
        return this.sortByTitle( products, true);
      }
      case SortTypes.SORTBY_PRICELOW: {
        return this.sortByPrice( products, false);
      }
      case SortTypes.SORTBY_PRICEHIGH:
      default: {
        return this.sortByPrice( products, true);
      }
    }
  }

  private sortByPrice( products: ProductModel[], inverted: boolean): ProductModel[] {
    return products.sort( (prod1: ProductModel, prod2: ProductModel) => {
      const price1: number = +prod1.variants[0].price; // + Converts to string number
      const price2: number = +prod2.variants[0].price;
      if ( price1 < price2) {
        return (inverted === false) ? -1 : 1;
      }
      else if ( price1 > price2) {
        return (inverted === false) ? 1 : -1;
      }
      else {
        return 0;
      }
    });
  }

  private sortByTitle( products: ProductModel[], inverted: boolean): ProductModel[] {
    return products.sort( (prod1: ProductModel, prod2: ProductModel) => {
      if ( prod1.title < prod2.title) {
        return (inverted === false) ? -1 : 1;
      }
      else if ( prod1.title > prod2.title) {
        return (inverted === false) ? 1 : -1;
      }
      else {
        return 0;
      }
    });
  }

}
