import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  product;
  currentUrl;
  message: String = '';
  messageClass: String = '';
  results: boolean = false;
  username: String = '';
  email: String = '';
  commentForm: FormGroup;
  processing: boolean = false;
  commentMessage: String = '';

  constructor(
    public _authService: AuthService,
    public _productService: ProductService,
    private _activatedRoute: ActivatedRoute,
    private _location: Location,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.createCommentForm();
  }

  disableForm() {
    this.commentForm.controls['comment'].disable();
  }

  // Function to enable the registration form
  enableForm() {
    this.commentForm.controls['comment'].enable();
  }


  createCommentForm() {
    this.commentForm = this._formBuilder.group({
      comment: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250)
      ])]
  })
  }

  postComment(id) {
    this.disableForm();
    this.processing = true;
    const comment = this.commentForm.get('comment').value;
    this._productService.postComment(id, comment)
    .subscribe( data => {
      if (!data.success) {
        this.enableForm();
        this.commentMessage = data.message;
        this.messageClass = "text-danger";
      } else {
        this.processing = false;
        this.commentMessage = data.message;
        this.messageClass = "text-primary";
        setTimeout(() => {
          location.reload();
        }, 1250);
      }
    })
  }

  ngOnInit() {
    this.currentUrl = this._activatedRoute.snapshot.params;
    this._productService.getPostById(this.currentUrl.id).subscribe(
      data => {
        if (!data.success) {
          this.message = data.message;
          this.messageClass = "text-danger";
        } else {
          console.log(data.product.image)
          this.product = data.product;
          this.results = true;
        }
      });
      if (this._authService.ifLoggedIn()) {
        this._authService.getUserProfile()
        .subscribe( profile => {
          this.username = profile.user.username;
          this.email = profile.user.email;
        });
      }
  }

  goBack() {
  this._location.back();
}

}
