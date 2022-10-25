import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductModel } from 'src/app/common/models/product-model';

/**
 * The CartService implements a semi-persistent store for products selected by
 * the user, and added or removed from their shopping cart.
 * 
 * It makes an RxJS Subject available to the rest of the application which can
 * be used to populate, say, the cart view, item totals, or simply the current
 * total cost. Each time a product is added or removed from the cart, the
 * updated product list is published to the Subject.
 */
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartStore: Array<ProductModel> = new Array<ProductModel>();
  private cartSubject: Subject<Array<ProductModel>> = new Subject<Array<ProductModel>>();
  
  constructor() {
    this.cartSubject.next( this.cartStore);
  }

  addProduct( product: ProductModel | null): Array<ProductModel> {
    if ( product && this.notAlreadyAdded( product)) {
      this.cartStore.push( product);
      this.cartSubject.next( this.cartStore);
    }
    return JSON.parse( JSON.stringify( this.cartStore));
  }

  removeProduct( productId: number): Array<ProductModel> {
    // TBS: implement cart product remove
    const foundIndex = this.cartStore.findIndex( (cartProduct: ProductModel) => {
      return (productId === cartProduct.id);
    });
    if ( foundIndex >= 0) {
      this.cartStore.splice( foundIndex, 1);
      this.cartSubject.next( this.cartStore);
    }
    return JSON.parse( JSON.stringify( this.cartStore));
  }

  removeAll(): Array<ProductModel> {
    this.cartStore = new Array<ProductModel>();
    this.cartSubject.next( this.cartStore);
    return JSON.parse( JSON.stringify( this.cartStore));
  }

  getCartSubject(): Subject<Array<ProductModel>> {
    return this.cartSubject;
  }

  private notAlreadyAdded( product: ProductModel): boolean {
    const foundProduct = this.cartStore.find( (cartProduct: ProductModel) => {
      return (product.id === cartProduct.id);
    });
    return (foundProduct == null);
  }
}
