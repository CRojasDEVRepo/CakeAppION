import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import { ProductsService } from '../api/products/products.service';
import { Product } from '../shared/models/Product';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  public products: Array<Product> = [];
  
    public filterOptions: Array<any> =[
      {
        id:2,
        icon: 'assets/icon/cake.png',
        label: 'Cakes'
      },
      {
        id: 1,
        icon: 'assets/icon/coffee.png',
        label: 'Coffees'
      },
      {
        id: 3,
        icon: 'assets/icon/cinnamon-roll.png',
        label: 'Desserts'
      },
      {
        id: 0,
        icon: null,
        label: 'All'
      }
    ];

    public filterActived: number = 0;   

  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts (idCategory: number = 0): void{
    if(idCategory === 0){
      this.productsService.getAll().subscribe(productsResponse => {      
        this.products = productsResponse;
      });
    } else{
    this.productsService.getProductById(idCategory).subscribe(productsResponse => {      
      this.products = productsResponse;
    });  
  }
}

  public categoryChoosed(idCategory: number){
    this.filterActived = idCategory;
    this.loadProducts(idCategory);
  }

}
