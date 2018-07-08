webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navbar_electronics_electronics_component__ = __webpack_require__("./src/app/components/navbar/electronics/electronics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navbar_music_music_component__ = __webpack_require__("./src/app/components/navbar/music/music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_fashion_fashion_component__ = __webpack_require__("./src/app/components/navbar/fashion/fashion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_kids_kids_component__ = __webpack_require__("./src/app/components/navbar/kids/kids.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_misc_misc_component__ = __webpack_require__("./src/app/components/navbar/misc/misc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_sports_outdoors_sports_outdoors_component__ = __webpack_require__("./src/app/components/navbar/sports-outdoors/sports-outdoors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_home_garden_home_garden_component__ = __webpack_require__("./src/app/components/navbar/home-garden/home-garden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_cars_parts_cars_parts_component__ = __webpack_require__("./src/app/components/navbar/cars-parts/cars-parts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_signup_signup_component__ = __webpack_require__("./src/app/components/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_notAuth_guard__ = __webpack_require__("./src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_products_products_component__ = __webpack_require__("./src/app/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_products_post_post_component__ = __webpack_require__("./src/app/components/products/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_products_show_show_component__ = __webpack_require__("./src/app/components/products/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_products_edit_edit_component__ = __webpack_require__("./src/app/components/products/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_products_delete_delete_component__ = __webpack_require__("./src/app/components/products/delete/delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_search_detail_search_detail_component__ = __webpack_require__("./src/app/components/search-detail/search-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_15__components_products_products_component__["a" /* ProductsComponent */] },
    { path: 'post', component: __WEBPACK_IMPORTED_MODULE_16__components_products_post_post_component__["a" /* PostComponent */] },
    { path: 'post/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_products_show_show_component__["a" /* ShowComponent */], children: [
            { path: 'edit/:id', redirectTo: '/edit/:id', pathMatch: 'full' },
            { path: 'delete/:id', redirectTo: '/delete/:id', pathMatch: 'full' }
        ] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]], children: [
            { path: 'profile/post', redirectTo: '/post', pathMatch: 'full' },
            { path: 'edit/:id', redirectTo: '/edit/:id', pathMatch: 'full' },
            { path: 'delete/:id', redirectTo: '/delete/:id', pathMatch: 'full' }
        ] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_products_edit_edit_component__["a" /* EditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'delete/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_products_delete_delete_component__["a" /* DeleteComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'electronics', component: __WEBPACK_IMPORTED_MODULE_3__components_navbar_electronics_electronics_component__["a" /* ElectronicsComponent */], children: [
            { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
        ] },
    { path: 'music', component: __WEBPACK_IMPORTED_MODULE_4__components_navbar_music_music_component__["a" /* MusicComponent */], children: [
            { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
        ] },
    { path: 'fashion', component: __WEBPACK_IMPORTED_MODULE_5__components_navbar_fashion_fashion_component__["a" /* FashionComponent */], children: [
            { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
        ] },
    { path: 'sports&outdoors', component: __WEBPACK_IMPORTED_MODULE_8__components_navbar_sports_outdoors_sports_outdoors_component__["a" /* SportsOutdoorsComponent */], children: [
            { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
        ] },
    { path: 'kids', component: __WEBPACK_IMPORTED_MODULE_6__components_navbar_kids_kids_component__["a" /* KidsComponent */], children: [
            { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
        ] },
    { path: 'home&garden', component: __WEBPACK_IMPORTED_MODULE_9__components_navbar_home_garden_home_garden_component__["a" /* HomeGardenComponent */], children: [
            { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
        ] },
    { path: 'cars&parts', component: __WEBPACK_IMPORTED_MODULE_10__components_navbar_cars_parts_cars_parts_component__["a" /* CarsPartsComponent */], children: [
            { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
        ] },
    { path: 'misc', component: __WEBPACK_IMPORTED_MODULE_7__components_navbar_misc_misc_component__["a" /* MiscComponent */], children: [
            { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
        ] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_11__components_user_signup_signup_component__["a" /* SignupComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_notAuth_guard__["a" /* NotAuthGuard */]], children: [
            { path: 'signup/login', redirectTo: '/login', pathMatch: 'full' }
        ] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__components_user_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_notAuth_guard__["a" /* NotAuthGuard */]] },
    { path: 'category/:category_name', redirectTo: ':category_name', pathMatch: 'full' },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_20__components_search_search_component__["a" /* SearchComponent */], children: [
            { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
        ] },
    { path: 'searchDetail', component: __WEBPACK_IMPORTED_MODULE_21__components_search_detail_search_detail_component__["a" /* SearchDetailComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_electronics_electronics_component__ = __webpack_require__("./src/app/components/navbar/electronics/electronics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_music_music_component__ = __webpack_require__("./src/app/components/navbar/music/music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_sports_outdoors_sports_outdoors_component__ = __webpack_require__("./src/app/components/navbar/sports-outdoors/sports-outdoors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_fashion_fashion_component__ = __webpack_require__("./src/app/components/navbar/fashion/fashion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_cars_parts_cars_parts_component__ = __webpack_require__("./src/app/components/navbar/cars-parts/cars-parts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_kids_kids_component__ = __webpack_require__("./src/app/components/navbar/kids/kids.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navbar_home_garden_home_garden_component__ = __webpack_require__("./src/app/components/navbar/home-garden/home-garden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_misc_misc_component__ = __webpack_require__("./src/app/components/navbar/misc/misc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_signup_signup_component__ = __webpack_require__("./src/app/components/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_notAuth_guard__ = __webpack_require__("./src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_products_products_component__ = __webpack_require__("./src/app/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_products_post_post_component__ = __webpack_require__("./src/app/components/products/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_products_show_show_component__ = __webpack_require__("./src/app/components/products/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_products_edit_edit_component__ = __webpack_require__("./src/app/components/products/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_products_delete_delete_component__ = __webpack_require__("./src/app/components/products/delete/delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_products_footer_footer_component__ = __webpack_require__("./src/app/components/products/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_search_detail_search_detail_component__ = __webpack_require__("./src/app/components/search-detail/search-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_electronics_electronics_component__["a" /* ElectronicsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_music_music_component__["a" /* MusicComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_sports_outdoors_sports_outdoors_component__["a" /* SportsOutdoorsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_fashion_fashion_component__["a" /* FashionComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_navbar_cars_parts_cars_parts_component__["a" /* CarsPartsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_navbar_kids_kids_component__["a" /* KidsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_navbar_home_garden_home_garden_component__["a" /* HomeGardenComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_navbar_misc_misc_component__["a" /* MiscComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_user_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_products_post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_products_show_show_component__["a" /* ShowComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_products_edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_products_delete_delete_component__["a" /* DeleteComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_products_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_search_detail_search_detail_component__["a" /* SearchDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_23__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_20__guards_notAuth_guard__["a" /* NotAuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/navbar/cars-parts/cars-parts.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n  background-color: #ededed;\n  padding: 6px 6px 30px 6px;\n}\n\n.card{\n  width: 250px;\n  min-height: 250px;\n  max-height: 330px;\n  margin: 6px 6px;\n  padding-bottom: 10px;\n  display: inline-block;\n  border: none;\n}\n\n.card-text{\n  line-height: 10px;\n  font-size: .9em;\n  text-align: center;\n}\n\n.text-color{\n  color: #000;\n}\n\n.price{\n  font-size: 12px;\n  line-height: 8px;\n  vertical-align: top;\n}\n\n.banner{\n  width: 100%;\n}\n\n.card-img-top{\n    max-width: inherit;\n    max-height: 250px;\n    min-height: 250px;\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n    padding: 10px;\n}\n"

/***/ }),

/***/ "./src/app/components/navbar/cars-parts/cars-parts.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <img class=\"banner\" src=\"../../../assets/images/site_images/car0603.jpg\" alt=\"\">\n</header>\n<div class=\"container-fluid\">\n  <div class=\"card\" *ngFor=\"let product of products\">\n    <a [routerLink]=\"['post/', product._id]\">\n      <img class=\"card-img-top\" src=\"{{product.image}}\" alt=\"{{product._id}}\">\n        <p class=\"card-text\">{{ product.title }}</p>\n        <p class=\"card-text text-color\">${{ product.price }}</p>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/cars-parts/cars-parts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsPartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarsPartsComponent = /** @class */ (function () {
    function CarsPartsComponent(_productService, _activatedRoute) {
        this._productService = _productService;
        this._activatedRoute = _activatedRoute;
        this.message = '';
        this.messageClass = '';
    }
    CarsPartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this._activatedRoute.snapshot.routeConfig['path'];
        this._productService.getProductsByCategory(this.currentUrl)
            .subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = "text-danger";
            }
            else {
                _this.products = data.products;
            }
        });
    };
    CarsPartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cars-parts',
            template: __webpack_require__("./src/app/components/navbar/cars-parts/cars-parts.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/cars-parts/cars-parts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CarsPartsComponent);
    return CarsPartsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/electronics/electronics.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n  background-color: #ededed;\n  padding: 6px 6px 30px 6px;\n}\n\n.card{\n  width: 250px;\n  min-height: 250px;\n  max-height: 330px;\n  margin: 6px 6px;\n  padding-bottom: 10px;\n  display: inline-block;\n  border: none;\n}\n\n.card-text{\n  line-height: 10px;\n  font-size: .9em;\n  text-align: center;\n}\n\n.text-color{\n  color: #000;\n  }\n\n.price{\n  font-size: 12px;\n  line-height: 8px;\n  vertical-align: top;\n  }\n\n.banner{\n  width: 100%;\n  }\n\n.card-img-top{\n    max-width: inherit;\n    max-height: 250px;\n    min-height: 250px;\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n    padding: 10px;\n  }\n"

/***/ }),

/***/ "./src/app/components/navbar/electronics/electronics.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <img class=\"banner\" src=\"../../../assets/images/site_images/electronics0603.jpg\" alt=\"\">\n</header>\n<div class=\"container-fluid\">\n  <div class=\"card\" *ngFor=\"let product of products\">\n    <a [routerLink]=\"['post/', product._id]\">\n      <img class=\"card-img-top\" src=\"{{product.image}}\" alt=\"{{product._id}}\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">{{ product.title }}</p>\n        <p class=\"card-text text-color\">${{ product.price }}</p>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/electronics/electronics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronicsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElectronicsComponent = /** @class */ (function () {
    function ElectronicsComponent(_productService, _activatedRoute) {
        this._productService = _productService;
        this._activatedRoute = _activatedRoute;
        this.message = '';
        this.messageClass = '';
    }
    ElectronicsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this._activatedRoute.snapshot.routeConfig['path'];
        this._productService.getProductsByCategory(this.currentUrl)
            .subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = "text-danger";
            }
            else {
                _this.products = data.products;
            }
        });
    };
    ElectronicsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-electronics',
            template: __webpack_require__("./src/app/components/navbar/electronics/electronics.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/electronics/electronics.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ElectronicsComponent);
    return ElectronicsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/fashion/fashion.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n  background-color: #ededed;\n  padding: 6px 6px 30px 6px;\n}\n\n.card{\n  width: 250px;\n  min-height: 250px;\n  max-height: 330px;\n  margin: 6px 6px;\n  padding-bottom: 10px;\n  display: inline-block;\n  border: none;\n}\n\n.card-text{\n  line-height: 10px;\n  font-size: .9em;\n  text-align: center;\n}\n\n.text-color{\n  color: #000;\n  }\n\n.price{\n  font-size: 12px;\n  line-height: 8px;\n  vertical-align: top;\n  }\n\n.banner{\n  width: 100%;\n  }\n\n.card-img-top{\n    max-width: inherit;\n    max-height: 250px;\n    min-height: 250px;\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n    padding: 10px;\n  }\n"

/***/ }),

