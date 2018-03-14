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
  products;
  message: String = '';
  messageClass: String = '';

  constructor(
    private _authService: AuthService,
    private _productService: ProductService
  ) { }

  // getPostsThatBelongToUser() {
  //   this._productService.getPostsThatBelongToUser()
  //   .subscribe(data => {
  //     if (!data.successs) {
  //       this.message = data.message;
  //       this.messageClass = "text-danger";
  //     } else {
  //       this.products = data.products;
  //     }
  //   });
  // }

  ngOnInit() {
  this._productService.getPostsThatBelongToUser().subscribe(data => {
    if (!data.successs) {
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
