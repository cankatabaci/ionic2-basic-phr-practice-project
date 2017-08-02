webpackJsonp([0],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bloodsugar_bloodsugar__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bloodpress_bloodpress__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__weight_weight__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notes_notes__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_web_animations_js_web_animations_min__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_web_animations_js_web_animations_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_web_animations_js_web_animations_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bloodsugar_bloodsugardetails_bloodsugardetails__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.testRadioOpen = false;
        //this.navCtrl.setRoot(HomePage);
    }
    HomePage.prototype.add = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Choose for Record');
        alert.addInput({
            type: 'radio',
            label: 'BloodSugar',
            value: 'bloodsugar',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'BloodPressure',
            value: 'bloodpress'
        });
        alert.addInput({
            type: 'radio',
            label: 'Height',
            value: 'height'
        });
        alert.addInput({
            type: 'radio',
            label: 'Weight',
            value: 'weight'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
                switch (data) {
                    case 'bloodsugar': {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__bloodsugar_bloodsugardetails_bloodsugardetails__["a" /* BloodSugarDetailsPage */]);
                        break;
                    }
                    case 'bloodpress': {
                        //statements; 
                        break;
                    }
                    default: {
                        //statements; 
                        break;
                    }
                }
            }
        });
        alert.present();
    };
    HomePage.prototype.Item1 = function () {
        console.log("click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bloodsugar_bloodsugar__["a" /* BloodSugarPage */]);
    };
    HomePage.prototype.Item2 = function () {
        console.log("click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bloodpress_bloodpress__["a" /* BloodPressPage */]);
    };
    HomePage.prototype.Item3 = function () {
        console.log("click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__weight_weight__["a" /* WeightPage */]);
    };
    HomePage.prototype.Item4 = function () {
        console.log("click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bloodsugar_bloodsugar__["a" /* BloodSugarPage */]);
    };
    HomePage.prototype.Item5 = function () {
        console.log("click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__notes_notes__["a" /* NotesPages */]);
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], HomePage.prototype, "content", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-title>\n      Home\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="add()"><ion-icon name="add"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<!-- <ion-content>\n  <ion-tabs tabs-only>\n    <ion-tab tabTitle="BloodSugar" [root]="tab1Root"></ion-tab>\n    <ion-tab tabTitle="BloodPress" [root]="tab2Root" ></ion-tab>\n    <ion-tab tabTitle="Weight" [root]="tab3Root"></ion-tab>\n  </ion-tabs>\n</ion-content> -->\n<ion-content class="grid-basic-page">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div text-center no-padding (click)="Item1()" class="item1">\n          <a>\n            <h3>Blood Sugar </h3>\n          </a>\n          <!-- <button ion-button icon-only (click)="Item1()">\n        <ion-icon name=\'contact\'></ion-icon>\n      </button>   -->\n        </div>\n      </ion-col>\n      <ion-col>\n        <div no-padding no-margin (click)="Item2()" class="item2">\n          <a>\n            <h3>Blood Pressure </h3>\n          </a>\n          <!-- <ion-icon name="logo-apple"></ion-icon>  -->\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div (click)="Item3()">\n          <a>\n            <h3>Weight </h3>\n          </a>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div (click)="Item4()">\n          <a>\n            <h3>Height</h3>\n          </a>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div (click)="Item5()">\n          <a>\n            <h3>Notes</h3>\n          </a>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div (click)="Item6()" class="item6">Something</div>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloodSugarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BloodSugarPage = (function () {
    function BloodSugarPage(platform, navCtrl, alertCtrl, navParams, toastCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.notes = [];
        this.item = { age: "", city: "", email: "", name: "" };
        this.name = "";
        this.age = "";
        this.email = "";
        this.city = "";
        this.navCtrl.canGoBack();
        this.items = [{ age: "asd", city: "adasd", email: "asd", name: "adasd" }, { age: "qwwe", city: "qwe", email: "qweqe", name: "qweqwe" }];
        this.age = navParams.get("age");
        this.city = navParams.get("city");
        this.email = navParams.get("email");
        this.name = navParams.get("name");
        if (this.age == undefined) {
        }
        else {
            console.log(this.age, this.email, this.name, this.city);
            this.item.age = this.age;
            this.item.city = this.city;
            this.item.email = this.email;
            this.item.name = this.name;
            this.pushItems(this.item);
        }
    }
    BloodSugarPage.prototype.presentToast = function (msj) {
        var toast = this.toastCtrl.create({
            message: msj,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    BloodSugarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            ///here you can do wathever you want to replace the backbutton event
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        };
    };
    BloodSugarPage.prototype.pushItems = function (data) {
        this.items.push(data);
        this.presentToast("Kayıt Eklendi!");
    };
    BloodSugarPage.prototype.deleteSugar = function (item) {
        var index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
        this.presentToast("Kayıt Silindi!");
    };
    return BloodSugarPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('navbar'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */])
], BloodSugarPage.prototype, "navBar", void 0);
BloodSugarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-bloodsugar',template:/*ion-inline-start:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\bloodsugar\bloodsugar.html"*/'<ion-header>\n\n\n\n    <ion-navbar  #navbar>\n\n        <ion-title>Blood Sugar </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button (click)="toggleEdit()">{{editButton}}</button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n    <table border=1 frame=void rules=rows class="table table-striped table-bordered table-list" [mfData]="items" #mf="mfDataTable"\n\n        [mfRowsOnPage]="5">\n\n        <thead>\n\n            <tr>\n\n                <th style="width: 20%">\n\n                    <mfDefaultSorter by="name">Name</mfDefaultSorter>\n\n                </th>\n\n                <th style="width: 50%">\n\n                    <mfDefaultSorter by="email">Email</mfDefaultSorter>\n\n                </th>\n\n                <th style="width: 10%">\n\n                    <mfDefaultSorter by="age">Age</mfDefaultSorter>\n\n                </th>\n\n                <th style="width: 20%">\n\n                    <mfDefaultSorter by="city">City</mfDefaultSorter>\n\n                </th>\n\n            </tr>\n\n        </thead>\n\n        <tbody text-center>\n\n            <tr *ngFor="let item of mf.data">\n\n                <td>{{item.name}}</td>\n\n                <td>{{item.email}}</td>\n\n                <td class="text-right">{{item.age}}</td>\n\n                <td>{{item.city | uppercase}}</td>\n\n                <td> <button ion-button icon-only (click)="deleteSugar(item)" danger>\n\n                    <ion-icon name="trash"></ion-icon>\n\n                </button> </td>\n\n\n\n            </tr>\n\n        </tbody>\n\n        <tfoot>\n\n            <tr>\n\n                <td colspan="4">\n\n                    <mfBootstrapPaginator [rowsOnPageSet]="[5,10,25]"></mfBootstrapPaginator>\n\n                </td>\n\n            </tr>\n\n        </tfoot>\n\n    </table>\n\n</ion-content>\n\n<!-- <ion-content>\n\n\n\n    <ion-list>\n\n\n\n        <ion-item-sliding *ngFor="let item of items">\n\n\n\n            <ion-item>\n\n               <h2>{{ item.name }}</h2>\n\n               <p>{{ item.city }} • {{ item.email}} • {{ item.age}}</p>\n\n            </ion-item>\n\n\n\n            <ion-item-options>\n\n                <button ion-button icon-only (click)="editNote(note)" light>\n\n                    <ion-icon name="repeat"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-only (click)="deleteNote(note)" danger>\n\n                    <ion-icon name="trash"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-only (click)="listNote(note)" danger>\n\n                    <ion-icon name="list"></ion-icon>\n\n                </button>\n\n            </ion-item-options>\n\n\n\n        </ion-item-sliding>\n\n\n\n    </ion-list>\n\n\n\n</ion-content> -->'/*ion-inline-end:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\bloodsugar\bloodsugar.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], BloodSugarPage);

//# sourceMappingURL=bloodsugar.js.map

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web_animations_js_web_animations_min__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web_animations_js_web_animations_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_web_animations_js_web_animations_min__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.login = { username: '', password: '' };
        this.submitted = false;
    }
    LoginPage.prototype.Login = function () {
        console.log(this.login.password, this.login.username);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\login\login.html"*/'<ion-content class="background">\n\n    <ion-slides pager>\n\n        <ion-slide>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    Slide1\n\n                </ion-card-header>\n\n            </ion-card>\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    Slide2\n\n                </ion-card-header>\n\n            </ion-card>\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    Login\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <form #loginForm="ngForm" novalidate>\n\n                        <ion-list no-line>\n\n                            <ion-item>\n\n                                <ion-label stacked color="primary">Username</ion-label>\n\n                                <ion-input [(ngModel)]="login.username" name="username" type="text" #username="ngModel" spellcheck="false" autocapitalize="off"\n\n                                    required>\n\n                                </ion-input>\n\n                            </ion-item>\n\n                            <ion-item>\n\n                                <ion-label stacked color="primary">Password</ion-label>\n\n                                <ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n\n                                </ion-input>\n\n                            </ion-item>\n\n                            <a>Forget your login detail? <b>Get help signing in</b></a>\n\n                            <br>\n\n                            <button (click)="Login()" ion-button block outline color="light">Login</button>\n\n                            <p>OR</p>\n\n                            <button ion-button block color="facebook">\n\n                    <ion-icon name="logo-facebook"></ion-icon>Login with Facebook\n\n                </button>\n\n                        </ion-list>\n\n                    </form>\n\n                </ion-card-content>\n\n                <button class="bottom" ion-button clear full color="light">Don\'t have an account? Sign up </button>\n\n            </ion-card>\n\n            \n\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>'/*ion-inline-end:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloodPressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BloodPressPage = (function () {
    function BloodPressPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return BloodPressPage;
}());
BloodPressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-bloodPress',template:/*ion-inline-start:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\bloodpress\bloodpress.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>hi </ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n</ion-content>'/*ion-inline-end:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\bloodpress\bloodpress.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], BloodPressPage);

//# sourceMappingURL=bloodpress.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeightPage = (function () {
    function WeightPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return WeightPage;
}());
WeightPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-weight',template:/*ion-inline-start:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\weight\weight.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>hi </ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n</ion-content>'/*ion-inline-end:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\weight\weight.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], WeightPage);

//# sourceMappingURL=weight.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotesPages = (function () {
    function NotesPages(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.notes = [];
        this.navCtrl.canGoBack();
    }
    NotesPages.prototype.addNote = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Add Note',
            inputs: [{
                    name: 'title'
                }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        _this.notes.push(data);
                    }
                }
            ]
        });
        prompt.present();
    };
    NotesPages.prototype.editNote = function (note) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Edit Note',
            inputs: [{
                    name: 'title'
                }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var index = _this.notes.indexOf(note);
                        if (index > -1) {
                            _this.notes[index] = data;
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    NotesPages.prototype.deleteNote = function (note) {
        var index = this.notes.indexOf(note);
        if (index > -1) {
            this.notes.splice(index, 1);
        }
    };
    return NotesPages;
}());
NotesPages = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-notes',template:/*ion-inline-start:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\notes\notes.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Notes</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="addNote()"><ion-icon name="add"></ion-icon></button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-list>\n\n\n\n        <ion-item-sliding *ngFor="let note of notes">\n\n\n\n            <ion-item>\n\n                {{note.title}}\n\n            </ion-item>\n\n\n\n            <ion-item-options>\n\n                <button ion-button icon-only (click)="editNote(note)" light>\n\n                    <ion-icon name="repeat"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-only (click)="deleteNote(note)" danger>\n\n                    <ion-icon name="trash"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-only (click)="listNote(note)" danger>\n\n                    <ion-icon name="list"></ion-icon>\n\n                </button>\n\n            </ion-item-options>\n\n\n\n        </ion-item-sliding>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\notes\notes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], NotesPages);

//# sourceMappingURL=notes.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloodSugarDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bloodsugar__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BloodSugarDetailsPage = (function () {
    function BloodSugarDetailsPage(navCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.items = { age: "", city: "", email: "", name: "" };
        this.navCtrl.canGoBack();
    }
    BloodSugarDetailsPage.prototype.AddRecord = function () {
        this.navParams.data = {
            age: this.items.age,
            city: this.items.city,
            email: this.items.email,
            name: this.items.name,
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bloodsugar__["a" /* BloodSugarPage */], this.navParams.data);
    };
    return BloodSugarDetailsPage;
}());
BloodSugarDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-bloodsugardetails',template:/*ion-inline-start:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\bloodsugar\bloodsugardetails\bloodsugardetails.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Blood Sugar </ion-title>\n\n                <ion-buttons end>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n  <ion-content>\n\n<ion-list class="login-giris-input" >\n\n\n\n  <ion-item>\n\n    <ion-label><a>Name</a></ion-label>\n\n    <ion-input [value]="name" [(ngModel)]="items.name" #Name="ngModel" type="text"></ion-input>\n\n  </ion-item>\n\n <ion-item>\n\n    <ion-label><a>Email</a></ion-label>\n\n    <ion-input type="text" [value]="email" [(ngModel)]="items.email" #Email="ngModel"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label><a>Age</a></ion-label>\n\n    <ion-input type="text"  [value]="age" [(ngModel)]="items.age" #Age="ngModel"></ion-input>\n\n  </ion-item>\n\n<ion-item>\n\n    <ion-label><a>City</a>  </ion-label>\n\n    <ion-input type="text"   [value]="city" [(ngModel)]="items.city" #City="ngModel"></ion-input>\n\n  </ion-item>\n\n</ion-list>\n\n <div padding   class="butonlar">\n\n<button class="register-button" ion-button (click)=\'AddRecord()\' color="#FDB813" block >Add</button>\n\n \n\n</div>\n\n</ion-content>'/*ion-inline-end:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\bloodsugar\bloodsugardetails\bloodsugardetails.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], BloodSugarDetailsPage);

//# sourceMappingURL=bloodsugardetails.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(266);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_bloodsugar_bloodsugar__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_bloodpress_bloodpress__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_weight_weight__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notes_notes__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_datatable__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_bloodsugar_bloodsugardetails_bloodsugardetails__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_bloodpress_bloodpressdetails_bloodpressdetails__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_height_heightdetails_heightdetails__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_weight_weightdetails_weightdetails__ = __webpack_require__(581);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_bloodsugar_bloodsugar__["a" /* BloodSugarPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_weight_weight__["a" /* WeightPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_bloodpress_bloodpress__["a" /* BloodPressPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_notes_notes__["a" /* NotesPages */],
            __WEBPACK_IMPORTED_MODULE_13__pages_bloodsugar_bloodsugardetails_bloodsugardetails__["a" /* BloodSugarDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_bloodpress_bloodpressdetails_bloodpressdetails__["a" /* BloodPressDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_height_heightdetails_heightdetails__["a" /* HeightDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_weight_weightdetails_weightdetails__["a" /* WeightDetailsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_12_angular2_datatable__["DataTableModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_bloodsugar_bloodsugar__["a" /* BloodSugarPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_weight_weight__["a" /* WeightPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_bloodpress_bloodpress__["a" /* BloodPressPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_notes_notes__["a" /* NotesPages */],
            __WEBPACK_IMPORTED_MODULE_13__pages_bloodsugar_bloodsugardetails_bloodsugardetails__["a" /* BloodSugarDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_bloodpress_bloodpressdetails_bloodpressdetails__["a" /* BloodPressDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_height_heightdetails_heightdetails__["a" /* HeightDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_weight_weightdetails_weightdetails__["a" /* WeightDetailsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\GitHub\ionic2-basic-phr-practice-project\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\GitHub\ionic2-basic-phr-practice-project\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloodPressDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BloodPressDetailsPage = (function () {
    function BloodPressDetailsPage(navCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.navCtrl.canGoBack();
    }
    return BloodPressDetailsPage;
}());
BloodPressDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-bloodpressdetails',template:/*ion-inline-start:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\bloodpress\bloodpressdetails\bloodpressdetails.html"*/''/*ion-inline-end:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\bloodpress\bloodpressdetails\bloodpressdetails.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], BloodPressDetailsPage);

//# sourceMappingURL=bloodpressdetails.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeightDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeightDetailsPage = (function () {
    function HeightDetailsPage(navCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.navCtrl.canGoBack();
    }
    return HeightDetailsPage;
}());
HeightDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-heightdetails',template:/*ion-inline-start:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\height\heightdetails\heightdetails.html"*/''/*ion-inline-end:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\height\heightdetails\heightdetails.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], HeightDetailsPage);

//# sourceMappingURL=heightdetails.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeightDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeightDetailsPage = (function () {
    function WeightDetailsPage(navCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.navCtrl.canGoBack();
    }
    return WeightDetailsPage;
}());
WeightDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-weightdetails',template:/*ion-inline-start:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\weight\weightdetails\weightdetails.html"*/''/*ion-inline-end:"D:\GitHub\ionic2-basic-phr-practice-project\src\pages\weight\weightdetails\weightdetails.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], WeightDetailsPage);

//# sourceMappingURL=weightdetails.js.map

/***/ })

},[261]);
//# sourceMappingURL=main.js.map