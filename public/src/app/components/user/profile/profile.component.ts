import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: String = '';
  email: String = '';
  products: {};
  message: String = '';
  messageClass: String = '';

  constructor(
    public _authService: AuthService,
    public _productService: ProductService
  ) { }

  ngOnInit() {
  this._productService.getPostsThatBelongToUser().subscribe(data => {
    if (!data.success) {
      this.message = data.message;
      this.messageClass = "text-danger";
    } else {
        this.products = data.products;
      }
  });
    this._authService.getUserProfile()
    .subscribe( profile => {
      this.username = profile.user.username
    })
  }

}
