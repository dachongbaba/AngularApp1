(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-module"],{

/***/ "./src/app/pages/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _views_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/home.component */ "./src/app/pages/dashboard/views/home.component.ts");
/* harmony import */ var _views_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/about.component */ "./src/app/pages/dashboard/views/about.component.ts");
/* harmony import */ var _views_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/page.component */ "./src/app/pages/dashboard/views/page.component.ts");
/* harmony import */ var _views_master_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/master-detail.component */ "./src/app/pages/dashboard/views/master-detail.component.ts");








var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        children: [
            {
                path: 'master-detail',
                component: _views_master_detail_component__WEBPACK_IMPORTED_MODULE_7__["MasterDetailComponent"],
            },
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
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-layout #appPageLayout>\r\n\r\n  <ng-container toolbar>\r\n    <button (click)=\"appPageLayout.toggleLeft()\" mat-icon-button>\r\n      <mat-icon>apps</mat-icon>\r\n    </button>\r\n    <h1 class=\"mr-auto\">Dashboard</h1>\r\n    <button (click)=\"appPageLayout.toggleRight()\" mat-icon-button>\r\n      <mat-icon>file_download</mat-icon>\r\n    </button>\r\n    <button (click)=\"appPageLayout.toggleRight()\" mat-icon-button>\r\n      <mat-icon>print</mat-icon>\r\n    </button>\r\n    <button (click)=\"appPageLayout.toggleRight()\" mat-icon-button>\r\n      <mat-icon>bookmark</mat-icon>\r\n    </button>\r\n    <button (click)=\"appPageLayout.toggleRight()\" mat-icon-button>\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n  </ng-container>\r\n\r\n  <ng-container leftSide>\r\n    <mat-nav-list style=\"width:200px;\">\r\n      <a mat-list-item routerLink=\"master-detail\">Master-Detail</a>\r\n      <a mat-list-item routerLink=\"home\">Home</a>\r\n      <a mat-list-item routerLink=\"about\">About</a>\r\n      <a mat-list-item routerLink=\"page\">Page</a>\r\n    </mat-nav-list>\r\n  </ng-container>\r\n\r\n  <ng-container rightSide>\r\n    <mat-nav-list style=\"width:256px\">\r\n      <a mat-list-item routerLink=\"/dashboard\">Dashboard</a>\r\n    </mat-nav-list>\r\n  </ng-container>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n</app-page-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/dashboard/module.ts ***!
  \*******************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/pages/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _views_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/home.component */ "./src/app/pages/dashboard/views/home.component.ts");
/* harmony import */ var _views_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/about.component */ "./src/app/pages/dashboard/views/about.component.ts");
/* harmony import */ var _views_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/page.component */ "./src/app/pages/dashboard/views/page.component.ts");
/* harmony import */ var _views_master_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/master-detail.component */ "./src/app/pages/dashboard/views/master-detail.component.ts");










