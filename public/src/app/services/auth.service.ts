import { Injectable } from '@angular/core';
import{ Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from "angular2-jwt";
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  domain = environment.domain;
  authToken;
  user;
  options;

  constructor(
    private _http: Http,
    private _router: Router
  ) { }

  authenticateUser() {
    this.retrieveToken();
    this.options = new RequestOptions({
      headers: new Headers({
        "authorization": this.authToken
      })
    });
  }

  retrieveToken() {
    this.authToken = localStorage.getItem("token");
  }

  signUp(user) {
    return this._http.post(this.domain + "authentication/signUp", user)
    .map( res => res.json());
  }

  isUsernameAvailable(username) {
    return this._http.get(this.domain + "authentication/isUsernameAvailable/" + username)
    .map( res => res.json());
  }

  isEmailAvailable(email){
    return this._http.get(this.domain + "authentication/isEmailAvailable/" + email)
    .map( res => res.json());
  }

  login(user) {
    console.log("this is the login in auth service")
    return this._http.post(this.domain + "authentication/login", user)
    .map( res => res.json());
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  saveUserData(token, user) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getUserProfile() {
    this.authenticateUser();
    return this._http.get(this.domain + "authentication/profile", this.options)
    .map( res => res.json());
  }

  ifLoggedIn() {
    return tokenNotExpired();
  }
}
