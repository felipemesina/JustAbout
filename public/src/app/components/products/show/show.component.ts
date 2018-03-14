import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  product = {
    title: String,
    price: String,
    desc: String
  };
  currentUrl;
  message: String = '';
  messageClass: String = '';
  results: boolean = false;

  constructor(
    private _authService: AuthService,
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute,
    private _location: Location
  ) { }

  goBack() {
  this._location.back();
}

  ngOnInit() {
    this.currentUrl = this._activatedRoute.snapshot.params;
    this._productService.getPostById(this.currentUrl.id).subscribe(
      data => {
        if (!data.success) {
          this.message = data.message;
          this.messageClass = "text-danger";
        } else {
          this.product = data.product;
          this.results = true;
        }
      });
  }

}
