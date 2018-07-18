import { Injectable } from '@angular/core';
import{ Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class ProductService {

  domain =  "http://13.57.187.68/";
  options;

  constructor(
    private _http: Http,
    private _router: Router,
    public _authService: AuthService
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
    return this._http.post(this.domain + "products/createPost", post, this.options)
    .map(res => res.json());
  }

  getPosts() {
    console.log("this is the Product Service...")
    return this._http.get(this.domain + "authentication/getPosts")
    .map(res => res.json());
  }

  getPostById(id) {
    return this._http.get(this.domain + "authentication/getPostById/" + id)
    .map(res => res.json());
  }

  updatePost(product) {
    this.authenticateUser();
    return this._http.put(this.domain + "products/updatePost", product, this.options)
    .map(res => res.json());
  }

  getPostsThatBelongToUser() {
    this.authenticateUser();
    return this._http.get(this.domain + "products/getPostsThatBelongToUser", this.options)
    .map(res => res.json());
  }

  deletePost(id) {
    this.authenticateUser();
    return this._http.delete(this.domain + "products/deletePost/" + id, this.options)
    .map(res => res.json());
  }

  postComment(id, comment) {
    this.authenticateUser();
    const commentData = {
      id: id,
      comment: comment
    }
    return this._http.post(this.domain + "products/comment", commentData, this.options)
    .map(res => res.json());
  }

  getProductsByCategory(category_name) {
    return this._http.get(this.domain + "authentication/category/" + category_name)
    .map(res => res.json());
  }

  search(searchTerm) {
    return this._http.get(this.domain + "authentication/search", {params: { query: searchTerm}})
    .map(res => res.json());
  }
}
