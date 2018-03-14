import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  form: FormGroup;
  message: string = '';
  messageClass: string = '';
  processing: boolean = false;
  email: String = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _productService: ProductService,
    private _router: Router
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
      created_by: ['']
      // image: [Validators.required]
  })
}

  disableForm() {
    this.form.controls['title'].disable();
    this.form.controls['price'].disable();
    this.form.controls['desc'].disable();
    this.form.controls['location'].disable();
    // this.form.controls['image'].disable();
  }

  // Function to enable the registration form
  enableForm() {
    this.form.controls['title'].enable();
    this.form.controls['price'].enable();
    this.form.controls['desc'].enable();
    this.form.controls['location'].enable();
    // this.form.controls['image'].enable();
  }

  postProduct() {
    this.processing = true;
    this.disableForm();
    const post = {
      title: this.form.get('title').value,
      price: this.form.get('price').value,
      desc: this.form.get('desc').value,
      location: this.form.get('location').value,
      // image: this.form.get('image').value
      created_by: this.email
    }
    this._productService.createPost(post)
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
    this._authService.getUserProfile()
    .subscribe( profile => {
      this.email = profile.user.email;
    })
  }

}
