import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from '../app/components/product-list/product-list.component';
import {ProductItemDetailComponent} from '../app/components/product-item-detail/product-item-detail.component';
import {CartComponent} from '../app/components/cart/cart.component';
import {ConfirmationComponent} from '../app/components/confirmation/confirmation.component'

const routes: Routes = [
  {path:'', component: ProductListComponent},
  {path:'product/:id', component: ProductItemDetailComponent},
  {path:'cart', component: CartComponent},
  {path:'confirmation', component: ConfirmationComponent},
  {path:'*', redirectTo: '/', pathMatch: 'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
