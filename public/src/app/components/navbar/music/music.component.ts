import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  currentUrl;
  message: String = '';
  messageClass: String = '';
  products;

  constructor(
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentUrl = this._activatedRoute.snapshot.routeConfig['path'];
    this._productService.getProductsByCategory(this.currentUrl)
    .subscribe( data => {
      if (!data.success) {
        this.message = data.message;
        this.messageClass = "text-danger";
      } else {
        this.products = data.products
      }
    })

  }

}
