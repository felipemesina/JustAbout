import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;
  message;
  messageClass;

  constructor(
    private _productService: ProductService
  ) { }

  getPosts() {
    console.log("this is the products component")
    this._productService.getPosts()
    .subscribe(data => {
      if (!data.success) {
        this.message = data.message;
        this.messageClass = "text-danger";
      } else {
        this.products = data.products;
      }
    });
  }

  ngOnInit() {
    this.getPosts();
  }

}