/***/ "./src/app/components/navbar/fashion/fashion.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <img class=\"banner\" src=\"../../../assets/images/site_images/mens.jpg\" alt=\"\">\n</header>\n<div class=\"container-fluid\">\n  <div class=\"card\" *ngFor=\"let product of products\">\n    <a [routerLink]=\"['post/', product._id]\">\n      <img class=\"card-img-top\" src=\"{{product.image}}\" alt=\"{{product._id}}\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">{{ product.title }}</p>\n        <p class=\"card-text text-color\">${{ product.price }}</p>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/fashion/fashion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FashionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FashionComponent = /** @class */ (function () {
    function FashionComponent(_productService, _activatedRoute) {
        this._productService = _productService;
        this._activatedRoute = _activatedRoute;
        this.message = '';
        this.messageClass = '';
    }
    FashionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this._activatedRoute.snapshot.routeConfig['path'];
        this._productService.getProductsByCategory(this.currentUrl)
            .subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = "text-danger";
            }
            else {
                _this.products = data.products;
            }
        });
    };
    FashionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fashion',
            template: __webpack_require__("./src/app/components/navbar/fashion/fashion.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/fashion/fashion.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], FashionComponent);
    return FashionComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/home-garden/home-garden.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n  background-color: #ededed;\n  padding: 6px 6px 30px 6px;\n}\n\n.card{\n  width: 250px;\n  min-height: 250px;\n  max-height: 330px;\n  margin: 6px 6px;\n  padding-bottom: 10px;\n  display: inline-block;\n  border: none;\n}\n\n.card-text{\n  line-height: 10px;\n  font-size: .9em;\n  text-align: center;\n}\n\n.text-color{\n  color: #000;\n  }\n\n.price{\n  font-size: 12px;\n  line-height: 8px;\n  vertical-align: top;\n  }\n\n.banner{\n  width: 100%;\n  }\n\n.card-img-top{\n    max-width: inherit;\n    max-height: 250px;\n    min-height: 250px;\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n    padding: 10px;\n  }\n"

/***/ }),

/***/ "./src/app/components/navbar/home-garden/home-garden.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <img class=\"banner\" src=\"../../../assets/images/site_images/home.jpg\" alt=\"\">\n</header>\n<div class=\"container-fluid\">\n  <div class=\"card\" *ngFor=\"let product of products\">\n    <a [routerLink]=\"['post/', product._id]\">\n      <img class=\"card-img-top\" src=\"{{product.image}}\" alt=\"{{product._id}}\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">{{ product.title }}</p>\n        <p class=\"card-text text-color\">${{ product.price }}</p>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/home-garden/home-garden.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeGardenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeGardenComponent = /** @class */ (function () {
    function HomeGardenComponent(_productService, _activatedRoute) {
        this._productService = _productService;
        this._activatedRoute = _activatedRoute;
        this.message = '';
        this.messageClass = '';
    }
    HomeGardenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this._activatedRoute.snapshot.routeConfig['path'];
        this._productService.getProductsByCategory(this.currentUrl)
            .subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = "text-danger";
            }
            else {
                _this.products = data.products;
            }
        });
    };
    HomeGardenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-garden',
            template: __webpack_require__("./src/app/components/navbar/home-garden/home-garden.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/home-garden/home-garden.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], HomeGardenComponent);
    return HomeGardenComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/kids/kids.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n  background-color: #ededed;\n  padding: 6px 6px 30px 6px;\n}\n\n.card{\n  width: 250px;\n  min-height: 250px;\n  max-height: 330px;\n  margin: 6px 6px;\n  padding-bottom: 10px;\n  display: inline-block;\n  border: none;\n}\n\n.card-text{\n  line-height: 10px;\n  font-size: .9em;\n  text-align: center;\n}\n\n.text-color{\n  color: #000;\n  }\n\n.price{\n  font-size: 12px;\n  line-height: 8px;\n  vertical-align: top;\n  }\n\n.banner{\n  width: 100%;\n  }\n\n.card-img-top{\n    max-width: inherit;\n    max-height: 250px;\n    min-height: 250px;\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n    padding: 10px;\n  }\n"

/***/ }),

/***/ "./src/app/components/navbar/kids/kids.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <img class=\"banner\" src=\"../../../assets/images/site_images/toys0604.jpg\" alt=\"\">\n</header>\n<div class=\"container-fluid\">\n  <div class=\"card\" *ngFor=\"let product of products\">\n    <a [routerLink]=\"['post/', product._id]\">\n      <img class=\"card-img-top\" src=\"{{product.image}}\" alt=\"{{product._id}}\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">{{ product.title }}</p>\n        <p class=\"card-text text-color\">${{ product.price }}</p>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/kids/kids.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KidsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KidsComponent = /** @class */ (function () {
    function KidsComponent(_productService, _activatedRoute) {
        this._productService = _productService;
        this._activatedRoute = _activatedRoute;
        this.message = '';
        this.messageClass = '';
    }
    KidsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this._activatedRoute.snapshot.routeConfig['path'];
        this._productService.getProductsByCategory(this.currentUrl)
            .subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = "text-danger";
            }
            else {
                _this.products = data.products;
            }
        });
    };
    KidsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-kids',
            template: __webpack_require__("./src/app/components/navbar/kids/kids.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/kids/kids.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], KidsComponent);
    return KidsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/misc/misc.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n  background-color: #ededed;\n  padding: 6px 6px 30px 6px;\n}\n\n.card{\n  width: 250px;\n  min-height: 250px;\n  max-height: 330px;\n  margin: 6px 6px;\n  padding-bottom: 10px;\n  display: inline-block;\n  border: none;\n}\n\n.card-text{\n  line-height: 10px;\n  font-size: .9em;\n  text-align: center;\n}\n\n.text-color{\n  color: #000;\n  }\n\n.price{\n  font-size: 12px;\n  line-height: 8px;\n  vertical-align: top;\n  }\n\n.banner{\n  width: 100%;\n  }\n\n.card-img-top{\n    max-width: inherit;\n    max-height: 250px;\n    min-height: 250px;\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n    padding: 10px;\n  }\n"

/***/ }),

/***/ "./src/app/components/navbar/misc/misc.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <img class=\"banner\" src=\"../../../assets/images/site_images/misc0605.jpg\" alt=\"\">\n</header>\n<div class=\"container-fluid\">\n  <div class=\"card\" *ngFor=\"let product of products\">\n    <a [routerLink]=\"['post/', product._id]\">\n      <img class=\"card-img-top\" src=\"{{product.image}}\" alt=\"{{product._id}}\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">{{ product.title }}</p>\n        <p class=\"card-text text-color\">${{ product.price }}</p>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/misc/misc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiscComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MiscComponent = /** @class */ (function () {
    function MiscComponent(_productService, _activatedRoute) {
        this._productService = _productService;
        this._activatedRoute = _activatedRoute;
        this.message = '';
        this.messageClass = '';
    }
    MiscComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this._activatedRoute.snapshot.routeConfig['path'];
        this._productService.getProductsByCategory(this.currentUrl)
            .subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = "text-danger";
            }
            else {
                _this.products = data.products;
            }
        });
    };
    MiscComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-misc',
            template: __webpack_require__("./src/app/components/navbar/misc/misc.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/misc/misc.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], MiscComponent);
    return MiscComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/music/music.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n  background-color: #ededed;\n  padding: 6px 6px 30px 6px;\n}\n\n.card{\n  width: 250px;\n  min-height: 250px;\n  max-height: 330px;\n  margin: 6px 6px;\n  padding-bottom: 10px;\n  display: inline-block;\n  border: none;\n}\n\n.card-text{\n  line-height: 10px;\n  font-size: .9em;\n  text-align: center;\n}\n\n.text-color{\n  color: #000;\n  }\n\n.price{\n  font-size: 12px;\n  line-height: 8px;\n  vertical-align: top;\n  }\n\n.banner{\n  width: 100%;\n  }\n\n.card-img-top{\n    max-width: inherit;\n    max-height: 250px;\n    min-height: 250px;\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n    padding: 10px;\n  }\n"

/***/ }),

