import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe'
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    ProductsComponent,
    AllproductsComponent,
    ViewproductComponent,
    CartComponent,
    WishlistComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPayPalModule,
  ]
})
export class ProductsModule { }