var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _views_master_detail_component__WEBPACK_IMPORTED_MODULE_9__["MasterDetailComponent"],
                _views_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _views_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _views_page_component__WEBPACK_IMPORTED_MODULE_8__["PageComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/views/about.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/dashboard/views/about.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-view>\r\n  <mat-toolbar toolbar>\r\n    <h2>About</h2>\r\n  </mat-toolbar>\r\n\r\n  <div class=\"jumbotron rounded-0\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4\">Hello, world!</h1>\r\n      <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to\r\n        featured content or information.</p>\r\n      <hr class=\"my-4\">\r\n      <p>It uses utility classes for typography band spacing to space content out within the larger container.</p>\r\n      <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</app-page-view>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/views/about.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/dashboard/views/about.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC92aWV3cy9hYm91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/dashboard/views/about.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/views/about.component.ts ***!
  \**********************************************************/
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
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/dashboard/views/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/pages/dashboard/views/about.component.scss")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/views/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/dashboard/views/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-view>\r\n  <div class=\"jumbotron rounded-0\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4\">Hello, world!</h1>\r\n      <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to\r\n        featured content or information.</p>\r\n      <hr class=\"my-4\">\r\n      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\r\n      <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\r\n    </div>\r\n  </div>\r\n</app-page-view>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/views/home.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/dashboard/views/home.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC92aWV3cy9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/views/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/views/home.component.ts ***!
  \*********************************************************/
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
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/dashboard/views/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/dashboard/views/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/views/master-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/views/master-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-view #pageView>\r\n  <mat-toolbar class=\"flex-shrink-0\" toolbar>\r\n    <button (click)=\"pageView.toggleLeft()\" mat-icon-button>\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <h1 class=\"mr-auto\">Master Detail View</h1>\r\n    <button (click)=\"pageView.toggleRight()\" mat-icon-button>\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n  </mat-toolbar>\r\n\r\n  <ng-container left>\r\n    <mat-list>\r\n      <h3 mat-subheader>Folders</h3>\r\n      <mat-list-item *ngFor=\"let item of master\">\r\n        <mat-icon mat-list-icon>folder</mat-icon>\r\n        <h4 mat-line>{{item.name}}</h4>\r\n        <p mat-line> {{item.updated | date}} </p>\r\n      </mat-list-item>\r\n      <mat-divider></mat-divider>\r\n      <h3 mat-subheader>Notes</h3>\r\n      <mat-list-item *ngFor=\"let item of master\">\r\n        <mat-icon mat-list-icon>note</mat-icon>\r\n        <h4 mat-line>{{item.name}}</h4>\r\n        <p mat-line> {{item.updated | date}} </p>\r\n      </mat-list-item>\r\n    </mat-list>\r\n  </ng-container>\r\n\r\n  <ng-container right>\r\n    <mat-action-list>\r\n      <h3 mat-subheader>Folders</h3>\r\n      <mat-list-item *ngFor=\"let item of master\">\r\n        <mat-icon mat-list-icon>folder</mat-icon>\r\n        <h4 mat-line>{{item.name}}</h4>\r\n        <p mat-line> {{item.updated | date}} </p>\r\n      </mat-list-item>\r\n      <mat-divider></mat-divider>\r\n      <h3 mat-subheader>Notes</h3>\r\n      <mat-list-item *ngFor=\"let item of master\">\r\n        <mat-icon mat-list-icon>note</mat-icon>\r\n        <h4 mat-line>{{item.name}}</h4>\r\n        <p mat-line> {{item.updated | date}} </p>\r\n      </mat-list-item>\r\n    </mat-action-list>\r\n  </ng-container>\r\n\r\n  <div center class=\"scroll scroll-y h-100\">\r\n    <table [dataSource]=\"dataSource\" class=\"w-100\" mat-table>\r\n\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"position\">\r\n        <th *matHeaderCellDef mat-header-cell> No.</th>\r\n        <td *matCellDef=\"let element\" mat-cell> {{element.position}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th *matHeaderCellDef mat-header-cell> Name</th>\r\n        <td *matCellDef=\"let element\" mat-cell> {{element.name}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Weight Column -->\r\n      <ng-container matColumnDef=\"weight\">\r\n        <th *matHeaderCellDef mat-header-cell> Weight</th>\r\n        <td *matCellDef=\"let element\" mat-cell> {{element.weight}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Symbol Column -->\r\n      <ng-container matColumnDef=\"symbol\">\r\n        <th *matHeaderCellDef mat-header-cell> Symbol</th>\r\n        <td *matCellDef=\"let element\" mat-cell> {{element.symbol}} </td>\r\n      </ng-container>\r\n\r\n      <tr *matHeaderRowDef=\"displayedColumns\" mat-header-row></tr>\r\n      <tr *matRowDef=\"let row; columns: displayedColumns;\" mat-row></tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[20, 50, 100]\" showFirstLastButtons></mat-paginator>\r\n  </div>\r\n\r\n</app-page-view>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/views/master-detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/views/master-detail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC92aWV3cy9tYXN0ZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/views/master-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard/views/master-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: MasterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDetailComponent", function() { return MasterDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
var MasterDetailComponent = /** @class */ (function () {
    function MasterDetailComponent() {
        this.class = 'flex-grow-1 d-flex flex-column';
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.master = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
        this.detail = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
    }
    MasterDetailComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MasterDetailComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], MasterDetailComponent.prototype, "paginator", void 0);
    MasterDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-master-detail',
            template: __webpack_require__(/*! ./master-detail.component.html */ "./src/app/pages/dashboard/views/master-detail.component.html"),
            styles: [__webpack_require__(/*! ./master-detail.component.scss */ "./src/app/pages/dashboard/views/master-detail.component.scss")]
        })
    ], MasterDetailComponent);
    return MasterDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/views/page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/dashboard/views/page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-view>\r\n  <mat-toolbar class=\"flex-shrink-0\" toolbar>\r\n    <h2>Page</h2>\r\n  </mat-toolbar>\r\n\r\n  <mat-drawer #drawerLeft left position=\"start\">\r\n    <mat-nav-list style=\"width:300px\">\r\n      <a mat-list-item routerLink=\"home\">home</a>\r\n      <a mat-list-item routerLink=\"about\">about</a>\r\n      <a mat-list-item routerLink=\"page\">page</a>\r\n    </mat-nav-list>\r\n  </mat-drawer>\r\n\r\n  <mat-drawer #drawerRight mode=\"side\" position=\"end\" right>\r\n    <mat-nav-list style=\"width:300px\">\r\n      <a mat-list-item routerLink=\"home\">home</a>\r\n      <a mat-list-item routerLink=\"about\">about</a>\r\n      <a mat-list-item routerLink=\"page\">page</a>\r\n    </mat-nav-list>\r\n  </mat-drawer>\r\n\r\n  <div class=\"jumbotron rounded-0\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4\">Hello, world!</h1>\r\n      <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to\r\n        featured content or information.</p>\r\n      <hr class=\"my-4\">\r\n      <p>It uses utility classes for typography band spacing to space content out within the larger container.</p>\r\n      <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\r\n    </div>\r\n  </div>\r\n\r\n</app-page-view>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/views/page.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/dashboard/views/page.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC92aWV3cy9wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/views/page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/views/page.component.ts ***!
  \*********************************************************/
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
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/pages/dashboard/views/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.scss */ "./src/app/pages/dashboard/views/page.component.scss")]
        })
    ], PageComponent);
    return PageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-module.js.map