/***/ "./src/app/components/navbar/music/music.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <img class=\"banner\" src=\"../../../assets/images/site_images/instruments060318.jpg\" alt=\"\">\n</header>\n<div class=\"container-fluid\">\n  <div class=\"card\" *ngFor=\"let product of products\">\n    <a [routerLink]=\"['post/', product._id]\">\n      <img class=\"card-img-top\" src=\"{{product.image}}\" alt=\"{{product._id}}\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">{{ product.title }}</p>\n        <p class=\"card-text text-color\">${{ product.price }}</p>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/music/music.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MusicComponent = /** @class */ (function () {
    function MusicComponent(_productService, _activatedRoute) {
        this._productService = _productService;
        this._activatedRoute = _activatedRoute;
        this.message = '';
        this.messageClass = '';
    }
    MusicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this._activatedRoute.snapshot.routeConfig['path'];
        this._productService.getProductsByCategory(this.currentUrl)
            .subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = "text-danger";
            }
            else {
                _this.products = data.products;
            }
        });
    };
    MusicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-music',
            template: __webpack_require__("./src/app/components/navbar/music/music.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/music/music.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], MusicComponent);
    return MusicComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar{\n  background-color: #333333;\n}\n\n.fa-bars{\n  color: white;\n  font-size: 1.25em;\n}\n\n.navbar-brand{\n  color: #027ddd;\n}\n\n.about{\n  color: orange;\n}\n\n.nav-link{\n  color: #fff;\n  font-size: .65em;\n  font-family: futura, verdana, sans-serif;\n  margin-right: 5px;\n}\n\n#logout-btn{\n  color: white;\n}\n\n#logout-btn:hover{\n  cursor: pointer;\n}\n\n.nav-link:hover{\n  color: orange;\n}\n\nbutton{\n  background-color: #333;\n  border: none;\n}\n\nbutton:hover{\n  cursor: pointer;\n}\n\n.fa-search{\n  color: #fff;\n  padding-left: 5px;\n  padding-right: 5px;\n  font-size: 1.10em;\n}\n\n.searchbar-icon{\n  float: left;\n  color: #cccccc;\n  font-size: 1.85em;\n  padding: 6px 15px 0 0;\n}\n\ninput:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {\n    background-color: white !important;\n}\n\n.p-4{\n  height: 95px;\n  background-color: white;\n}\n\n.search-input{\n  float: left;\n  padding: 3px 15px 3px 0;\n  border: 0;\n  outline: 0;\n  border-bottom: 1px solid #e2e2e2;\n  width: 400px;\n  color: #ccc;\n  font-family: times, sans-serif;\n  font-style: italic;\n  font-size: 1.5em;\n}\n\n.search-button{\n  padding: 7px 22px;\n  border-radius: 25px;\n  background-color: #91beff;\n  float: right;\n  color: #fff;\n  font-family: futura, arial, sans-serif;\n  letter-spacing: .25em;\n  margin-left: 10px;\n}\n\n.cancel-button{\n  padding: 7px 22px;\n  border-radius: 25px;\n  background-color: #f2ba6d;\n  float: right;\n  color: #fff;\n  font-family: futura, arial, sans-serif;\n  letter-spacing: .25em;\n  margin-left: 10px;\n}\n\n::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #e2e2e2;\n    opacity: 1; /* Firefox */\n}\n\n:-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #e2e2e2;\n    opacity: 1; /* Firefox */\n}\n\n::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #e2e2e2;\n    opacity: 1; /* Firefox */\n}\n\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #e2e2e2;\n    opacity: 1; /* Firefox */\n}\n\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\n    color: #e2e2e2;\n}\n\n::-ms-input-placeholder { /* Microsoft Edge */\n    color: #e2e2e2;\n}\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg\">\n  <a class=\"navbar-brand\" [routerLink]=\"['']\">just<span class=\"about\">about</span></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <i class=\"fa fa-bars\"></i>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav text-center\">\n      <li class=\"nav-item \">\n        <a class=\"nav-link\" [routerLink]=\"['category', 'electronics']\">ELECTRONICS</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['category', 'music']\">MUSIC</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['category', 'sports&amp;outdoors']\">SPORTS &amp; OUTDOORS</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['category', 'fashion']\">FASHION</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['category', 'cars&amp;parts']\">CARS &amp; PARTS</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['category', 'kids']\">KIDS</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['category', 'home&amp;garden']\">HOME &amp; GARDEN</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['category', 'misc']\">MISC</a>\n      </li>\n      <button type=\"button\" data-toggle=\"collapse\" data-target=\"#searchBar\" aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-search\"></i>\n      </button>\n    </ul>\n    <ul class=\"navbar-nav ml-auto text-center\">\n      <li *ngIf=\"!_authService.ifLoggedIn()\" class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['login']\">Log In</a>\n      </li>\n      <li *ngIf=\"_authService.ifLoggedIn()\" class=\"nav-item\">\n        <a class=\"nav-link\" id=\"logout-btn\" (click)=\"logout()\">Log Out</a>\n      </li>\n      <li *ngIf=\"!_authService.ifLoggedIn()\" class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['signup']\">Sign Up</a>\n      </li>\n      <li *ngIf=\"_authService.ifLoggedIn()\" class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['profile']\">Account</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<!-- SEARCH DROP DOWN -->\n<div class=\"pos-f-t\">\n  <div class=\"collapse\" id=\"searchBar\">\n    <div class=\"p-4\">\n      <form>\n        <i class=\"fa fa-search searchbar-icon\"></i>\n        <input type=\"search\" name=\"keyword\" placeholder=\"search...\" onclick=\"this.value=''\" [(ngModel)]=\"keyword\" class=\"search-input\">\n        <button class=\"search-button\" data-toggle=\"collapse\" data-target=\"#searchBar\" type=\"submit\">CANCEL</button>\n        <button class=\"cancel-button \" type=\"submit\" (click)=\"search()\" (change)=\"search()\">SEARCH</button>\n      </form>\n    </div>\n    <div [ngClass]=\"messageClass\">\n      {{ message }}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_authService, _productService, _activatedRoute, _router) {
        this._authService = _authService;
        this._productService = _productService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.message = '';
        this.messageClass = '';
    }
    NavbarComponent.prototype.logout = function () {
        this._authService.logout();
        this._router.navigate(['']);
    };
    NavbarComponent.prototype.search = function () {
        var _this = this;
        this._productService.search(this.keyword)
            .subscribe(function (data) {
            if (data.success) {
                _this._router.navigate(["/searchDetail", { query: _this.keyword }]);
            }
            else {
                _this.message = data.message;
                _this.messageClass = "text-danger";
            }
        });
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/sports-outdoors/sports-outdoors.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n  background-color: #ededed;\n  padding: 6px 6px 30px 6px;\n}\n\n.card{\n  width: 250px;\n  min-height: 250px;\n  max-height: 330px;\n  margin: 6px 6px;\n  padding-bottom: 10px;\n  display: inline-block;\n  border: none;\n}\n\n.card-text{\n  line-height: 10px;\n  font-size: .9em;\n  text-align: center;\n}\n\n.text-color{\n  color: #000;\n  }\n\n.price{\n  font-size: 12px;\n  line-height: 8px;\n  vertical-align: top;\n  }\n\n.banner{\n  width: 100%;\n  }\n\n.card-img-top{\n    max-width: inherit;\n    max-height: 250px;\n    min-height: 250px;\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n    padding: 10px;\n  }\n"

/***/ }),

/***/ "./src/app/components/navbar/sports-outdoors/sports-outdoors.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <img class=\"banner\" src=\"../../../assets/images/site_images/sports0603.jpg\" alt=\"\">\n</header>\n<div class=\"container-fluid\">\n  <div class=\"card\" *ngFor=\"let product of products\">\n    <a [routerLink]=\"['post/', product._id]\">\n      <img class=\"card-img-top\" src=\"{{product.image}}\" alt=\"{{product._id}}\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">{{ product.title }}</p>\n        <p class=\"card-text text-color\">${{ product.price }}</p>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/sports-outdoors/sports-outdoors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportsOutdoorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SportsOutdoorsComponent = /** @class */ (function () {
    function SportsOutdoorsComponent(_productService, _activatedRoute) {
        this._productService = _productService;
        this._activatedRoute = _activatedRoute;
        this.message = '';
        this.messageClass = '';
    }
    SportsOutdoorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this._activatedRoute.snapshot.routeConfig['path'];
        this._productService.getProductsByCategory(this.currentUrl)
            .subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = "text-danger";
            }
            else {
                _this.products = data.products;
            }
        });
    };
    SportsOutdoorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sports-outdoors',
            template: __webpack_require__("./src/app/components/navbar/sports-outdoors/sports-outdoors.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/sports-outdoors/sports-outdoors.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], SportsOutdoorsComponent);
    return SportsOutdoorsComponent;
}());



/***/ }),

