import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: String = '';

  constructor(
    private _productService: ProductService
  ) { }

  getPosts() {
    this._productService.getPosts()
    .subscribe(data => {
      this.products = data.products
    });
  }

  ngOnInit() {
    this.getPosts();
  }

}
