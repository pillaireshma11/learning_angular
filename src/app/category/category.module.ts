import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
// import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';

// import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [ProductsComponent, OrderComponent],
  imports: [
    // BrowserModule,
    ReactiveFormsModule,FormsModule, CommonModule
  ]
})
export class CategoryModule { }
