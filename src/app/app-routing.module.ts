import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsModule } from './products/products.module';

const routes: Routes = [
{
  path:'',redirectTo:'products',pathMatch:'full'
  
},
// { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
{ path: 'products', loadChildren: () => ProductsModule },
{
  path:'**',component:PageNotFoundComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