/***/ "./src/app/components/products/delete/delete.component.css":
/***/ (function(module, exports) {

module.exports = "section{\n  text-align: center;\n  margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/components/products/delete/delete.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"message\" class=\"row show-hide-message\">\n    <div [ngClass]=\"messageClass\">\n      {{ message }}\n    </div>\n  </div>\n\n  <section>\n    <header>\n      <h1>{{ product.title }}</h1>\n    </header>\n    <div class=\"content\">\n      <img src=\"../../../../../assets/images/{{product.image}}\" alt=\"\">\n      <p>${{ product.price }}</p>\n      <p>Description: {{ product.desc }}</p>\n      <p class=\"date\">posted on: {{ product.created_at | date: \"MMM dd, yyyy\" }}</p>\n    </div>\n    <div class=\"buttons\">\n      <button (click)=\"deletePost()\" type=\"button\" name=\"button\" class=\"btn btn-danger\">Delete</button>\n      <button (click)=\"goBack()\" type=\"button\" name=\"button\" class=\"btn btn-info\">Cancel</button>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/components/products/delete/delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeleteComponent = /** @class */ (function () {
    function DeleteComponent(_location, _authService, _productService, _activatedRoute, _router) {
        this._location = _location;
        this._authService = _authService;
        this._productService = _productService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.message = '';
        this.messageClass = '';
    }
    DeleteComponent.prototype.goBack = function () {
        this._location.back();
    };
    DeleteComponent.prototype.deletePost = function () {
        var _this = this;
        this._productService.deletePost(this.currentUrl.id)
            .subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = "text-danger";
            }
            else {
                _this.message = data.message;
                _this.messageClass = "text-primary";
                setTimeout(function () {
                    _this._router.navigate(['profile']);
                }, 1250);
            }
        });
    };
    DeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this._activatedRoute.snapshot.params;
        this._productService.getPostById(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = "text-danger";
            }
            else {
                _this.product = {
                    title: data.product.title,
                    price: data.product.price,
                    location: data.product.location,
                    desc: data.product.desc,
                    category: data.product.category,
                    image: data.product.image,
                    created_by: data.product.created_by,
                    created_at: data.product.created_at
                };
            }
        });
    };
    DeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__("./src/app/components/products/delete/delete.component.html"),
            styles: [__webpack_require__("./src/app/components/products/delete/delete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "./src/app/components/products/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = "header{\n  text-align: center;\n  margin-top: 20px;\n}\n\nform{\nwidth: 50%;\nbackground-color: #f7f7f7;\npadding: 40px;\nmargin: 0 auto;\ncolor: #686868;\nfont-family: helvetica, sans-serif;\nfont-weight: 100;\n}\n\n.form-control:focus{\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0;\n}\n\nh2{\n  color: orange;\n  display: block;\n  text-align: center;\n  font-family: futura, arial, sans-serif;\n}\n\n.btn{\n  margin: 0 auto;\n  display: block;\n  background-color: #00bde8;\n  color: white;\n  padding: 5px 15px;\n  font-family: helvetica, sans-serif;\n  font-weight: 100;\n}\n\n.form-text{\n  font-size: .85em;\n  color: #474747;\n  padding: 3px;\n}\n\nli{\n  list-style-type: none;\n}\n"

/***/ }),

/***/ "./src/app/components/products/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header>\n    <h1>Edit Post</h1>\n  </header>\n  <div *ngIf=\"message\" class=\"row show-hide-message\">\n    <div [ngClass]=\"messageClass\">\n      {{ message }}\n    </div>\n  </div>\n  <section>\n    <form [formGroup]=\"form\" (submit)=\"updatePost()\">\n      <!-- TITLE INPUT -->\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" name=\"title\" class=\"form-control\" autocomplete=\"off\" formControlName=\"title\" [(ngModel)]=\"product.title\"/>\n        <ul class=\"form-text\">\n          <li *ngIf=\"form.controls.title.errors?.required && form.controls.title.dirty\">A title is required</li>\n          <li *ngIf=\"form.controls.title.errors?.minlength && form.controls.title.dirty || form.controls.title.errors?.maxlength && form.controls.title.dirty \">Title must be between 3-25 characters</li>\n          <li *ngIf=\"form.controls.title.errors?.validateTitle && form.controls.title.dirty\">Title may only contain letters and numbers</li>\n        </ul>\n      </div>\n      <!-- PRICE INPUT -->\n      <div class=\"form-group\">\n        <label for=\"price\">Price</label>\n        <input type=\"text\" name=\"price\" class=\"form-control\" autocomplete=\"off\" formControlName=\"price\" [(ngModel)]=\"product.price\"/>\n          <ul class=\"form-text\">\n            <li *ngIf=\"form.controls.price.errors?.required && form.controls.price.dirty\">A price is required</li>\n          </ul>\n      </div>\n      <!-- DESC INPUT -->\n      <div class=\"form-group\">\n        <label for=\"desc\">Description</label>\n        <select class=\"form-control\" name=\"desc\" formControlName=\"desc\" [(ngModel)]=\"product.desc\">\n          <option value=\"Mint Condition\">Mint Condition</option>\n          <option value=\"Great Condition\">Great Condition</option>\n          <option value=\"Fair Condition\">Fair Condition</option>\n          <option value=\"Needs TLC\">Needs TLC</option>\n        </select>\n          <ul class=\"form-text\">\n            <li *ngIf=\"form.controls.desc.errors?.required && form.controls.desc.dirty\">A description is required</li>\n          </ul>\n      </div>\n      <!-- LOCATION INPUT -->\n      <div class=\"form-group\">\n        <label for=\"location\">Location</label>\n          <select class=\"form-control\" name=\"location\" formControlName=\"location\" [(ngModel)]=\"product.location\">\n            <option value=\"San Francisco\">San Francisco</option>\n            <option value=\"South Bay/San Jose\">South Bay/San Jose</option>\n            <option value=\"East Bay/Oakland\">East Bay/Oakland</option>\n            <option value=\"West Bay/San Mateo\">West Bay/San Mateo</option>\n          </select>\n          <ul class=\"form-text\">\n            <li *ngIf=\"form.controls.location.errors?.required && form.controls.location.dirty\">A location is required</li>\n          </ul>\n      </div>\n      <!-- CATEGORY INPUT -->\n      <div class=\"form-group\">\n        <label for=\"category\">Category</label>\n          <select class=\"form-control\" name=\"category\" formControlName=\"category\" [(ngModel)]=\"product.category\">\n            <option value=\"Electronics\">Electronics</option>\n            <option value=\"Music\">Music</option>\n            <option value=\"Sports &amp; Outdoors\">Sports &amp; Outdoors</option>\n            <option value=\"Fashion\">Fashion</option>\n            <option value=\"Cars &amp; Parts\">Cars &amp; Parts</option>\n            <option value=\"Kids\">Kids</option>\n            <option value=\"Home &amp; Garden\">Home &amp; Garden</option>\n            <option value=\"Misc\">Misc</option>\n          </select>\n          <ul class=\"form-text\">\n            <li *ngIf=\"form.controls.category.errors?.required && form.controls.category.dirty\">Please select a category</li>\n          </ul>\n      </div>\n      <!-- SUBMIT FORM -->\n      <input [disabled]=\"!form.valid || processing\" type=\"submit\" class=\"btn\" value=\"Update\" />\n    </form>\n  </section>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/products/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditComponent = /** @class */ (function () {
    function EditComponent(_formBuilder, _authService, _productService, _router, _activatedRoute, _location) {
        this._formBuilder = _formBuilder;
        this._authService = _authService;
        this._productService = _productService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._location = _location;
        this.message = '';
        this.messageClass = '';
        this.processing = false;
        this.createForm();
    }
    EditComponent.prototype.createForm = function () {
        this.form = this._formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(25)
                ])],
            price: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            desc: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            location: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            category: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            created_by: ['']
            // image: [Validators.required]
        });
    };
    EditComponent.prototype.disableForm = function () {
        this.form.controls['title'].disable();
        this.form.controls['price'].disable();
        this.form.controls['desc'].disable();
        this.form.controls['location'].disable();
        this.form.controls['category'].disable();
        // this.form.controls['image'].disable();
    };
    // Function to enable the registration form
    EditComponent.prototype.enableForm = function () {
        this.form.controls['title'].enable();
        this.form.controls['price'].enable();
        this.form.controls['desc'].enable();
        this.form.controls['location'].enable();
        this.form.controls['category'].enable();
        // this.form.controls['image'].enable();
    };
    EditComponent.prototype.updatePost = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        this._productService.updatePost(this.product)
            .subscribe(function (data) {
            if (!data.success) {
                _this.processing = false;
                _this.message = data.message;
                _this.messageClass = "text-danger";
                _this.enableForm();
            }
            else {
                _this.message = data.message;
                _this.messageClass = "text-primary";
            }
            setTimeout(function () {
                _this._router.navigate(['profile']); // Redirect to login view
            }, 1250);
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this._activatedRoute.snapshot.params;
        this._productService.getPostById(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = "text-danger";
            }
            else {
                _this.product = data.product;
            }
        });
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/components/products/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/components/products/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/products/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "\nfooter{\n  width: 100%;\n  height: 320px;\n  background-image: url('2882.15d7404166a9dda47693.jpg');\n  background-size: cover;\n}\n\n.col-md-2{\n  float: left;\n}\n\n.col-md-3{\n  float: left;\n}\n\n.container{\n  margin: 0 auto;\n  padding: 35px 0;\n}\n\n.copyright{\n  color: #c4c4c4;\n  font-family: helvetica, sans-serif;\n  font-weight: 200;\n  margin-top: 3px;\n  font-size: .75em;\n}\n\nh6{\n  font-family: futura, helvetica, sans-serif;\n  font-size: 1em;\n  color: #027ddd;\n  margin: 10px 0;\n}\n\n.fa{\n  margin: 10px 8px 0 0;\n  font-size: 18px;\n  color: orange;\n}\n\n.justabout-text{\n  color: orange;\n  font-size: 1.7em;\n}\n\n.just-text{\n  color: #027ddd;\n}\n\n.footer-links{\n  font-size: .75em;\n}\n\n.footer-link{\n  display: block;\n  color: #c4c4c4;\n  font-family: helvetica, sans-serif;\n  font-weight: 200;\n  text-decoration: none;\n}\n\n.footer-link:hover{\n  color: orange;\n}\n\n.col-md-2{\n  width: 33.333%;\n}\n\n@media screen and (max-width: 580px) {\n  .col-xs-12{\n    width: 100%;\n    text-align: center;\n    margin-top: 7px;\n  }\n  .copyright{\n    display: inline-block;\n  }\n  .container{\n    padding: 5px;\n  }\n  h6{\n    margin: 0;\n  }\n  .justabout-text{\n    font-size: 1.25em;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/products/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"holder\">\n  <footer>\n    <div class=\"container\">\n      <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n        <a [routerLink]=\"['']\" class=\"justabout-text\"><span class=\"just-text\">just</span>about</a>\n        <p class=\"copyright\">&copy; 2018 Felipe Mesina</p>\n      </div>\n      <div class=\"col-xs-4 col-sm-3 col-md-2 col-lg-2\">\n        <div class=\"footer-links\">\n          <h6>GET CONNECTED</h6>\n          <a href=\"\" class=\"footer-link\">Company Info</a>\n          <a href=\"\" class=\"footer-link\">Policies</a>\n          <a href=\"\" class=\"footer-link\">News</a>\n          <a href=\"\" class=\"footer-link\">Team</a>\n        </div>\n\n      </div>\n      <div class=\"col-xs-4 col-sm-3 col-md-2 col-lg-2\">\n        <div class=\"footer-links\">\n          <h6>GET INVOLVED</h6>\n          <a href=\"\" class=\"footer-link\">Community</a>\n          <a href=\"\" class=\"footer-link\">Careers</a>\n          <a href=\"\" class=\"footer-link\">Send Feedback</a>\n          <a href=\"\" class=\"footer-link\">Tell A Friend</a>\n        </div>\n      </div>\n      <div class=\"col-xs-4 col-sm-3 col-md-2 col-lg-2\">\n        <div class=\"footer-links\">\n          <h6>GET IN TOUCH</h6>\n          <a href=\"\" class=\"footer-link\">Contact Us</a>\n          <a href=\"\" class=\"footer-link\">FAQs</a>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\n        <a href=\"#\" class=\"social-links\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\n        <a href=\"#\" class=\"social-links\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>\n        <a href=\"#\" class=\"social-links\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>\n        <a href=\"#\" class=\"social-links\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>\n        <a href=\"#\" class=\"social-links\" target=\"_blank\"><i class=\"fa fa-google-plus\"></i></a>\n      </div>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/components/products/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/products/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/products/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/products/post/post.component.css":
/***/ (function(module, exports) {

module.exports = "form{\nwidth: 50%;\nbackground-color: #f7f7f7;\npadding: 40px;\nmargin: 0 auto;\ncolor: #686868;\nfont-family: helvetica, sans-serif;\nfont-weight: 100;\n}\n\n.form-control:focus{\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0;\n}\n\nh2{\n  color: orange;\n  display: block;\n  text-align: center;\n  font-family: futura, arial, sans-serif;\n}\n\n.btn-post{\n  margin: 0 auto;\n  display: inline-block;\n  background-color: #00bde8;\n  color: white;\n  padding: 5px 15px;\n  font-family: helvetica, sans-serif;\n  font-weight: 100;\n}\n\n.btn-custom{\n  margin: 0 auto;\n  display: inline-block;\n  background-color: orange;\n  color: white;\n  padding: 5px 15px;\n  font-family: helvetica, sans-serif;\n  font-weight: 100;\n}\n\n.form-text{\n  font-size: .85em;\n  color: #474747;\n  padding: 3px;\n}\n\nli{\n  list-style-type: none;\n}\n"

/***/ }),

