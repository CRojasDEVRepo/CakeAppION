import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  public urlStorage: String = environment.urlStorage;

  constructor() { }

  ngOnInit() {}

  

}
