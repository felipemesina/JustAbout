import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  routeSub: any;
  message: String = '';
  messageClass: String = '';
  products;
  query;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService
  ) { }

  ngOnInit() {
    this._route.params
    .subscribe( params => {
      this.query = params['query'];
    })
    this._productService.search(this.query)
    .subscribe( data => {
      if (!data.success) {
        this.message = data.message;
        this.messageClass = "text-danger";
      } else {
        this.products = data.products;
      }
    })

  }

}
