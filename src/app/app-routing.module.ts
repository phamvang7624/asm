import { CartComponent } from './components/cart/cart.component';
import { Product2Component } from './components/product2/product2.component';
import { ClientComponent } from './layout/client/client.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { Banner2Component } from './components/banner2/banner2.component';
import { ProductComponent } from './components/product/product.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ProductListComponent } from './components/product-list/product-list.component';


const routes: Routes = [
  {path: '',component:ClientComponent,children: [
    
    ]},
    {path: 'dashboard',component:AdminComponent,children: [
      {path:'product',component:ProductListComponent},
     
    ]},
    {path: 'dashboard',component:Product2Component,children: [
      {path:'product2',component:Product2Component},
    ]},
    {path: 'dashboard',component:CartComponent,children: [
      {path:'cart',component:CartComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
