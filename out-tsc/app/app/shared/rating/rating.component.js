var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
var RatingComponent = (function () {
    function RatingComponent() {
        this.rated = new EventEmitter();
        this.rates = [1, 2, 3, 4, 5];
        this.rate = 0;
    }
    RatingComponent.prototype.ngOnInit = function () {
    };
    RatingComponent.prototype.setRate = function (r) {
        this.rate = r;
        this.previousRate = undefined;
        this.rated.emit(this.rate);
    };
    RatingComponent.prototype.setTemporaryRate = function (r) {
        if (this.previousRate === undefined) {
            this.previousRate = this.rate;
        }
        this.rate = r;
    };
    RatingComponent.prototype.clearTemporaryRate = function () {
        if (this.previousRate !== undefined) {
            this.rate = this.previousRate;
            this.previousRate = undefined;
        }
    };
    return RatingComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], RatingComponent.prototype, "rated", void 0);
RatingComponent = __decorate([
    Component({
        selector: 'mt-rating',
        templateUrl: './rating.component.html'
    }),
    __metadata("design:paramtypes", [])
], RatingComponent);
export { RatingComponent };
//# sourceMappingURL=rating.component.js.map