import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { CartComponent } from './cart/cart.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [{ path: '', component: AllproductsComponent },
{ path: 'cart', component: CartComponent},
{ path: 'viewProduct/:id', component: ViewproductComponent},
{ path: 'wishList', component: WishlistComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
