var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ContentChild } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';
var InputComponent = (function () {
    function InputComponent() {
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.ngAfterContentInit = function () {
        this.input = this.model || this.control;
        if (this.input === undefined) {
            throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName');
        }
    };
    InputComponent.prototype.hasSuccess = function () {
        return this.input.valid && (this.input.dirty || this.input.touched);
    };
    InputComponent.prototype.hasError = function () {
        return this.input.invalid && (this.input.dirty || this.input.touched);
    };
    return InputComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], InputComponent.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], InputComponent.prototype, "errorMessage", void 0);
__decorate([
    ContentChild(NgModel),
    __metadata("design:type", NgModel)
], InputComponent.prototype, "model", void 0);
__decorate([
    ContentChild(FormControlName),
    __metadata("design:type", FormControlName)
], InputComponent.prototype, "control", void 0);
InputComponent = __decorate([
    Component({
        selector: 'mt-input-container',
        templateUrl: './input.component.html'
    }),
    __metadata("design:paramtypes", [])
], InputComponent);
export { InputComponent };
//# sourceMappingURL=input.component.js.map