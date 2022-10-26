import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { ProductModel } from 'src/app/common/models/product-model';
import { ProductListModel } from 'src/app/common/models/product-list-model';
import { SortTypes } from 'src/app/common/utils/sort-types';

const PRODUCTS_KEY = 'list';

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
    new SelectOption( SortTypes.SORTBY_PRICEHIGH, 'Highest Price'),
    new SelectOption( SortTypes.SORTBY_PRICELOW, 'Lowest Price'),
    new SelectOption( SortTypes.SORTBY_TITLEAZ, 'Title - A to Z'),
    new SelectOption( SortTypes.SORTBY_TITLEZA, 'Title - Z to A')
  ];
  sortByType: string = SortTypes.SORTBY_PRICEHIGH;

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe( {
      next: (list: ProductListModel) => {
        this.availableProducts = list.products;
      },
      error: (err: Error) => {
        console.error(`ProductListComponent; failed to acquire product list because: ${err.message}.`);
      }
    });
  }

  onSortByChanged( value: any): void {
    this.sortByType = value;
  }
}
