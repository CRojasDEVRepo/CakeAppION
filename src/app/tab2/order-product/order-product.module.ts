import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderProductPageRoutingModule } from './order-product-routing.module';
import { OrderProductPage } from './order-product.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    OrderProductPageRoutingModule
  ],
  declarations: [OrderProductPage]
})
export class OrderProductPageModule {}
