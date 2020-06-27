function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'nuevoCurso1906';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["body[_ngcontent-%COMP%]{\r\n    overflow-x: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _componentes_reactivos_reactivos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./componentes/reactivos/reactivos.component */
    "./src/app/componentes/reactivos/reactivos.component.ts");
    /* harmony import */


    var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./componentes/login/login.component */
    "./src/app/componentes/login/login.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _componentes_rest_rest_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./componentes/rest/rest.component */
    "./src/app/componentes/rest/rest.component.ts");
    /* harmony import */


    var _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./componentes/navbar/navbar.component */
    "./src/app/componentes/navbar/navbar.component.ts");
    /* harmony import */


    var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./componentes/footer/footer.component */
    "./src/app/componentes/footer/footer.component.ts");
    /* harmony import */


    var _componentes_panel_panel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./componentes/panel/panel.component */
    "./src/app/componentes/panel/panel.component.ts");
    /* harmony import */


    var _guards_login_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./guards/login.guard */
    "./src/app/guards/login.guard.ts");
    /* harmony import */


    var _guards_panel_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./guards/panel.guard */
    "./src/app/guards/panel.guard.ts");
    /* harmony import */


    var _componentes_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./componentes/perfil/perfil.component */
    "./src/app/componentes/perfil/perfil.component.ts"); //REST API


    var rutas = [{
      path: 'login',
      component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
      canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_16__["LoginGuard"]]
    }, {
      path: 'registro',
      component: _componentes_reactivos_reactivos_component__WEBPACK_IMPORTED_MODULE_5__["ReactivosComponent"],
      canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_16__["LoginGuard"]]
    }, {
      path: 'panel',
      component: _componentes_panel_panel_component__WEBPACK_IMPORTED_MODULE_15__["PanelComponent"],
      canActivate: [_guards_panel_guard__WEBPACK_IMPORTED_MODULE_17__["PanelGuard"]]
    }, {
      path: 'perfil',
      component: _componentes_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_18__["PerfilComponent"],
      canActivate: [_guards_panel_guard__WEBPACK_IMPORTED_MODULE_17__["PanelGuard"]]
    }, {
      path: 'rest',
      component: _componentes_rest_rest_component__WEBPACK_IMPORTED_MODULE_12__["RestComponent"]
    }, {
      path: '**',
      component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
      canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_16__["LoginGuard"]]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(rutas), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["firebaseConfig"]), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _componentes_reactivos_reactivos_component__WEBPACK_IMPORTED_MODULE_5__["ReactivosComponent"], _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _componentes_rest_rest_component__WEBPACK_IMPORTED_MODULE_12__["RestComponent"], _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"], _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _componentes_panel_panel_component__WEBPACK_IMPORTED_MODULE_15__["PanelComponent"], _componentes_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_18__["PerfilComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _componentes_reactivos_reactivos_component__WEBPACK_IMPORTED_MODULE_5__["ReactivosComponent"], _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _componentes_rest_rest_component__WEBPACK_IMPORTED_MODULE_12__["RestComponent"], _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"], _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _componentes_panel_panel_component__WEBPACK_IMPORTED_MODULE_15__["PanelComponent"], _componentes_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_18__["PerfilComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(rutas), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["firebaseConfig"]), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/footer/footer.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/componentes/footer/footer.component.ts ***!
    \********************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentesFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 5,
      vars: 0,
      consts: [[1, "page-footer", "font-small", "unique-color-dark", "pt-4"], [1, "footer-copyright", "text-center", "py-3"], ["href", "http://hscompany.epizy.com/", "target", "_blank"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA9 2020 Copyright: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Hs Company Technology");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/login/login.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/componentes/login/login.component.ts ***!
    \******************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../servicios/auth.service */
    "./src/app/servicios/auth.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/componentes/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/componentes/footer/footer.component.ts");

    function LoginComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El formato de email es inv\xE1lido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contrase\xF1a requerida");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Entrar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.validacionForm.invalid);
      }
    }

    var _c0 = function _c0() {
      return ["/registro"];
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(builder, auth) {
        _classCallCheck(this, LoginComponent);

        this.builder = builder;
        this.auth = auth;
        this.validacionForm = builder.group({
          correo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
          clave: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login(valores) {
          this.auth.login(valores.correo, valores.clave);
        }
      }, {
        key: "google",
        value: function google() {
          this.auth.google();
        }
      }, {
        key: "facebook",
        value: function facebook() {
          this.auth.facebook();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 28,
      vars: 6,
      consts: [[1, "container"], [1, "row", "my-5"], [1, "col-xs-12", "col-md-12"], [1, "card"], [1, "card-header"], [1, "text-center"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "email", "placeholder", "Correo: ", "formControlName", "correo", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "placeholder", "Contrase\xF1a: ", "formControlName", "clave", 1, "form-control"], ["class", "form-group", 4, "ngIf"], [1, "card-footer"], [1, "btn", "btn-info", "text-center", 3, "routerLink"], [1, "icon", "icon-mail2"], [1, "btn", "btn-danger", "btn-google", 3, "click"], [1, "icon", "icon-google3"], [1, "btn", "btn-primary", "btn-facebook", 3, "click"], [1, "icon", "icon-facebook2"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-dark", "btn-login", 3, "disabled"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Inicio de Sesi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
            return ctx.login(ctx.validacionForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 3, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \xBFRegistrarse?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() {
            return ctx.google();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Iniciar con Google");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_24_listener() {
            return ctx.facebook();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Iniciar con Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validacionForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validacionForm.get("correo").hasError("email") && ctx.validacionForm.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validacionForm.get("clave").hasError("required") && ctx.validacionForm.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validacionForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
      styles: [".card[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin-left: 26%;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%]{\r\n    display: contents;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-top: 2px;\r\n}\r\n\r\n.btn-login[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n.btn-google[_ngcontent-%COMP%]{\r\n    background: #DB4437;\r\n}\r\n\r\n.btn-facebook[_ngcontent-%COMP%]{\r\n    background: #3b5998;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    .card[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        margin-left: 0%;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsZUFBZTtJQUNuQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNiU7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlcntcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIgYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4uYnRuLWxvZ2lue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idG4tZ29vZ2xle1xyXG4gICAgYmFja2dyb3VuZDogI0RCNDQzNztcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9va3tcclxuICAgIGJhY2tncm91bmQ6ICMzYjU5OTg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgfVxyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/navbar/navbar.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/componentes/navbar/navbar.component.ts ***!
    \********************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentesNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../servicios/auth.service */
    "./src/app/servicios/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function NavbarComponent_button_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/perfil"];
    };

    function NavbarComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Editar Perfil");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_4_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.cerrarSesion();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cerrar Sesi\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.usuario.nombre, " ", ctx_r1.usuario.apellido, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
      }
    }

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(servicio) {
        var _this = this;

        _classCallCheck(this, NavbarComponent);

        this.servicio = servicio;
        this.usuario = [];
        this.servicio.datosUsuario().subscribe(function (usu) {
          if (usu == null) {
            _this.usuario = "";
          } else {
            _this.consultarLogin(usu.uid);
          }
        });
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "consultarLogin",
        value: function consultarLogin(id) {
          var _this2 = this;

          this.servicio.usuarioLogueado(id).subscribe(function (datos) {
            _this2.usuario = datos;
            console.log(_this2.usuario);
          });
        }
      }, {
        key: "cerrarSesion",
        value: function cerrarSesion() {
          this.servicio.cerrarSesion();
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 5,
      vars: 2,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-light", "bg-danger"], ["href", "#", 1, "navbar-brand"], ["class", "navbar-toggler", "type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 4, "ngIf"], ["class", "collapse navbar-collapse", "id", "navbarNavDropdown", 4, "ngIf"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "dropdown"], ["href", "#", "id", "opciones", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "opciones", 1, "dropdown-menu", "bg-danger"], [1, "dropdown-item", 3, "routerLink"], [1, "dropdown-item", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reactivo App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavbarComponent_button_3_Template, 2, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_div_4_Template, 10, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuario.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuario.nombre);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #opciones[_ngcontent-%COMP%], #opciones[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:white;\r\n}\r\n.dropdown-item[_ngcontent-%COMP%]:hover{\r\n    color: rgba(0,0,0,0.6);\r\n    cursor: pointer;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5uYXYgYSwgI29wY2lvbmVzLCAjb3BjaW9uZXMgYXtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbi5kcm9wZG93bi1pdGVtOmhvdmVye1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5uYXYgbGl7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/panel/panel.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/componentes/panel/panel.component.ts ***!
    \******************************************************/

  /*! exports provided: PanelComponent */

  /***/
  function srcAppComponentesPanelPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelComponent", function () {
      return PanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../servicios/auth.service */
    "./src/app/servicios/auth.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/componentes/navbar/navbar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/componentes/footer/footer.component.ts");

    var PanelComponent = /*#__PURE__*/function () {
      function PanelComponent(servicio) {
        _classCallCheck(this, PanelComponent);

        this.servicio = servicio;
      }

      _createClass(PanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cerrar",
        value: function cerrar() {
          this.servicio.cerrarSesion();
        }
      }]);

      return PanelComponent;
    }();

    PanelComponent.ɵfac = function PanelComponent_Factory(t) {
      return new (t || PanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PanelComponent,
      selectors: [["app-panel"]],
      decls: 2,
      vars: 0,
      template: function PanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-panel',
          templateUrl: './panel.component.html',
          styleUrls: ['./panel.component.css']
        }]
      }], function () {
        return [{
          type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/perfil/perfil.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/componentes/perfil/perfil.component.ts ***!
    \********************************************************/

  /*! exports provided: PerfilComponent */

  /***/
  function srcAppComponentesPerfilPerfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilComponent", function () {
      return PerfilComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert */
    "./node_modules/sweetalert/dist/sweetalert.min.js");
    /* harmony import */


    var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../servicios/auth.service */
    "./src/app/servicios/auth.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/componentes/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/componentes/footer/footer.component.ts");

    function PerfilComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PerfilComponent_div_11_Template_input_change_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.validarFoto($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.usuario.foto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PerfilComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subir Foto: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PerfilComponent_ng_template_12_Template_input_change_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.validarFoto($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/panel"];
    };

    var PerfilComponent = /*#__PURE__*/function () {
      function PerfilComponent(builder, servicio) {
        var _this3 = this;

        _classCallCheck(this, PerfilComponent);

        this.builder = builder;
        this.servicio = servicio;
        this.usuario = [];
        this.foto = [];
        this.subioFoto = false;
        this.servicio.datosUsuario().subscribe(function (datos) {
          _this3.servicio.usuarioLogueado(datos.uid).subscribe(function (usu) {
            _this3.usuario = usu;
          });
        });
      }

      _createClass(PerfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "consultarDatos",
        value: function consultarDatos(id) {
          var _this4 = this;

          this.servicio.usuarioLogueado(id).subscribe(function (usu) {
            _this4.usuario = usu;
          });
        }
      }, {
        key: "validarFoto",
        value: function validarFoto(e) {
          this.foto = e;
          this.subioFoto = true;
          console.log(this.foto);
        }
      }, {
        key: "actualizarInfo",
        value: function actualizarInfo() {
          if (this.usuario.nombre == "" || this.usuario.apellido == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_1___default()('Error', 'La información proporcionada es incorrecta. Por favor complete los datos.', 'error');
          }

          console.log(this.foto, this.usuario, this.subioFoto);
          this.servicio.actualizarPerfil(this.foto, this.usuario, this.subioFoto).then(function (ok) {
            sweetalert__WEBPACK_IMPORTED_MODULE_1___default()('Exito', 'Información actualizada', 'success');
          })["catch"](function (err) {
            sweetalert__WEBPACK_IMPORTED_MODULE_1___default()('Falló al subir foto', err.code, 'error');
          });
        }
      }]);

      return PerfilComponent;
    }();

    PerfilComponent.ɵfac = function PerfilComponent_Factory(t) {
      return new (t || PerfilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    PerfilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PerfilComponent,
      selectors: [["app-perfil"]],
      decls: 28,
      vars: 6,
      consts: [[1, "container"], [1, "row"], [1, "col-lg-12"], [1, "btn", "btn-info", "my-3", 3, "routerLink"], [1, "card", "my-5"], [1, "card-header"], [1, "card-body"], ["class", "form-group", 4, "ngIf", "ngIfElse"], ["subir", ""], [1, "form-group"], ["for", "nombre"], ["type", "text", "placeholder", "Digite Nombre", "id", "nombre", "autocomplete", "off", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "apellido"], ["type", "text", "placeholder", "Digite Apellido", "id", "apellido", "autocomplete", "off", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-info", 3, "click"], [1, "card-footer"], ["width", "80", 1, "image-thumbail", 3, "src"], ["type", "file", "accept", "image/jpg,image/jpeg,image/x-png", 1, "form-control", 3, "change"], ["for", "foto"], ["id", "foto", "type", "file", "accept", "image/jpg,image/jpeg,image/x-png", 1, "form-control", 3, "change"]],
      template: function PerfilComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Volver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Mi Perfil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PerfilComponent_div_11_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PerfilComponent_ng_template_12_Template, 4, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nombre: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.usuario.nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Apellido: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.usuario.apellido = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilComponent_Template_button_click_23_listener() {
            return ctx.actualizarInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Actualizar Datos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Footer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-footer");
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuario.foto)("ngIfElse", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.apellido);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
      styles: [".card[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin-left: 26%;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-top: 2px;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    .card[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        margin-left: 0%;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBR0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9wZXJmaWwvcGVyZmlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjYlO1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIgYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuY2FyZHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-perfil',
          templateUrl: './perfil.component.html',
          styleUrls: ['./perfil.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/reactivos/reactivos.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/componentes/reactivos/reactivos.component.ts ***!
    \**************************************************************/

  /*! exports provided: ReactivosComponent */

  /***/
  function srcAppComponentesReactivosReactivosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReactivosComponent", function () {
      return ReactivosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../servicios/auth.service */
    "./src/app/servicios/auth.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/componentes/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/componentes/footer/footer.component.ts");

    function ReactivosComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Campo Requerido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ReactivosComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Campo Requerido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ReactivosComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El email es incorrecto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ReactivosComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Campo Requerido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ReactivosComponent_ng_template_22_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " La contrase\xF1a debe tener m\xEDnimo 6 caracteres ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ReactivosComponent_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReactivosComponent_ng_template_22_div_0_Template, 2, 0, "div", 10);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.validacionForm.get("clave").hasError("minLength") && ctx_r5.validacionForm.get("clave").touched);
      }
    }

    function ReactivosComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registrarse");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.validacionForm.invalid);
      }
    }

    var _c0 = function _c0() {
      return ["/login"];
    };

    var ReactivosComponent = /*#__PURE__*/function () {
      function ReactivosComponent(builder, servicio) {
        _classCallCheck(this, ReactivosComponent);

        this.builder = builder;
        this.servicio = servicio;
        this.validacionForm = builder.group({
          nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          usuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
          clave: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])]
        });
      }

      _createClass(ReactivosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "registro",
        value: function registro(valores) {
          this.servicio.registro(valores.nombre, valores.usuario, valores.email, valores.clave);
        }
      }, {
        key: "google",
        value: function google() {
          this.servicio.google();
        }
      }, {
        key: "facebook",
        value: function facebook() {
          this.servicio.facebook();
        }
      }]);

      return ReactivosComponent;
    }();

    ReactivosComponent.ɵfac = function ReactivosComponent_Factory(t) {
      return new (t || ReactivosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    ReactivosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReactivosComponent,
      selectors: [["app-reactivos"]],
      decls: 36,
      vars: 9,
      consts: [[1, "container"], [1, "row"], [1, "col-xs-12", "col-md-12"], [1, "card", "my-5"], [1, "card-header"], [1, "text-center"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["formControlName", "nombre", "type", "text", "placeholder", "Nombre", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "usuario", "type", "text", "placeholder", "Apellido", 1, "form-control"], ["formControlName", "email", "type", "email", "placeholder", "Correo", 1, "form-control"], ["formControlName", "clave", "type", "password", "placeholder", "Contrase\xF1a", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf", "ngIfElse"], ["longitud", ""], ["class", "form-group", 4, "ngIf"], [1, "card-footer"], [1, "btn", "btn-info", "text-center", 3, "routerLink"], [1, "icon", "icon-user-check"], [1, "btn", "btn-danger", "btn-google", 3, "click"], [1, "icon", "icon-google3"], [1, "btn", "btn-primary", "btn-facebook", 3, "click"], [1, "icon", "icon-facebook2"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-danger", 3, "disabled"]],
      template: function ReactivosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Registro en Reactivo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ReactivosComponent_Template_form_ngSubmit_9_listener() {
            return ctx.registro(ctx.validacionForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ReactivosComponent_div_12_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReactivosComponent_div_15_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ReactivosComponent_div_18_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ReactivosComponent_div_21_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ReactivosComponent_ng_template_22_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ReactivosComponent_div_24_Template, 3, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \xBFTienes cuenta?, Inicia Sesi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReactivosComponent_Template_button_click_29_listener() {
            return ctx.google();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Crear con Google");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReactivosComponent_Template_button_click_32_listener() {
            return ctx.facebook();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Crear con Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-footer");
        }

        if (rf & 2) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validacionForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validacionForm.get("nombre").hasError("required") && ctx.validacionForm.get("nombre").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validacionForm.get("usuario").hasError("required") && ctx.validacionForm.get("usuario").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validacionForm.get("email").hasError("email") && ctx.validacionForm.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validacionForm.get("clave").hasError("required") && ctx.validacionForm.get("clave").touched)("ngIfElse", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validacionForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
      styles: [".card[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin-left: 26%;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%]{\r\n    display: contents;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-top: 2px;\r\n}\r\n\r\n.btn-login[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n.btn-google[_ngcontent-%COMP%]{\r\n    background: #DB4437;\r\n}\r\n\r\n.btn-facebook[_ngcontent-%COMP%]{\r\n    background: #3b5998;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    .card[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        margin-left: 0%;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcmVhY3Rpdm9zL3JlYWN0aXZvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9yZWFjdGl2b3MvcmVhY3Rpdm9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjYlO1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIGJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLmJ0bi1sb2dpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuLWdvb2dsZXtcclxuICAgIGJhY2tncm91bmQ6ICNEQjQ0Mzc7XHJcbn1cclxuXHJcbi5idG4tZmFjZWJvb2t7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5jYXJke1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgIH1cclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReactivosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reactivos',
          templateUrl: './reactivos.component.html',
          styleUrls: ['./reactivos.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/rest/rest.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/componentes/rest/rest.component.ts ***!
    \****************************************************/

  /*! exports provided: RestComponent */

  /***/
  function srcAppComponentesRestRestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestComponent", function () {
      return RestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _servicios_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../servicios/task.service */
    "./src/app/servicios/task.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var RestComponent = /*#__PURE__*/function () {
      function RestComponent(servicioTask) {
        _classCallCheck(this, RestComponent);

        this.servicioTask = servicioTask;
      }

      _createClass(RestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getAllTask",
        value: function getAllTask() {
          this.servicioTask.getAllTask().subscribe(function (todos) {
            console.log(todos);
          });
        }
      }, {
        key: "getTask",
        value: function getTask() {
          this.servicioTask.getTask(this.ide).subscribe(function (uno) {
            console.log(uno);
          });
        }
      }, {
        key: "createTask",
        value: function createTask() {
          var task = {
            userId: "1364343436",
            id: "344646464",
            title: "Hola Munbdo",
            completed: true
          };
          this.servicioTask.createTask(task).subscribe(function (crear) {
            console.log(crear);
          });
        }
      }, {
        key: "updateTask",
        value: function updateTask() {
          var task = {
            userId: "1364343436",
            id: "190",
            title: "Hola Mundo",
            completed: true
          };
          this.servicioTask.updateTask(task).subscribe(function (actualiza) {
            console.log(actualiza);
          });
        }
      }, {
        key: "deleteTask",
        value: function deleteTask() {
          this.servicioTask.deleteTask(this.ide).subscribe(function (elimina) {
            console.log(elimina);
          });
        }
      }]);

      return RestComponent;
    }();

    RestComponent.ɵfac = function RestComponent_Factory(t) {
      return new (t || RestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]));
    };

    RestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RestComponent,
      selectors: [["app-rest"]],
      decls: 15,
      vars: 1,
      consts: [[1, "btn", "btn-dark", 3, "click"], [1, "card", "my-5"], ["placeholder", "digite el numero de la tarea", 1, "form-control", 3, "ngModel", "ngModelChange"]],
      template: function RestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RestComponent_Template_button_click_0_listener() {
            return ctx.getAllTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Obtener tareas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RestComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.ide = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RestComponent_Template_button_click_5_listener() {
            return ctx.getTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Obtener una sola");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RestComponent_Template_button_click_9_listener() {
            return ctx.createTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Crear Task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RestComponent_Template_button_click_11_listener() {
            return ctx.updateTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Actualizar Task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RestComponent_Template_button_click_13_listener() {
            return ctx.deleteTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Eliminar Task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ide);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3Jlc3QvcmVzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rest',
          templateUrl: './rest.component.html',
          styleUrls: ['./rest.component.css']
        }]
      }], function () {
        return [{
          type: _servicios_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/login.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/guards/login.guard.ts ***!
    \***************************************/

  /*! exports provided: LoginGuard */

  /***/
  function srcAppGuardsLoginGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
      return LoginGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginGuard = /*#__PURE__*/function () {
      function LoginGuard(auth, navegar) {
        _classCallCheck(this, LoginGuard);

        this.auth = auth;
        this.navegar = navegar;
      }

      _createClass(LoginGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this5 = this;

          return this.auth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (usu) {
            if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(usu)) {
              return true;
            } else {
              _this5.navegar.navigate(['/panel']);

              return false;
            }
          }));
        }
      }]);

      return LoginGuard;
    }();

    LoginGuard.ɵfac = function LoginGuard_Factory(t) {
      return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginGuard,
      factory: LoginGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/panel.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/guards/panel.guard.ts ***!
    \***************************************/

  /*! exports provided: PanelGuard */

  /***/
  function srcAppGuardsPanelGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelGuard", function () {
      return PanelGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PanelGuard = /*#__PURE__*/function () {
      function PanelGuard(auth, navegar) {
        _classCallCheck(this, PanelGuard);

        this.auth = auth;
        this.navegar = navegar;
      }

      _createClass(PanelGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this6 = this;

          return this.auth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (usu) {
            if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(usu)) {
              _this6.navegar.navigate(['/login']);

              return false;
            } else {
              return true;
            }
          }));
        }
      }]);

      return PanelGuard;
    }();

    PanelGuard.ɵfac = function PanelGuard_Factory(t) {
      return new (t || PanelGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    PanelGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PanelGuard,
      factory: PanelGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/servicios/auth.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/servicios/auth.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServiciosAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert */
    "./node_modules/sweetalert/dist/sweetalert.min.js");
    /* harmony import */


    var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(bdAuth, bdFire, navegar, alamacenar) {
        _classCallCheck(this, AuthService);

        this.bdAuth = bdAuth;
        this.bdFire = bdFire;
        this.navegar = navegar;
        this.alamacenar = alamacenar;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(correo, clave) {
          var _this7 = this;

          return new Promise(function (resolve, rejected) {
            _this7.bdAuth.signInWithEmailAndPassword(correo, clave).then(function (datos) {
              _this7.navegar.navigate(['/panel']);

              resolve(datos);
            })["catch"](function (error) {
              sweetalert__WEBPACK_IMPORTED_MODULE_2___default()('Error al Iniciar Sesión', error.code, 'error');
              rejected(error);
            });
          });
        }
      }, {
        key: "registro",
        value: function registro(nombre, apellido, correo, clave) {
          var _this8 = this;

          return new Promise(function (resolve, rejected) {
            _this8.bdAuth.createUserWithEmailAndPassword(correo, clave).then(function (datos) {
              _this8.bdFire.collection('usuarios').doc(datos.user.uid).set({
                'nombre': nombre,
                'apellido': apellido,
                'correo': correo,
                'foto': '',
                'id': datos.user.uid
              });

              _this8.navegar.navigate(['/panel']);

              resolve(datos);
            })["catch"](function (err) {
              sweetalert__WEBPACK_IMPORTED_MODULE_2___default()('Error al crear cuenta', err.code, 'error');
              rejected(err);
            });
          });
        }
      }, {
        key: "google",
        value: function google() {
          var _this9 = this;

          return new Promise(function (resolve, rejected) {
            _this9.bdAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider()).then(function (datos) {
              _this9.bdFire.collection('usuarios').doc(datos.user.uid).valueChanges().subscribe(function (existe) {
                if (existe != null) {} else {
                  var usuario = datos.user.displayName;
                  var nombre = usuario.substr(0, usuario.indexOf(' '));
                  var longitud = nombre.length;
                  var apellido = usuario.substr(longitud + 1);

                  _this9.bdFire.collection('usuarios').doc(datos.user.uid).set({
                    'nombre': nombre,
                    'apellido': apellido,
                    'correo': datos.user.email,
                    'foto': '',
                    'id': datos.user.uid
                  });
                }
              });

              _this9.navegar.navigate(['/panel']);

              resolve(datos);
            })["catch"](function (err) {
              sweetalert__WEBPACK_IMPORTED_MODULE_2___default()('Error al Iniciar Sesión', err.code, 'error');
              rejected(err);
            });
          });
        }
      }, {
        key: "facebook",
        value: function facebook() {
          var _this10 = this;

          return new Promise(function (resolve, rejected) {
            _this10.bdAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider()).then(function (datos) {
              _this10.bdFire.collection('usuarios').doc(datos.user.uid).valueChanges().subscribe(function (existe) {
                if (existe != null) {} else {
                  var usuario = datos.user.displayName;
                  var nombre = usuario.substr(0, usuario.indexOf(' '));
                  var longitud = nombre.length;
                  var apellido = usuario.substr(longitud + 1);

                  _this10.bdFire.collection('usuarios').doc(datos.user.uid).set({
                    'nombre': nombre,
                    'apellido': apellido,
                    'correo': datos.user.email,
                    'foto': '',
                    'id': datos.user.uid
                  });
                }
              });

              _this10.navegar.navigate(['/panel']);

              resolve(datos);
            })["catch"](function (err) {
              sweetalert__WEBPACK_IMPORTED_MODULE_2___default()('Error al Iniciar Sesión', err.code, 'error');
              console.log(err.message);
              rejected(err);
            });
          });
        }
      }, {
        key: "datosUsuario",
        value: function datosUsuario() {
          return this.bdAuth.authState;
        }
      }, {
        key: "usuarioLogueado",
        value: function usuarioLogueado(id) {
          return this.bdFire.collection('usuarios').doc(id).valueChanges();
        }
      }, {
        key: "actualizarPerfil",
        value: function actualizarPerfil(img, usuario, opcion) {
          var _this11 = this;

          if (opcion == true) {
            this.identificador = this.aleatroio(16);
            var archivo = img.target.files[0];
            var ubicacionArchivo = "fotosPerfil/".concat(this.identificador);
            var ruta = this.alamacenar.ref(ubicacionArchivo);
            var subida = this.alamacenar.upload(ubicacionArchivo, archivo);
            return new Promise(function (resolve, rejected) {
              subida.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                ruta.getDownloadURL().subscribe(function (url) {
                  _this11.imagenUrl = url;

                  _this11.bdFire.collection('usuarios').doc(usuario.id).update({
                    nombre: usuario.nombre,
                    apellido: usuario.apellido,
                    foto: url
                  }).then(function (res) {
                    return resolve(res);
                  })["catch"](function (err) {
                    return rejected(err);
                  });
                });
              })).subscribe();
            });
          } else {
            return new Promise(function (resolve, rejected) {
              _this11.bdFire.collection('usuarios').doc(usuario.id).update({
                nombre: usuario.nombre,
                apellido: usuario.apellido
              }).then(function (ok) {
                resolve(ok);
              })["catch"](function (err) {
                rejected(err);
              });
            });
          }
        }
      }, {
        key: "aleatroio",
        value: function aleatroio(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;

          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
        }
      }, {
        key: "cerrarSesion",
        value: function cerrarSesion() {
          var _this12 = this;

          this.bdAuth.signOut().then(function (ok) {
            _this12.navegar.navigate(['/login']);
          })["catch"](function (err) {
            console.log(err);
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/servicios/task.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/servicios/task.service.ts ***!
    \*******************************************/

  /*! exports provided: TaskService */

  /***/
  function srcAppServiciosTaskServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskService", function () {
      return TaskService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TaskService = /*#__PURE__*/function () {
      function TaskService(http) {
        _classCallCheck(this, TaskService);

        this.http = http;
        this.api = 'https://jsonplaceholder.typicode.com';
      }

      _createClass(TaskService, [{
        key: "getAllTask",
        value: function getAllTask() {
          var path = "".concat(this.api, "/todos/");
          return this.http.get(path); //se recibe un array de objetos 
        }
      }, {
        key: "getTask",
        value: function getTask(id) {
          var path = "".concat(this.api, "/todos/").concat(id);
          return this.http.get(path); // se recibe un solo objeto
        }
      }, {
        key: "createTask",
        value: function createTask(task) {
          var path = "".concat(this.api, "/todos");
          return this.http.post(path, task);
        }
      }, {
        key: "updateTask",
        value: function updateTask(task) {
          var path = "".concat(this.api, "/todos/").concat(task.id);
          return this.http.put(path, task);
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(id) {
          var path = "".concat(this.api, "/todos/").concat(id);
          return this.http["delete"](path);
        }
      }]);

      return TaskService;
    }();

    TaskService.ɵfac = function TaskService_Factory(t) {
      return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TaskService,
      factory: TaskService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment, firebaseConfig */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
      return firebaseConfig;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    var firebaseConfig = {
      apiKey: "AIzaSyDzIPMZ_X_RVuWnOuL7xBERDOwgLil-qHw",
      authDomain: "reactivo-770f0.firebaseapp.com",
      databaseURL: "https://reactivo-770f0.firebaseio.com",
      projectId: "reactivo-770f0",
      storageBucket: "reactivo-770f0.appspot.com",
      messagingSenderId: "168557363649",
      appId: "1:168557363649:web:842848ac876851560a2f40"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Angular\nuevoCurso1906\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map