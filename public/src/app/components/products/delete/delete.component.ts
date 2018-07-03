import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  currentUrl;
  product;
  message: String = '';
  messageClass: String = '';

  constructor(
    private _location: Location,
    public _authService: AuthService,
    public _productService: ProductService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  goBack() {
  this._location.back();
}

  deletePost() {
    this._productService.deletePost(this.currentUrl.id)
    .subscribe( data => {
      if (!data.success) {
        this.message = data.message;
        this.messageClass = "text-danger";
      } else {
        this.message = data.message;
        this.messageClass = "text-primary";
        setTimeout( ()=> {
          this._router.navigate(['profile']);
        }, 1250);
      }
    })
  }

  ngOnInit() {
    this.currentUrl = this._activatedRoute.snapshot.params;
    this._productService.getPostById(this.currentUrl.id).subscribe(
      data => {
        if (!data.success) {
          this.message = data.message;
          this.messageClass = "text-danger";
        } else {
          this.product = {
            title: data.product.title,
            price: data.product.price,
            location: data.product.location,
            desc: data.product.desc,
            category: data.product.category,
            image: data.product.image,
            created_by: data.product.created_by,
            created_at: data.product.created_at
          }
        }
      });
  }

}
