import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
// import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { ListComponent } from './list/list.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ProductsComponent } from './category/products/products.component';
import{OrderComponent} from './category/order/order.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    AdduserComponent,
    ProductsComponent,OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpModule,HttpClientModule,FormsModule,ReactiveFormsModule,
    // CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
