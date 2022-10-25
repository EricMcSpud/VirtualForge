import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { ProductModel } from 'src/app/common/models/product-model';
import { ProductListModel } from 'src/app/common/models/product-list-model';

const PRODUCTS_KEY = 'list';
const SORTBY_PRICEHIGH = 'priceHigh';
const SORTBY_PRICELOW = 'priceLow';
const SORTBY_TITLEAZ = 'titleAZ';
const SORTBY_TITLEZA = 'titleZA';

class SelectOption {
  value: string;
  description: string;
  constructor( value: string, description: string) {
    this.value = value;
    this.description = description;
  }
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  availableProducts: Array<ProductModel> = new Array<ProductModel>();
  sortByOptions: SelectOption[] = [
    new SelectOption( SORTBY_PRICEHIGH, 'Highest Price'),
    new SelectOption( SORTBY_PRICELOW, 'Lowest Price'),
    new SelectOption( SORTBY_TITLEAZ, 'Title - A to Z'),
    new SelectOption( SORTBY_TITLEZA, 'Title - Z to A')
  ];
  sortByValue: string = SORTBY_PRICEHIGH;

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
    this.sortByValue = value;
  }
}
