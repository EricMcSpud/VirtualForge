import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProductListComponent } from './shopping/products/product-list/product-list.component';
import { ProductSummaryComponent } from './shopping/products/product-summary/product-summary.component';
import { ProductCartComponent } from './shopping/cart/product-cart/product-cart.component';
import { ProductSorterPipe } from './common/pipes/product-sorter.pipe';
import { ProductPricePipe } from './common/pipes/product-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductSummaryComponent,
    ProductCartComponent,
    ProductSorterPipe,
    ProductPricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
