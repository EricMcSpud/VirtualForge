import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/common/models/product-model';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.css']
})
export class ProductSummaryComponent implements OnInit {

  @Input() product: ProductModel | null = null;

  defaultProductImage = '';
  defaultProductPrice = 0;

  constructor( private cartService: CartService) { }

  ngOnInit(): void {
    if ( this.product) {
      this.defaultProductImage = (this.product.variants[0].featured_image) ? this.product.variants[0].featured_image.src : this.product.images[0].src;
      this.defaultProductPrice = +this.product.variants[0].price;
    }
  }

  onAddToCart( product: ProductModel | null): void {
    this.cartService.addProduct( product);
  }

}
