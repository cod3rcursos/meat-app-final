var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MEAT_API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';
var RestaurantsService = (function () {
    function RestaurantsService(http) {
        this.http = http;
    }
    RestaurantsService.prototype.restaurants = function () {
        return this.http.get(MEAT_API + "/restaurants")
            .map(function (response) { return response.json(); })
            .catch(ErrorHandler.handleError);
    };
    RestaurantsService.prototype.restaurantById = function (id) {
        return this.http.get(MEAT_API + "/restaurants/" + id)
            .map(function (response) { return response.json(); })
            .catch(ErrorHandler.handleError);
    };
    RestaurantsService.prototype.reviewsOfRestaurant = function (id) {
        return this.http.get(MEAT_API + "/restaurants/" + id + "/reviews")
            .map(function (response) { return response.json(); })
            .catch(ErrorHandler.handleError);
    };
    RestaurantsService.prototype.menuOfRestaurant = function (id) {
        return this.http.get(MEAT_API + "/restaurants/" + id + "/menu")
            .map(function (response) { return response.json(); })
            .catch(ErrorHandler.handleError);
    };
    return RestaurantsService;
}());
RestaurantsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], RestaurantsService);
export { RestaurantsService };
//# sourceMappingURL=restaurants.service.js.map