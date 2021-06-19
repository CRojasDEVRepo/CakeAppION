import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/api/products/products.service';
import { ToastService } from 'src/app/shared/services/toast-service/toast-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.page.html',
  styleUrls: ['./order-product.page.scss'],
})
export class OrderProductPage {

  @Input() id: string;
  @Input() name: string;
  @Input() price: string;
  @Input() image: string;
  
  public urlStorage: string = environment.urlStorage;
  addressInput = new FormControl('', Validators.required);
  loading: any


  constructor(
    public modalController: ModalController,
    private route: Router, 
    private productService: ProductsService,
    private toastService: ToastService,
    public loadingController: LoadingController) { }

  dismissOrderModal() {
    this.modalController.dismiss();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await this.loading.present();
  }

  async orderProduct() {
    let order = {
      product_id: this.id,
      address: this.addressInput.value
    };
    this.presentLoading();

    (await this.productService.orderProduct(order)).subscribe(async orderResponse => {
    this.route.navigate(['/home']);
    this.modalController.dismiss();
    this.loading.dismiss()
    this.toastService.showToastMessage("Created order!")
    
    }, error =>{
      this.toastService.showToastMessage("Error ocurred while creating order.")
    })
  }
}
