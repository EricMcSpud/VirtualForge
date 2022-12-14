import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { CartService } from 'src/app/shopping/cart/cart.service';
import { ProductModel } from '../models/product-model';
import { CartUtils } from '../utils/cart-utils';

const DEFAULT_VARIANT_INDEX = 0;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

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
        }
      },
      error: (err: Error) => {
      }
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription?.unsubscribe();
  }

}
