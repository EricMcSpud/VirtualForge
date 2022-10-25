import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { ProductModel } from 'src/app/common/models/product-model';
import { ProductListModel } from 'src/app/common/models/product-list-model';

const PRODUCTS_KEY = 'list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  availableProducts: Array<ProductModel> = new Array<ProductModel>();

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe( {
      next: (list: ProductListModel) => {
        this.availableProducts = list.products;
      },
      error: (err: Error) => {
        console.error(`ProductListComponent; failed to acquire list list because: ${err.message}.`);
      }
    });
  }

  onSortByChanged( value: any): void {
    let x = 6;
  }
}
