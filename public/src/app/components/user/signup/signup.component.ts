import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  message: string = '';
  messageClass: string = '';
  processing: boolean = false;
  isEmailValid: boolean = false;
  isUsernameValid: boolean = false;
  emailMessage: string = '';
  usernameMessage: string = '';

  constructor(
    private _formBuilder: FormBuilder,
    public _authService: AuthService,
    private _router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this._formBuilder.group({
      // Username Input
      username: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length is 3 characters
        Validators.maxLength(15), // Maximum length is 15 characters
        this.validateUsername // Custom validation
      ])],
      // Email Input
      email: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(10), // Minimum length is 5 characters
        Validators.maxLength(30), // Maximum length is 30 characters
        this.validateEmail // Custom validation
      ])],
      // Password Input
      password: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(8), // Minimum length is 8 characters
        Validators.maxLength(35), // Maximum length is 35 characters
        this.validatePassword // Custom validation
      ])],
      // Confirm Password Input
      confirm: ['', Validators.required] // Field is required
    }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
  }

  // Function to validate e-mail is proper format
  validateEmail(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    // Test email against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid email
    } else {
      return { 'validateEmail': true } // Return as invalid email
    }
  }

  // Function to validate username is proper format
  validateUsername(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    // Test username against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid username
    } else {
      return { 'validateUsername': true } // Return as invalid username
    }
  }

  // Function to validate password
  validatePassword(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,35}$/);
    // Test password against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid password
    } else {
      return { 'validatePassword': true } // Return as invalid password
    }
  }

  // Funciton to ensure passwords match
  matchingPasswords(password, confirm) {
    return (group: FormGroup) => {
      // Check if both fields are the same
      if (group.controls[password].value === group.controls[confirm].value) {
        return null; // Return as a match
      } else {
        return { 'matchingPasswords': true } // Return as error: do not match
      }
    }
  }

  disableForm() {
    this.form.controls['username'].disable();
    this.form.controls['email'].disable();
    this.form.controls['password'].disable();
    this.form.controls['confirm'].disable();
  }

  // Function to enable the registration form
  enableForm() {
    this.form.controls['username'].enable();
    this.form.controls['email'].enable();
    this.form.controls['password'].enable();
    this.form.controls['confirm'].enable();
  }

  onRegisterSubmit() {
    this.processing = true;
    this.disableForm();
    const user = {
      username: this.form.get('username').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }
    this._authService.signUp(user)
    .subscribe( data => {
      if (!data.success) {
        this.processing = false;
        this.message = data.message;
        this.messageClass = "text-danger"
        this.enableForm();
      } else {
        this.message = data.message;
        this.messageClass = "text-primary"
      }
      setTimeout(() => {
          this._router.navigate(['login']); // Redirect to login view
        }, 1250);
    });
}

isUsernameTaken() {
  this._authService.isUsernameAvailable(this.form.get('username').value)
  .subscribe(data => {
    if (!data.success) {
      this.isUsernameValid = false;
      this.usernameMessage = data.message;
    } else {
      this.isUsernameValid = true;
      this.usernameMessage = data.message;
    }
  });
}

isEmailTaken() {
    this._authService.isEmailAvailable(this.form.get('email').value)
    .subscribe(data => {
      if (!data.success) {
        this.isEmailValid = false;
        this.emailMessage = data.message;
      } else {
        this.isEmailValid = true;
        this.emailMessage = data.message;
      }
    });
  }

  ngOnInit() {
  }
}
