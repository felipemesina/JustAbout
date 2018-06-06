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
  products;
  query;
  qString;

  constructor(
    private _authService: AuthService,
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  logout() {
    this._authService.logout();
    this._router.navigate([''])
  }

  search(){
    this._productService.search(this.keyword)
    .subscribe( data => {
      if (data.success) {
        this._router.navigate(["/searchDetail", {query: this.keyword}])
      }
       else {
         this.message = data.message;
         this.messageClass = "text-danger";
       }
    })
  }

  ngOnInit() {
    // this._route.params
    // .subscribe( params => {
    //   this.query = params['query'];
    // })
  }

}
