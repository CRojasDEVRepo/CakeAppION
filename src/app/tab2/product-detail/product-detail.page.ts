import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/api/products/products.service';
import { Product } from 'src/app/shared/models/Product';
import { environment } from 'src/environments/environment';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { OrderProductPage } from '../order-product/order-product.page';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  public urlStorage: string = environment.urlStorage;
  public product: Product = {_id:'', image:'', name:'', description:'', price:0, score:0, delivery_time:0, category:0};

  constructor(private route: ActivatedRoute, private productService: ProductsService, public modalController: ModalController) { }

  ngOnInit() {
    this.getRouteParams();
  }

  private getRouteParams(): void {
    this.route.params.subscribe(params => {
      const { id } = params;
      console.log('id: ', id)
      this.getProductDetail(id)
    });
  }

  private getProductDetail(id: string): void {
    this.productService.getProductById(id).subscribe(productResponse => {
      this.product = productResponse
      console.log('productResponse: ', productResponse)
    })
  }

  private orderProduct(): void {
    this.presentModal()
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: OrderProductPage,
      cssClass: 'modal-class',
      componentProps: {
        'id' : this.product._id,
        'name': this.product.name,
        'price': this.product.price,
        'image': this.product.image
      },
      animated: true
    });
    return await modal.present();
  }
}