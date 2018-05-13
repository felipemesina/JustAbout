import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  message: String = '';
  messageClass: String = '';
  keyword;

  constructor(
    private _authService: AuthService,
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  logout() {
    this._authService.logout();
    this._router.navigate([''])
  }

  search(){
    if (this.keyword) {
        this._router.navigate(["/search", {query: this.keyword }])
    } else {
      this.message = "Please enter the name of the item you want to search for"
    }
  }

  changeSearch($event) {
    if (this.keyword) {
        this._router.navigate(["/search", {query: this.keyword }])
    } else {
      this.message = "Please enter the name of the item you want to search for"
    }
  }

  ngOnInit() {
  }

}
