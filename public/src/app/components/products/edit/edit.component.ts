import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form;
  message: string = '';
  messageClass: string = '';
  processing: boolean = false;
  currentUrl;
  product;
  email;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _productService: ProductService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _location: Location
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this._formBuilder.group({
      title: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ])],
      price: ['', Validators.required],
      desc: ['', Validators.required],
      location: ['', Validators.required],
      category: ['', Validators.required],
      created_by: ['']
      // image: [Validators.required]
  })
}

disableForm() {
  this.form.controls['title'].disable();
  this.form.controls['price'].disable();
  this.form.controls['desc'].disable();
  this.form.controls['location'].disable();
  this.form.controls['category'].disable();
  // this.form.controls['image'].disable();
}

// Function to enable the registration form
enableForm() {
  this.form.controls['title'].enable();
  this.form.controls['price'].enable();
  this.form.controls['desc'].enable();
  this.form.controls['location'].enable();
  this.form.controls['category'].enable();
  // this.form.controls['image'].enable();
}

updatePost() {
  this.processing = true;
  this.disableForm();
  this._productService.updatePost(this.product)
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
        this._router.navigate(['profile']); // Redirect to login view
      }, 1250);
  });
}

  ngOnInit() {
    this.currentUrl = this._activatedRoute.snapshot.params;
    this._productService.getPostById(this.currentUrl.id).subscribe(
      data => {
        if (!data.success) {
          this.message = data.message;
          this.messageClass = "text-danger";
        } else {
          this.product = data.product;
        }
      });
  }

}
