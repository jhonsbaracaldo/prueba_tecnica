import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/product/product.component';
import { SaleComponent } from './components/sale/sale.component';
import { VendedorComponent } from './components/seller/seller.component';
import { ProductALLComponent } from './components/product-all/product-all.component';
import { SellerAllComponent } from './components/seller-all/seller-all.component';
import { SaleAllComponent } from './components/sale-all/sale-all.component';

const routes: Routes = [

  { path: 'producto', component: ProductoComponent },
  { path: 'venta', component: SaleComponent },
  { path: 'vendedor', component: VendedorComponent },
  { path: 'modificar-productos', component: ProductALLComponent},
  { path: 'modificar-vendedor', component: SellerAllComponent},
  { path: 'modificar-venta', component: SaleAllComponent},
   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
