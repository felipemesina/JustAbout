import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {

  routeSub: any;
  message: String = '';
  messageClass: String = '';
  products;
  query;
  qString;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _router: Router

  ) { }

  ngOnInit() {
    this._route.params
    .subscribe( params => {
      this.query = params['query'];
      console.log(this.query)
    })
    this._productService.search(this.query)
    .subscribe( data => {
      if (!data.success) {
        this.message = data.message;
        this.messageClass = "text-danger";
      } else {
        this._router.navigate(["/search", {query: this.query}])
      }
    })
  }

}
