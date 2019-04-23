(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-module"],{

/***/ "./src/app/pages/admin/admin-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/admin/admin-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/pages/admin/admin.component.ts");
/* harmony import */ var _views_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/home.component */ "./src/app/pages/admin/views/home.component.ts");
/* harmony import */ var _views_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/about.component */ "./src/app/pages/admin/views/about.component.ts");
/* harmony import */ var _views_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/page.component */ "./src/app/pages/admin/views/page.component.ts");







var routes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            {
                path: 'home',
                component: _views_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            },
            {
                path: 'about',
                component: _views_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
            },
            {
                path: 'page',
                component: _views_page_component__WEBPACK_IMPORTED_MODULE_6__["PageComponent"],
            }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/admin/admin.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-layout #appPageLayout>\r\n\r\n  <ng-container toolbar>\r\n    <button (click)=\"appPageLayout.toggleLeft()\" mat-icon-button>\r\n      <mat-icon>apps</mat-icon>\r\n    </button>\r\n    <h1 class=\"mr-auto\">Dashboard</h1>\r\n    <button (click)=\"appPageLayout.toggleRight()\" mat-icon-button>\r\n      <mat-icon>file_download</mat-icon>\r\n    </button>\r\n    <button (click)=\"appPageLayout.toggleRight()\" mat-icon-button>\r\n      <mat-icon>print</mat-icon>\r\n    </button>\r\n    <button (click)=\"appPageLayout.toggleRight()\" mat-icon-button>\r\n      <mat-icon>bookmark</mat-icon>\r\n    </button>\r\n    <button (click)=\"appPageLayout.toggleRight()\" mat-icon-button>\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n  </ng-container>\r\n\r\n  <ng-container leftSide>\r\n    <mat-nav-list style=\"width:200px;\">\r\n      <a mat-list-item routerLink=\"master-detail\">Master-Detail</a>\r\n      <a mat-list-item routerLink=\"home\">Home</a>\r\n      <a mat-list-item routerLink=\"about\">About</a>\r\n      <a mat-list-item routerLink=\"page\">Page</a>\r\n    </mat-nav-list>\r\n  </ng-container>\r\n\r\n  <ng-container rightSide>\r\n    <mat-nav-list style=\"width:256px\">\r\n      <a mat-list-item routerLink=\"/dashboard\">Dashboard</a>\r\n    </mat-nav-list>\r\n  </ng-container>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n</app-page-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/admin/admin.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/admin/admin.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");



var AdminComponent = /** @class */ (function () {
    function AdminComponent(changeDetectorRef, media) {
        this.open = false;
        this.mobileQuery = media.matchMedia('(max-width: 1024px)');
        this.mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this.mobileQueryListener);
    }
    AdminComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/pages/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/pages/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/admin/module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/pages/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.component */ "./src/app/pages/admin/admin.component.ts");
/* harmony import */ var _views_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/home.component */ "./src/app/pages/admin/views/home.component.ts");
/* harmony import */ var _views_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/about.component */ "./src/app/pages/admin/views/about.component.ts");
/* harmony import */ var _views_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/page.component */ "./src/app/pages/admin/views/page.component.ts");









var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                _views_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _views_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _views_page_component__WEBPACK_IMPORTED_MODULE_8__["PageComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"],
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/views/about.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/admin/views/about.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-view>\r\n  <mat-toolbar toolbar>\r\n    <h2>About</h2>\r\n  </mat-toolbar>\r\n\r\n  <div class=\"jumbotron rounded-0\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4\">Hello, world!</h1>\r\n      <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to\r\n        featured content or information.</p>\r\n      <hr class=\"my-4\">\r\n      <p>It uses utility classes for typography band spacing to space content out within the larger container.</p>\r\n      <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</app-page-view>\r\n"

/***/ }),

/***/ "./src/app/pages/admin/views/about.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/admin/views/about.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3ZpZXdzL2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin/views/about.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/admin/views/about.component.ts ***!
  \******************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/admin/views/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/pages/admin/views/about.component.scss")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/views/home.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/admin/views/home.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-view>\r\n  <div class=\"jumbotron bg-light text-dark rounded-0\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4\">Hello, world!</h1>\r\n      <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to\r\n        featured content or information.</p>\r\n      <hr class=\"my-4\">\r\n      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\r\n      <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\r\n    </div>\r\n  </div>\r\n</app-page-view>\r\n"

/***/ }),

/***/ "./src/app/pages/admin/views/home.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/admin/views/home.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3ZpZXdzL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/admin/views/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/admin/views/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/admin/views/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/admin/views/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/views/page.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/admin/views/page.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-view>\r\n  <h2 class=\"mr-auto\" toolbar>Page</h2>\r\n\r\n\r\n  <mat-nav-list left style=\"width:300px\">\r\n    <a mat-list-item routerLink=\"home\">home</a>\r\n    <a mat-list-item routerLink=\"about\">about</a>\r\n    <a mat-list-item routerLink=\"page\">page</a>\r\n  </mat-nav-list>\r\n\r\n  <mat-nav-list right style=\"width:300px\">\r\n    <a mat-list-item routerLink=\"home\">home</a>\r\n    <a mat-list-item routerLink=\"about\">about</a>\r\n    <a mat-list-item routerLink=\"page\">page</a>\r\n  </mat-nav-list>\r\n\r\n  <div class=\"jumbotron rounded-0\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4\">Hello, world!</h1>\r\n      <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to\r\n        featured content or information.</p>\r\n      <hr class=\"my-4\">\r\n      <p>It uses utility classes for typography band spacing to space content out within the larger container.</p>\r\n      <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\r\n    </div>\r\n  </div>\r\n\r\n</app-page-view>\r\n"

/***/ }),

/***/ "./src/app/pages/admin/views/page.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/admin/views/page.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3ZpZXdzL3BhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/admin/views/page.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/admin/views/page.component.ts ***!
  \*****************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageComponent = /** @class */ (function () {
    function PageComponent() {
    }
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-page1',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/pages/admin/views/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.scss */ "./src/app/pages/admin/views/page.component.scss")]
        })
    ], PageComponent);
    return PageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-admin-module.js.map