/***/ "./src/app/components/products/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <section>\n    <form [formGroup]=\"form\" (submit)=\"postProduct()\">\n      <h2>List a posting</h2>\n      <!-- TITLE INPUT -->\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" name=\"title\" class=\"form-control\" autocomplete=\"off\" formControlName=\"title\" />\n        <ul class=\"form-text\">\n          <li *ngIf=\"form.controls.title.errors?.required && form.controls.title.dirty\">A title is required</li>\n          <li *ngIf=\"form.controls.title.errors?.minlength && form.controls.title.dirty || form.controls.title.errors?.maxlength && form.controls.title.dirty \">Title must be between 3-25 characters</li>\n          <li *ngIf=\"form.controls.title.errors?.validateTitle && form.controls.title.dirty\">Title may only contain letters and numbers</li>\n        </ul>\n      </div>\n      <!-- PRICE INPUT -->\n      <div class=\"form-group\">\n        <label for=\"price\">Price</label>\n        <input type=\"text\" name=\"price\" class=\"form-control\" autocomplete=\"off\" formControlName=\"price\" />\n          <ul class=\"form-text\">\n            <li *ngIf=\"form.controls.price.errors?.required && form.controls.price.dirty\">A price is required</li>\n          </ul>\n      </div>\n      <!-- DESC INPUT -->\n      <div class=\"form-group\">\n        <label for=\"desc\">Description</label>\n        <select class=\"form-control\" name=\"desc\" formControlName=\"desc\">\n          <option value=\"Mint Condition\">Mint Condition</option>\n          <option value=\"Great Condition\">Great Condition</option>\n          <option value=\"Fair Condition\">Fair Condition</option>\n          <option value=\"Needs TLC\">Needs TLC</option>\n        </select>\n          <ul class=\"form-text\">\n            <li *ngIf=\"form.controls.desc.errors?.required && form.controls.desc.dirty\">A description is required</li>\n          </ul>\n      </div>\n      <!-- LOCATION INPUT -->\n      <div class=\"form-group\">\n        <label for=\"location\">Location</label>\n          <select class=\"form-control\" name=\"location\" formControlName=\"location\">\n            <option value=\"San Francisco\">San Francisco</option>\n            <option value=\"South Bay/San Jose\">South Bay/San Jose</option>\n            <option value=\"East Bay/Oakland\">East Bay/Oakland</option>\n            <option value=\"West Bay/San Mateo\">West Bay/San Mateo</option>\n          </select>\n          <ul class=\"form-text\">\n            <li *ngIf=\"form.controls.location.errors?.required && form.controls.location.dirty\">A location is required</li>\n          </ul>\n      </div>\n      <!-- CATEGORY INPUT -->\n      <div class=\"form-group\">\n        <label for=\"category\">Category</label>\n          <select class=\"form-control\" name=\"category\" formControlName=\"category\">\n            <option value=\"electronics\">Electronics</option>\n            <option value=\"music\">Music</option>\n            <option value=\"sports&amp;outdoors\">Sports &amp; Outdoors</option>\n            <option value=\"fashion\">Fashion</option>\n            <option value=\"cars&amp;parts\">Cars &amp; Parts</option>\n            <option value=\"kids\">Kids</option>\n            <option value=\"home&amp;garden\">Home &amp; Garden</option>\n            <option value=\"misc\">Misc</option>\n          </select>\n          <ul class=\"form-text\">\n            <li *ngIf=\"form.controls.category.errors?.required && form.controls.category.dirty\">Please select a category</li>\n          </ul>\n      </div>\n      <!-- UPLOAD IMAGE INPUT -->\n      <div class=\"form-group\">\n        <label for=\"image\">Image</label>\n        <input type=\"file\" name=\"image\" (change)=\"fileChange($event)\" class=\"form-control\" />\n          <!-- <ul class=\"form-text\">\n            <li *ngIf=\"form.controls.image.errors?.required && form.controls.image.dirty\">Please select a file</li>\n          </ul> -->\n      </div>\n      <!-- ERROR/SUCCESS MESSAGES -->\n      <div class=\"row show-hide-message\">\n        <div [ngClass]=\"messageClass\">\n          {{ message }}\n        </div>\n      </div>\n      <!-- SUBMIT FORM -->\n      <input [disabled]=\"!form.valid || processing\" type=\"submit\" class=\"btn btn-post\" value=\"Post\" />\n      <button type=\"button\" class=\"btn btn-custom\" (click)=\"goBack()\" name=\"button\">Back</button>\n    </form>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/components/products/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostComponent = /** @class */ (function () {
    function PostComponent(_formBuilder, _authService, _productService, _router, _location) {
        this._formBuilder = _formBuilder;
        this._authService = _authService;
        this._productService = _productService;
        this._router = _router;
        this._location = _location;
        this.message = '';
        this.messageClass = '';
        this.processing = false;
        this.createForm();
    }
    PostComponent.prototype.createForm = function () {
        this.form = this._formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(25)
                ])],
            price: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            desc: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            location: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            category: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            created_by: [''],
            image: this.selectedFile
            // image: [Validators.required]
        });
    };
    PostComponent.prototype.disableForm = function () {
        this.form.controls['title'].disable();
        this.form.controls['price'].disable();
        this.form.controls['desc'].disable();
        this.form.controls['location'].disable();
        this.form.controls['category'].disable();
        // this.form.controls['image'].disable();
    };
    // Function to enable the registration form
    PostComponent.prototype.enableForm = function () {
        this.form.controls['title'].enable();
        this.form.controls['price'].enable();
        this.form.controls['desc'].enable();
        this.form.controls['location'].enable();
        this.form.controls['category'].enable();
        // this.form.controls['image'].enable();
    };
    PostComponent.prototype.goBack = function () {
        this._location.back();
    };
    PostComponent.prototype.fileChange = function (event) {
        this.selectedFile = event.target.files[0];
    };
    PostComponent.prototype.prepareSave = function () {
        var post = new FormData();
        post.append('title', this.form.get('title').value);
        post.append('price', this.form.get('price').value);
        post.append('desc', this.form.get('desc').value);
        post.append('location', this.form.get('location').value);
        post.append('category', this.form.get('category').value);
        post.append('created_by', this.email);
        post.append('image', this.selectedFile, this.selectedFile.name);
        return post;
    };
    PostComponent.prototype.postProduct = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var post = this.prepareSave();
        this._productService.createPost(post)
            .subscribe(function (data) {
            if (!data.success) {
                _this.processing = false;
                _this.message = data.message;
                _this.messageClass = "text-danger";
                _this.enableForm();
            }
            else {
                _this.message = data.message;
                _this.messageClass = "text-primary";
            }
            setTimeout(function () {
                _this._router.navigate(['profile']); // Redirect to login view
            }, 1250);
        });
    };
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.getUserProfile()
            .subscribe(function (profile) {
            _this.email = profile.user.email;
        });
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post',
            template: __webpack_require__("./src/app/components/products/post/post.component.html"),
            styles: [__webpack_require__("./src/app/components/products/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n  padding: 0;\n  margin: 0;\n  background-color: #ededed;\n}\n\n.ban{\n  padding-bottom: 30px;\n}\n\nheader{\n  float: left;\n  display: block;\n  width: 100%;\n  background-color: #f9f9f9;\n  padding: 20px;\n  text-align: center;\n  margin-bottom: 6px;\n}\n\nh2{\n  font-size: 1.7em;\n  font-family: futura, helvetica, sans-serif;\n  letter-spacing: -1.5px;\n  text-transform: uppercase;\n  display: inline-block;\n  position: relative;\n}\n\nh2:after{\n  content: close-quote;\n  border-top: 3px solid #42d7f4;\n  width: 100%;\n  height: 12px;\n  display: block;\n  position: absolute;\n  margin-top: 5px;\n}\n\n.card{\n  width: 250px;\n  min-height: 250px;\n  max-height: 330px;\n  margin: 6px 6px;\n  padding: 0 0 15px 8px;\n  display: inline-block;\n  border: none;\n}\n\n.card-text{\n  line-height: 10px;\n  font-size: .9em;\n}\n\n.text-color{\n  color: #000;\n}\n\n.price{\n  font-size: 12px;\n  line-height: 8px;\n  vertical-align: top;\n}\n\n.banner{\n  width: 100%;\n}\n\n.card-img-top{\n    max-width: inherit;\n    max-height: 250px;\n    min-height: 250px;\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n    padding: 10px;\n}\n"

/***/ }),

