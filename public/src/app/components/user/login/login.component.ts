import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../../guards/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  message: string = '';
  messageClass: string = '';
  processing: boolean = false;
  previousUrl: string = ''

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _authGuard: AuthGuard
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this._formBuilder.group({
      // Username Input
      username: ['', Validators.required],
      password: ['', Validators.required] // Field is required],
      // Confirm Password Input
    })
  }

  disableForm() {
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
  }

  enableForm() {
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
  }

  login() {
    this.processing = true;
    this.disableForm();
    const user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }
    this._authService.login(user)
    .subscribe( data => {
      if (!data.success) {
        this.processing = false;
        this.message = data.message;
        this.messageClass = "text-danger"
        this.enableForm();
      } else {
        this.message = data.message;
        this.messageClass = "text-primary";
        this._authService.saveUserData(data.token, data.user);
        setTimeout(() => {
          if (this.previousUrl) {
            this._router.navigate([this.previousUrl]);
          } else {
            this._router.navigate(['profile']);
            }
          }, 1000);
      }
    });
  }

  ngOnInit() {
    if (this._authGuard.redirectUrl) {
      this.messageClass = "text-danger";
      this.message = "Please log in to view that page";
      this.previousUrl = this._authGuard.redirectUrl;
      this._authGuard.redirectUrl = undefined;
    }
  }

}
