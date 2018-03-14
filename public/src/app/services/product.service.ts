import { Injectable } from '@angular/core';
import{ Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class ProductService {

  domain: string = "http://localhost:3200"
  options;


  constructor(
    private _http: Http,
    private _router: Router,
    private _authService: AuthService
  ) { }

  authenticateUser() {
  this._authService.retrieveToken();
  this.options = new RequestOptions({
    headers: new Headers({
      'authorization': this._authService.authToken
      })
    });
  }

  createPost(post) {
    this.authenticateUser();
    return this._http.post(this.domain + "/products/createPost", post, this.options)
    .map(res => res.json());
  }

  getPosts() {
    return this._http.get(this.domain + "/authentication/getPosts")
    .map(res => res.json());
  }

  getPostById(id) {
    return this._http.get(this.domain + "/authentication/getPostById/" + id)
    .map(res => res.json());
  }

  updatePost(product) {
    this.authenticateUser();
    return this._http.put(this.domain + "/products/updatePost", product, this.options)
    .map(res => res.json());
  }

  getPostsThatBelongToUser() {
    this.authenticateUser();
    return this._http.get(this.domain + "/products/getPostsThatBelongToUser", this.options)
    .map(res => res.json());
  }

}
