"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contact_1 = require("./contact");
require("rxjs/add/operator/map");
var angularfire2_1 = require("angularfire2");
var ContactFormComponent = (function () {
    function ContactFormComponent(af) {
        this.model = new contact_1.Contact(18, '', '', '');
        this.submitted = false;
        this.items = af.database.list('/contacts');
    }
    ContactFormComponent.prototype.addItem = function (name, email, message) {
        this.items.push({ name: name, email: email, message: message });
    };
    ContactFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.addItem(this.model.name, this.model.email, this.model.message);
        console.log(this.model);
    };
    return ContactFormComponent;
}());
ContactFormComponent = __decorate([
    core_1.Component({
        selector: 'contact-form',
        templateUrl: 'app/contact-form.component.html'
    }),
    __metadata("design:paramtypes", [angularfire2_1.AngularFire])
], ContactFormComponent);
exports.ContactFormComponent = ContactFormComponent;
//# sourceMappingURL=contact-form.component.js.map