/***/ "./src/app/components/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <img class=\"w-100 banner\" src=\"../../../assets/images/site_images/2020107.jpg\" alt=\"\">\n<!-- </div> -->\n<!-- <div class=\"container-fluid ban\"> -->\n  <header>\n    <h2>Newest Additions</h2>\n  </header>\n  <section>\n    <div *ngFor=\"let product of products\" class=\"card\">\n      <a [routerLink]=\"['post/', product._id]\">\n        <img class=\"card-img-top\" src=\"{{product.image}}\" alt=\"{{product._id}}\">\n          <p class=\"card-text\">{{ product.title }}</p>\n          <p class=\"card-text text-color\"><span class=\"price\">$</span>{{ product.price }}</p>\n      </a>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(_productService) {
        this._productService = _productService;
        this.products = '';
    }
    ProductsComponent.prototype.getPosts = function () {
        var _this = this;
        this._productService.getPosts()
            .subscribe(function (data) {
            _this.products = data.products;
        });
    };
    ProductsComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-products',
            template: __webpack_require__("./src/app/components/products/products.component.html"),
            styles: [__webpack_require__("./src/app/components/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/products/show/show.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\n  min-height: 100vh;\n}\n\nheader{\n  text-align: center;\n  margin-top: 20px;\n}\n\n.content{\n  text-align: center;\n}\n\n.date{\n  color: #c4c4c4;\n  display: block;\n  font-size: .75em;\n}\n\n.dropdown{\n  float: left;\n  margin-right: 5px;\n}\n\n.dropdown-menu.show{\n  text-align: center;\n}\n\n.btn-info{\n  float: right;\n}\n\n.btn-danger{\n  float: right;\n  margin-right: 5px;\n}\n\n.btn-warning{\n  float: right;\n  color: white;\n  margin-right: 5px;\n}\n\n.fa-comment-o{\n  font-size: 1.25em;\n  margin-left: .45em;\n}\n\nform{\n  text-align: center;\n}\n\n.p-4{\n  text-align: center;\n  margin-top: 50px;\n}\n\nh2{\n  margin: 1em 1em;\n  color: #0165b7;\n  letter-spacing: -2px;\n  background-color: #f2f2f2;\n  margin: 0;\n  padding: 10px;\n}\n\n.commentsBoard{\n  border: 1px solid #f2f2f2;\n  -webkit-box-shadow: 5px 5px 10px #e4e4e4;\n          box-shadow: 5px 5px 10px #e4e4e4;\n  padding-bottom: 10px;\n  margin-bottom: 30px;\n}\n\n.commentsContainer{\n  margin-left: 30px;\n  padding-top: 40px;\n}\n\n.comment-text{\n  font-size: .88em;\n  font-family: helvetica, sans-serif;\n  font-weight: 200;\n}\n\n.eachComment{\n  padding: 6px;\n}\n\n.commentator{\n  color: #4286f4;\n  font-size: 1.25em;\n}\n\n.posted_at{\n  font-size: .70em;\n  font-family: helvetica, sans-serif;\n  color: #bdbdbb;\n}\n"

/***/ }),

/***/ "./src/app/components/products/show/show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row show-hide-message\" *ngIf=\"message\">\n    <div [ngClass]=\"messageClass\">\n      {{message}}\n    </div>\n  </div>\n  <section *ngIf=\"results\">\n    <header>\n      <h1>{{ product.title }}</h1>\n    </header>\n    <div class=\"content\">\n      <img src=\"{{product.image}}\" alt=\"\">\n      <p>${{ product.price }}</p>\n      <p>Description: {{ product.desc }}</p>\n      <p class=\"date\">posted on: {{ product.created_at | date: \"MMM dd, yyyy\" }}</p>\n    </div>\n    <div class=\"dropdown\">\n      <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        Contact Seller\n      </button>\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\n        <p *ngIf=\"_authService.ifLoggedIn()\">{{ product.created_by }}</p>\n        <p *ngIf=\"!_authService.ifLoggedIn()\">Please log in to contact seller</p>\n      </div>\n    </div>\n    <div class=\"buttons\">\n      <a *ngIf=\"email === product.created_by\" class=\"btn btn-info\" [routerLink]=\"['edit/', product._id]\" role=\"button\">Edit</a>\n      <a *ngIf=\"email === product.created_by\" class=\"btn btn-danger\" [routerLink]=\"['delete/', product._id]\" role=\"button\">Delete</a>\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"goBack()\" name=\"button\">Back</button>\n    </div>\n  </section>\n  <section>\n    <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#commentsField\" aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span>Comments<i class=\"fa fa-comment-o\"></i></span>\n    </button>\n    <div class=\"pos-f-t\">\n      <div class=\"collapse\" id=\"commentsField\">\n        <div class=\"p-4\">\n          <div *ngIf=\"!_authService.ifLoggedIn()\" class=\"notSignedIn\">\n            <p>Please log in to post a comment</p>\n          </div>\n          <form [formGroup]=\"commentForm\" *ngIf=\"_authService.ifLoggedIn()\">\n            <textarea class=\"form-control\" name=\"comment\" rows=\"3\" cols=\"40\" formControlName=\"comment\"></textarea>\n            <div [ngClass]=\"messageClass\">\n              <ul class=\"form-text text-muted\">\n                <li *ngIf=\"commentForm.controls.comment.errors?.required &&\n                commentForm.controls.comment.dirty\">Please enter a comment</li>\n                <li *ngIf=\"(commentForm.controls.comment.errors?.maxlength &&\n                commentForm.controls.comment.dirty) || (commentForm.controls.comment.errors?.minlength\n                && commentForm.controls.comment.dirty)\">Comment must be between 1-250 characters</li>\n              </ul>\n            </div>\n          </form>\n          <button *ngIf=\"_authService.ifLoggedIn()\" [disabled]=\"!commentForm.valid || processing\" (click)=\"postComment(product._id)\" class=\"btn btn-primary\" type=\"submit\" name=\"button\">Post</button>\n        </div>\n        <div class=\"commentsBoard\">\n          <h2>Comments<i class=\"fa fa-comment-o\"></i></h2>\n          <div class=\"commentsContainer\">\n            <p class=\"eachComment\" *ngFor=\"let comment of product.comments\">\n              <span class=\"commentator\">{{comment.commentator}}</span>\n              <span class=\"posted_at\">{{comment.created_at | date:\"short\"}}</span>\n              <br />\n              <span class=\"comment-text\">{{comment.comment}}</span>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/components/products/show/show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShowComponent = /** @class */ (function () {
    function ShowComponent(_authService, _productService, _activatedRoute, _location, _formBuilder, _router) {
        this._authService = _authService;
        this._productService = _productService;
        this._activatedRoute = _activatedRoute;
        this._location = _location;
        this._formBuilder = _formBuilder;
        this._router = _router;
        this.product = '';
        this.message = '';
        this.messageClass = '';
        this.results = false;
        this.username = '';
        this.email = '';
        this.processing = false;
        this.commentMessage = '';
        this.createCommentForm();
    }
    ShowComponent.prototype.disableForm = function () {
        this.commentForm.controls['comment'].disable();
    };
    // Function to enable the registration form
    ShowComponent.prototype.enableForm = function () {
        this.commentForm.controls['comment'].enable();
    };
    ShowComponent.prototype.createCommentForm = function () {
        this.commentForm = this._formBuilder.group({
            comment: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].maxLength(250)
                ])]
        });
    };
    ShowComponent.prototype.postComment = function (id) {
        var _this = this;
        this.disableForm();
        this.processing = true;
        var comment = this.commentForm.get('comment').value;
        this._productService.postComment(id, comment)
            .subscribe(function (data) {
            if (!data.success) {
                _this.enableForm();
                _this.commentMessage = data.message;
                _this.messageClass = "text-danger";
            }
            else {
                _this.processing = false;
                _this.commentMessage = data.message;
                _this.messageClass = "text-primary";
                setTimeout(function () {
                    location.reload();
                }, 1250);
            }
        });
    };
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this._activatedRoute.snapshot.params;
        this._productService.getPostById(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = "text-danger";
            }
            else {
                console.log(data.product.image);
                _this.product = data.product;
                _this.results = true;
            }
        });
        if (this._authService.ifLoggedIn()) {
            this._authService.getUserProfile()
                .subscribe(function (profile) {
                _this.username = profile.user.username;
                _this.email = profile.user.email;
            });
        }
    };
    ShowComponent.prototype.goBack = function () {
        this._location.back();
    };
    ShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-show',
            template: __webpack_require__("./src/app/components/products/show/show.component.html"),
            styles: [__webpack_require__("./src/app/components/products/show/show.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ShowComponent);
    return ShowComponent;
}());



