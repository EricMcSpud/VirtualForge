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

  constructor( private cartService: CartService) { }

  ngOnInit(): void {
  }

  onAddToCart( product: ProductModel | null): void {
    this.cartService.addProduct( product);
  }

}
