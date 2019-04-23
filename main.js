(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/admin/module": [
		"./src/app/pages/admin/module.ts",
		"pages-admin-module"
	],
	"./pages/dashboard/module": [
		"./src/app/pages/dashboard/module.ts",
		"pages-dashboard-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.class = 'd-flex flex-column scroll vh-100';
    }
    AppComponent.prototype.toggleLeft = function () {
        this.leftSide.toggle();
    };
    AppComponent.prototype.toggleRight = function () {
        this.rightSide.toggle();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('topToobar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"])
    ], AppComponent.prototype, "topToobar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('leftSide'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], AppComponent.prototype, "leftSide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rightSide'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], AppComponent.prototype, "rightSide", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/components/material.module.ts");
/* harmony import */ var _page_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-view.component */ "./src/app/components/page-view.component.ts");
/* harmony import */ var _page_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-layout.component */ "./src/app/components/page-layout.component.ts");







var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _page_view_component__WEBPACK_IMPORTED_MODULE_5__["PageViewComponent"],
                _page_layout_component__WEBPACK_IMPORTED_MODULE_6__["PageLayoutComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            exports: [
                _page_view_component__WEBPACK_IMPORTED_MODULE_5__["PageViewComponent"],
                _page_layout_component__WEBPACK_IMPORTED_MODULE_6__["PageLayoutComponent"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/material.module.ts":
/*!***********************************************!*\
  !*** ./src/app/components/material.module.ts ***!
  \***********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/components/page-layout.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/page-layout.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar #toolbar class=\"flex-shrink-0\" color=\"primary\">\r\n  <ng-content select=[toolbar]></ng-content>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container class=\"flex-grow-1 d-flex flex-row\">\r\n\r\n  <mat-sidenav #leftSide position=\"start\">\r\n    <ng-content select=[leftSide]></ng-content>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content class=\"flex-grow-1 d-flex flex-column\">\r\n    <ng-content></ng-content>\r\n  </mat-sidenav-content>\r\n\r\n  <mat-sidenav #rightSide position=\"end\">\r\n    <ng-content select=[rightSide]></ng-content>\r\n  </mat-sidenav>\r\n\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/components/page-layout.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/page-layout.component.ts ***!
  \*****************************************************/
/*! exports provided: PageLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutComponent", function() { return PageLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");





var PageLayoutComponent = /** @class */ (function () {
    function PageLayoutComponent(breakpointObserver) {
        var _this = this;
        this.class = 'd-flex flex-column vh-100';
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XLarge,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large
        ]).subscribe(function (result) {
            if (result.matches) {
                console.log('page-layout activate web Layout', result.breakpoints);
                _this.activateLargeLayout();
            }
            else {
                console.log('page-layout activate small Layout', result.breakpoints);
                _this.noActivateLayout();
            }
        });
    }
    PageLayoutComponent.prototype.togleSide = function (side, mode, open) {
        side.mode = mode;
        side.opened = open;
        return this;
    };
    PageLayoutComponent.prototype.toggleLeft = function () {
        this.leftSide.toggle();
    };
    PageLayoutComponent.prototype.toggleRight = function () {
        this.rightSide.toggle();
    };
    PageLayoutComponent.prototype.activateLargeLayout = function () {
        this.togleSide(this.leftSide, 'side', true);
        this.togleSide(this.rightSide, 'side', false);
    };
    PageLayoutComponent.prototype.noActivateLayout = function () {
        this.togleSide(this.leftSide, 'over', false);
        this.togleSide(this.rightSide, 'over', false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageLayoutComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toolbar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"])
    ], PageLayoutComponent.prototype, "toolbar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('leftSide'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"])
    ], PageLayoutComponent.prototype, "leftSide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rightSide'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"])
    ], PageLayoutComponent.prototype, "rightSide", void 0);
    PageLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-layout',
            template: __webpack_require__(/*! ./page-layout.component.html */ "./src/app/components/page-layout.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], PageLayoutComponent);
    return PageLayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/page-view.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/page-view.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content select=\"[toolbar]\"></ng-content>\r\n\r\n<mat-drawer-container autosize class=\"flex-grow-1 d-flex flex-row\">\r\n\r\n  <mat-drawer #leftDrawer class=\"col-60 col-sm-30 col-md-20 col-lg-10 scroll scroll-y h-100\" position=\"start\">\r\n    <ng-content select=[left]></ng-content>\r\n  </mat-drawer>\r\n\r\n  <mat-drawer-content class=\"flex-grow-1 pl-lg-2 pr-lg-2\">\r\n    <ng-content select=[center]></ng-content>\r\n  </mat-drawer-content>\r\n\r\n  <mat-drawer #rightDrawer class=\"col-60 col-sm-30 col-md-20 col-lg-15\" position=\"end\">\r\n    <ng-content select=[right]></ng-content>\r\n  </mat-drawer>\r\n</mat-drawer-container>\r\n\r\n<ng-content select=\"[appbar]\"></ng-content>\r\n"

/***/ }),

