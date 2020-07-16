import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import{HeaderComponent} from './header/header.component';
import { from } from 'rxjs';
import{ProductsComponent} from './category/products/products.component';
import{OrderComponent} from './category/order/order.component';
import { ListComponent } from './list/list.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
  {
    path:'',
    component:HeaderComponent,
    
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },     
   {path:'home',component:ProductsComponent},
   {path:'list',component:ListComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'order',component:OrderComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
