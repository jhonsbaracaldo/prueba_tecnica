import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductoComponent } from './components/product/product.component';
import { SaleComponent } from './components/sale/sale.component';
import { VendedorComponent } from './components/seller/seller.component';
import { ProductALLComponent } from './components/product-all/product-all.component';
import { SaleAllComponent } from './components/sale-all/sale-all.component';
import { SellerAllComponent } from './components/seller-all/seller-all.component';



@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    ProductALLComponent,
    SaleAllComponent,
    SellerAllComponent,
    VendedorComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   // Import para servicios HTTP
    FormsModule         // Import para manejar formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
