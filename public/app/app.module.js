"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angularfire2_1 = require("angularfire2");
var app_component_1 = require("./app.component");
var contact_form_component_1 = require("./contact-form.component");
exports.firebaseConfig = {
    apiKey: "AIzaSyDGoqUEVQOZSAd8WBmfySF2fkAeRJ_R2Ds",
    authDomain: "strings-direct.firebaseapp.com",
    databaseURL: "https://strings-direct.firebaseio.com",
    storageBucket: "strings-direct.appspot.com",
    messagingSenderId: "760983332161"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig),
            http_1.JsonpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            contact_form_component_1.ContactFormComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map