/***/ "./src/app/components/page-view.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/page-view.component.ts ***!
  \***************************************************/
/*! exports provided: PageViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageViewComponent", function() { return PageViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var PageViewComponent = /** @class */ (function () {
    function PageViewComponent(breakpointObserver) {
        var _this = this;
        this.class = 'flex-grow-1 d-flex flex-column';
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large
        ]).subscribe(function (result) {
            if (result.matches) {
                console.log('pave-view Large Layout', result.breakpoints);
                _this.activateLargeLayout();
            }
        });
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Medium
        ]).subscribe(function (result) {
            if (result.matches) {
                console.log('pave-view activate Medium Layout', result.breakpoints);
                _this.activateMediumLayout();
            }
        });
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall
        ]).subscribe(function (result) {
            if (result.matches) {
                console.log('pave-view activate Small Layout', result.breakpoints);
                _this.activateSmallLayout();
            }
        });
    }
    PageViewComponent.prototype.togleSide = function (drawer, mode, open) {
        drawer.mode = mode;
        drawer.opened = open;
        return this;
    };
    PageViewComponent.prototype.toggleLeft = function () {
        this.leftDrawer.toggle();
    };
    PageViewComponent.prototype.toggleRight = function () {
        this.rightDrawer.toggle();
    };
    PageViewComponent.prototype.activateLargeLayout = function () {
        this
            .togleSide(this.leftDrawer, 'side', true)
            .togleSide(this.rightDrawer, 'side', true);
    };
    PageViewComponent.prototype.activateMediumLayout = function () {
        this
            .togleSide(this.leftDrawer, 'side', true)
            .togleSide(this.rightDrawer, 'side', false);
    };
    PageViewComponent.prototype.activateSmallLayout = function () {
        this
            .togleSide(this.leftDrawer, 'over', false)
            .togleSide(this.rightDrawer, 'over', false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageViewComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('leftDrawer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"])
    ], PageViewComponent.prototype, "leftDrawer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rightDrawer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"])
    ], PageViewComponent.prototype, "rightDrawer", void 0);
    PageViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-view',
            template: __webpack_require__(/*! ./page-view.component.html */ "./src/app/components/page-view.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], PageViewComponent);
    return PageViewComponent;
}());



/***/ }),

/***/ "./src/app/home.component.html":
/*!*************************************!*\
  !*** ./src/app/home.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">Angular App Login</h1>\r\n    <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to\r\n      featured content or information.</p>\r\n    <hr class=\"my-4\">\r\n    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\r\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" routerLink=\"\">Learn more</a>\r\n  </div>\r\n</div>\r\n<div class=\"jumbotron bg-white text-dark rounded-0\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h1 class=\"display-4\">Dashboard App</h1>\r\n        <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to\r\n          featured content or information.</p>\r\n        <hr class=\"my-4\">\r\n        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\r\n        <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" routerLink=\"dashboard\">Learn more</a>\r\n      </div>\r\n      <div class=\"col\">\r\n        <h1 class=\"display-4\">Admin App</h1>\r\n        <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to\r\n          featured content or information.</p>\r\n        <hr class=\"my-4\">\r\n        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\r\n        <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" routerLink=\"admin\">Learn more</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"jumbotron bg-white text-dark rounded-0\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h1 class=\"display-4\">Report App</h1>\r\n        <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to\r\n          featured content or information.</p>\r\n        <hr class=\"my-4\">\r\n        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\r\n        <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" routerLink=\"dashboard\">Learn more</a>\r\n      </div>\r\n      <div class=\"col\">\r\n        <h1 class=\"display-4\">Admin App</h1>\r\n        <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to\r\n          featured content or information.</p>\r\n        <hr class=\"my-4\">\r\n        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\r\n        <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" routerLink=\"admin\">Learn more</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
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
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");




var routes = [
    {
        path: 'dashboard',
        loadChildren: './pages/dashboard/module#DashboardModule'
    },
    {
        path: 'admin',
        loadChildren: './pages/admin/module#AdminModule'
    },
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    enableTracing: false
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\develop\webapp3\AngularApp1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map