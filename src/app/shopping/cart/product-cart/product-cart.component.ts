import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { CartService } from '../cart.service';
import { ProductModel } from 'src/app/common/models/product-model';
import { CartUtils } from 'src/app/common/utils/cart-utils';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit, OnDestroy {

  currentCartProducts: Array<ProductModel> = new Array<ProductModel>();
  currentCartQuantity: number = 0;
  currentCartValue: number = 0;

  cartSubject: Subject<Array<ProductModel>> | null = null;
  cartSubscription: Subscription | null = null;

  constructor( private cartService: CartService) { }

  ngOnInit(): void {
    this.cartSubject = this.cartService.getCartSubject();
    this.cartSubscription = this.cartSubject.subscribe( {
      next: (products: Array<ProductModel>) => {
        if ( products) {
          this.currentCartQuantity = products.length;
          this.currentCartValue = CartUtils.calculateCartValue( products);
          this.currentCartProducts = products;
        }
      },
      error: (err: Error) => {
      }
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription?.unsubscribe();
  }

  onRemoveProduct( productId: number): void {
    this.cartService.removeProduct( productId);
  }

}
