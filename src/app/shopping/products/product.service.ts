import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { ProductListModel } from 'src/app/common/models/product-list-model';

const defaultProductUrl = 'https://efuktshirts.com/products.json';

/**
 * The ProductService implements a simple HTTP getter to acquire a list of
 * products from the configured back-end endpoint. An override endpoint URL
 * can also be declared in the enviroment configs.
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = defaultProductUrl;

  constructor( private httpClient: HttpClient) {
    // Override the default target if contained in environment vars
    if ( environment.productUrl) {
      this.productUrl = environment.productUrl;
    }
  }

  getAllProducts(): Observable<ProductListModel> {
    return this.httpClient.get<ProductListModel>(this.productUrl);
  }

}