/***/ }),

/***/ "./src/app/components/search-detail/search-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search-detail/search-detail.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search-detail/search-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchDetailComponent = /** @class */ (function () {
    function SearchDetailComponent(_route, _productService, _router) {
        this._route = _route;
        this._productService = _productService;
        this._router = _router;
        this.message = '';
        this.messageClass = '';
    }
    SearchDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .subscribe(function (params) {
            _this.query = params['query'];
            console.log(_this.query);
        });
        this._productService.search(this.query)
            .subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = "text-danger";
            }
            else {
                _this._router.navigate(["/search", { query: _this.query }]);
            }
        });
    };
    SearchDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-detail',
            template: __webpack_require__("./src/app/components/search-detail/search-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/search-detail/search-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SearchDetailComponent);
    return SearchDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/***/ (function(module, exports) {

module.exports = "\n.container-fluid{\n  background-color: #ededed;\n  padding: 6px 6px 30px 6px;\n}\n\n.card-container{\n  margin-top: 25px;\n}\n\n.card{\n  width: 250px;\n  min-height: 250px;\n  max-height: 330px;\n  margin: 6px 6px;\n  padding-bottom: 10px;\n  display: inline-block;\n  border: none;\n}\n\n.card-text{\n  line-height: 10px;\n  font-size: .9em;\n  text-align: center;\n}\n\n.card-img-top{\n    max-width: inherit;\n    max-height: 250px;\n    min-height: 250px;\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n    padding: 10px;\n}\n\nimg{\n  max-width: inherit;\n  height: auto;\n}\n"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngFor=\"let product of products\" class=\"card\">\n    <a [routerLink]=\"['post', product._id]\">\n      <img class=\"card-img-top\" src=\"{{product.image}}\" alt=\"{{product._id}}\">\n      <div class=\"card-body\">\n        <p class=\"card-text text-muted\">{{ product.title }}</p>\n        <p class=\"card-text text-muted\">${{ product.price }}</p>\n      </div>\n    </a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(_route, _productService) {
        this._route = _route;
        this._productService = _productService;
        this.message = '';
        this.messageClass = '';
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .subscribe(function (params) {
            _this.query = params['query'];
            console.log(_this.query);
        });
        this._productService.search(this.query)
            .subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = "text-danger";
            }
            else {
                _this.products = data.products;
                _this.query = null;
            }
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/components/search/search.component.html"),
            styles: [__webpack_require__("./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\n  min-height: 65vh;\n}\n\nsection{\n  margin-top: 30px;\n}\n\nform{\nwidth: 50%;\nbackground-color: #f7f7f7;\npadding: 40px;\nmargin: 0 auto;\ncolor: #686868;\nfont-family: helvetica, sans-serif;\nfont-weight: 100;\n}\n\n.form-control:focus{\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0;\n}\n\nh2{\n  color: orange;\n  display: block;\n  text-align: center;\n  font-family: futura, arial, sans-serif;\n}\n\nli{\n  list-style-type: none;\n}\n\n.btn{\n  margin: 0 auto;\n  display: block;\n  background-color: #00bde8;\n  color: white;\n  padding: 5px 15px;\n  font-family: helvetica, sans-serif;\n  font-weight: 100;\n}\n\n.form-text{\n  font-size: .85em;\n  color: #474747;\n  padding: 3px;\n}\n\n.login-wrapper{\n  margin-top: 20px;\n  text-align: center;\n}\n\n.show-hide-message{\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n  padding: 15px;\n\n}\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <section>\n    <form [formGroup]=\"form\" (submit)=\"login()\">\n      <h2>Log In</h2>\n      <!-- USERNAME INPUT -->\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" formControlName=\"username\" />\n        <ul class=\"form-text\">\n          <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">Please enter a username</li>\n        </ul>\n      </div>\n      <!-- Password Input -->\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" formControlName=\"password\" />\n          <ul class=\"form-text\">\n            <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">Please enter a password</li>\n          </ul>\n      </div>\n      <!-- ERROR/SUCCESS MESSAGES -->\n      <div class=\"row show-hide-message\">\n        <div [ngClass]=\"messageClass\">\n          {{ message }}\n        </div>\n      </div>\n      <!-- SUBMIT FORM -->\n      <input [disabled]=\"processing\" type=\"submit\" class=\"btn\" value=\"Log in\" />\n    </form>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_formBuilder, _authService, _router, _authGuard) {
        this._formBuilder = _formBuilder;
        this._authService = _authService;
        this._router = _router;
        this._authGuard = _authGuard;
        this.message = '';
        this.messageClass = '';
        this.processing = false;
        this.previousUrl = '';
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.form = this._formBuilder.group({
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required] // Field is required],
            // Confirm Password Input
        });
    };
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
    };
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this._authService.login(user)
            .subscribe(function (data) {
            if (!data.success) {
                _this.processing = false;
                _this.message = data.message;
                _this.messageClass = "text-danger";
                _this.enableForm();
            }
            else {
                _this.message = data.message;
                _this.messageClass = "text-primary";
                _this._authService.saveUserData(data.token, data.user);
                setTimeout(function () {
                    if (_this.previousUrl) {
                        _this._router.navigate([_this.previousUrl]);
                    }
                    else {
                        _this._router.navigate(['profile']);
                    }
                }, 1000);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this._authGuard.redirectUrl) {
            this.messageClass = "text-danger";
            this.message = "Please log in to view that page";
            this.previousUrl = this._authGuard.redirectUrl;
            this._authGuard.redirectUrl = undefined;
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".text-wrapper{\n  margin-top: 40px;\n}\n\np{\n  display: block;\n\n}\n\n.btn{\n  float: right;\n  margin: 0 0 7px 7px;\n}\n\nimg{\n  max-width: 165px;\n  height: auto;\n}\n\n@media screen and (max-width: 640px) {\n    .expendable {\n      display: none;\n    }\n    img{\n      max-width: 120px;\n      height: auto;\n    }\n}\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"message\" class=\"row show-hide-message\">\n    <div [ngClass]=\"messageClass\">\n      {{ message }}\n    </div>\n\n  </div>\n  <div class=\"text-wrapper\">\n    <h2>Hello, {{ username }}</h2>\n    <p>Here are your most recent posts.</p>\n    <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['profile','post']\">Create a post</button>\n  </div>\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Title</th>\n          <th scope=\"col\" class=\"expendable\">Price</th>\n          <th scope=\"col\" class=\"expendable\">Description</th>\n          <th scope=\"col\">Image</th>\n          <th scope=\"col\">Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let product of products\">\n          <td>{{ product.title }}</td>\n          <td class=\"expendable\">{{ product.price }}</td>\n          <td class=\"expendable\">{{ product.desc }}</td>\n          <td><img src=\"{{product.image}}\" alt=\"\"></td>\n          <td>\n            <a class=\"btn btn-danger\" [routerLink]=\"['delete/', product._id]\" role=\"button\">Delete</a>\n            <a class=\"btn btn-info\" [routerLink]=\"['edit/', product._id]\" role=\"button\">Edit</a>\n          </td>\n        </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_authService, _productService) {
        this._authService = _authService;
        this._productService = _productService;
        this.username = '';
        this.email = '';
        this.message = '';
        this.messageClass = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getPostsThatBelongToUser().subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = "text-danger";
            }
            else {
                _this.products = data.products;
            }
        });
        this._authService.getUserProfile()
            .subscribe(function (profile) {
            _this.username = profile.user.username;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = "section{\n  margin-top: 30px;\n}\n\nform{\nwidth: 50%;\nbackground-color: #f7f7f7;\npadding: 40px;\nmargin: 0 auto;\ncolor: #686868;\nfont-family: helvetica, sans-serif;\nfont-weight: 100;\n}\n\n.form-control:focus{\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0;\n}\n\nh2{\n  color: orange;\n  display: block;\n  text-align: center;\n  font-family: futura, arial, sans-serif;\n}\n\nh6{\n  text-align: center;\n  padding: 5px;\n}\n\n.btn{\n  margin: 0 auto;\n  display: block;\n  background-color: #00bde8;\n  color: white;\n  padding: 5px 15px;\n  font-family: helvetica, sans-serif;\n  font-weight: 100;\n}\n\n.form-text{\n  font-size: .85em;\n  color: #474747;\n  padding: 3px;\n}\n\nli{\n  list-style-type: none;\n}\n\n.login-wrapper{\n  margin-top: 20px;\n  text-align: center;\n}\n\n.show-hide-message{\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n  padding: 15px;\n\n}\n"

/***/ }),

/***/ "./src/app/components/user/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <section>\n    <form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\n      <h2>Sign Up</h2>\n      <h6>Join to sell your stuff, contact sellers, and communicate with potential buyers.</h6>\n      <!-- USERNAME INPUT -->\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" formControlName=\"username\" (blur)=\"isUsernameTaken()\"/>\n        <ul class=\"form-text\">\n          <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">Please enter a username</li>\n          <li *ngIf=\"form.controls.username.errors?.minlength && form.controls.username.dirty || form.controls.username.errors?.maxlength && form.controls.username.dirty \">Username must be between 3-15 characters</li>\n          <li *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\">Username may only contain letters and numbers</li>\n          <li *ngIf=\"usernameMessage\">{{ usernameMessage }}</li>\n        </ul>\n      </div>\n      <!-- EMAIL INPUT -->\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" name=\"email\" class=\"form-control\" autocomplete=\"off\" formControlName=\"email\" (blur)=\"isEmailTaken()\"/>\n          <ul class=\"form-text\">\n            <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">Please enter an email</li>\n            <li *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty || form.controls.email.errors?.maxlength && form.controls.email.dirty ) && form.controls.email.dirty\">Email must be between 10-30 characters</li>\n            <li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">Invalid email format</li>\n            <li *ngIf=\"emailMessage\">{{ emailMessage }}</li>\n          </ul>\n      </div>\n      <!-- Password Input -->\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" formControlName=\"password\" />\n          <ul class=\"form-text\">\n            <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">Please enter a password</li>\n            <li *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Password must be between 8-35 characters</li>\n            <li *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must contain at least one uppercase letter, lowercase letter, and number</li>\n          </ul>\n      </div>\n      <!-- CONIRM PASSWORD INPUT -->\n      <div class=\"form-group\">\n        <label for=\"confirm\">Confirm Password</label>\n          <input type=\"password\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" formControlName=\"confirm\" />\n          <!-- Validation -->\n          <ul class=\"form-text\">\n            <li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">Please confirm password</li>\n            <li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Passwords do not match</li>\n          </ul>\n      </div>\n      <!-- ERROR/SUCCESS MESSAGES -->\n      <div class=\"row show-hide-message\">\n        <div [ngClass]=\"messageClass\">\n          {{ message }}\n        </div>\n      </div>\n      <!-- SUBMIT FORM -->\n      <input [disabled]=\"!form.valid || processing || !isEmailValid || !isUsernameValid\" type=\"submit\" class=\"btn\" value=\"Sign Up\" />\n      <div class=\"login-wrapper\">\n        <small>Already a member?</small>\n        <small><a [routerLink]=\"['signup','login']\">Log in</a></small>\n      </div>\n    </form>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(_formBuilder, _authService, _router) {
        this._formBuilder = _formBuilder;
        this._authService = _authService;
        this._router = _router;
        this.message = '';
        this.messageClass = '';
        this.processing = false;
        this.isEmailValid = false;
        this.isUsernameValid = false;
        this.emailMessage = '';
        this.usernameMessage = '';
        this.createForm();
    }
    SignupComponent.prototype.createForm = function () {
        this.form = this._formBuilder.group({
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(15),
                    this.validateUsername // Custom validation
                ])],
            // Email Input
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(30),
                    this.validateEmail // Custom validation
                ])],
            // Password Input
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(35),
                    this.validatePassword // Custom validation
                ])],
            // Confirm Password Input
            confirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required] // Field is required
        }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
    };
    // Function to validate e-mail is proper format
    SignupComponent.prototype.validateEmail = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // Test email against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid email
        }
        else {
            return { 'validateEmail': true }; // Return as invalid email
        }
    };
    // Function to validate username is proper format
    SignupComponent.prototype.validateUsername = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        // Test username against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid username
        }
        else {
            return { 'validateUsername': true }; // Return as invalid username
        }
    };
    // Function to validate password
    SignupComponent.prototype.validatePassword = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,35}$/);
        // Test password against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid password
        }
        else {
            return { 'validatePassword': true }; // Return as invalid password
        }
    };
    // Funciton to ensure passwords match
    SignupComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            // Check if both fields are the same
            if (group.controls[password].value === group.controls[confirm].value) {
                return null; // Return as a match
            }
            else {
                return { 'matchingPasswords': true }; // Return as error: do not match
            }
        };
    };
    SignupComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable();
        this.form.controls['email'].disable();
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
    };
    // Function to enable the registration form
    SignupComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable();
        this.form.controls['email'].enable();
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
    };
    SignupComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            username: this.form.get('username').value,
            email: this.form.get('email').value,
            password: this.form.get('password').value
        };
        this._authService.signUp(user)
            .subscribe(function (data) {
            if (!data.success) {
                _this.processing = false;
                _this.message = data.message;
                _this.messageClass = "text-danger";
                _this.enableForm();
            }
            else {
                _this.message = data.message;
                _this.messageClass = "text-primary";
            }
            setTimeout(function () {
                _this._router.navigate(['login']); // Redirect to login view
            }, 1250);
        });
    };
    SignupComponent.prototype.isUsernameTaken = function () {
        var _this = this;
        this._authService.isUsernameAvailable(this.form.get('username').value)
            .subscribe(function (data) {
            if (!data.success) {
                _this.isUsernameValid = false;
                _this.usernameMessage = data.message;
            }
            else {
                _this.isUsernameValid = true;
                _this.usernameMessage = data.message;
            }
        });
    };
    SignupComponent.prototype.isEmailTaken = function () {
        var _this = this;
        this._authService.isEmailAvailable(this.form.get('email').value)
            .subscribe(function (data) {
            if (!data.success) {
                _this.isEmailValid = false;
                _this.emailMessage = data.message;
            }
            else {
                _this.isEmailValid = true;
                _this.emailMessage = data.message;
            }
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/components/user/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/components/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (_router, state) {
        if (this._authService.ifLoggedIn()) {
            return true;
        }
        else {
            this.redirectUrl = state.url;
            this._router.navigate(['login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/notAuth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = /** @class */ (function () {
    function NotAuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    NotAuthGuard.prototype.canActivate = function () {
        if (this._authService.ifLoggedIn()) {
            this._router.navigate(['']);
            return false;
        }
        else {
            return true;
        }
    };
    NotAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NotAuthGuard);
    return NotAuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(_http, _router) {
        this._http = _http;
        this._router = _router;
    }
    AuthService.prototype.authenticateUser = function () {
        this.retrieveToken();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                "authorization": this.authToken
            })
        });
    };
    AuthService.prototype.retrieveToken = function () {
        this.authToken = localStorage.getItem("token");
    };
    AuthService.prototype.signUp = function (user) {
        return this._http.post("authentication/signUp", user)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.isUsernameAvailable = function (username) {
        return this._http.get("authentication/isUsernameAvailable/" + username)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.isEmailAvailable = function (email) {
        return this._http.get("authentication/isEmailAvailable/" + email)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.login = function (user) {
        return this._http.post("/authentication/login", user)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.saveUserData = function (token, user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getUserProfile = function () {
        this.authenticateUser();
        return this._http.get("authentication/profile", this.options)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.ifLoggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = /** @class */ (function () {
    function ProductService(_http, _router, _authService) {
        this._http = _http;
        this._router = _router;
        this._authService = _authService;
        this.domain = "http://54.67.97.38/";
    }
    ProductService.prototype.authenticateUser = function () {
        this._authService.retrieveToken();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'authorization': this._authService.authToken
            })
        });
    };
    ProductService.prototype.createPost = function (post) {
        this.authenticateUser();
        return this._http.post("products/createPost", post, this.options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getPosts = function () {
        return this._http.get(this.domain + "authentication/getPosts")
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getPostById = function (id) {
        return this._http.get("authentication/getPostById/" + id)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.updatePost = function (product) {
        this.authenticateUser();
        return this._http.put("products/updatePost", product, this.options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getPostsThatBelongToUser = function () {
        this.authenticateUser();
        return this._http.get("products/getPostsThatBelongToUser", this.options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.deletePost = function (id) {
        this.authenticateUser();
        return this._http.delete("products/deletePost/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.postComment = function (id, comment) {
        this.authenticateUser();
        var commentData = {
            id: id,
            comment: comment
        };
        return this._http.post("products/comment", commentData, this.options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductsByCategory = function (category_name) {
        return this._http.get("authentication/category/" + category_name)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.search = function (searchTerm) {
        return this._http.get("authentication/search", { params: { query: searchTerm } })
            .map(function (res) { return res.json(); });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map