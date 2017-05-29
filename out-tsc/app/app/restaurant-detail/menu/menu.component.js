var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../restaurants/restaurants.service';
var MenuComponent = (function () {
    function MenuComponent(restaurantsService, route) {
        this.restaurantsService = restaurantsService;
        this.route = route;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.menu = this.restaurantsService
            .menuOfRestaurant(this.route.parent.snapshot.params['id']);
    };
    MenuComponent.prototype.addMenuItem = function (item) {
        console.log(item);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Component({
        selector: 'mt-menu',
        templateUrl: './menu.component.html'
    }),
    __metadata("design:paramtypes", [RestaurantsService,
        ActivatedRoute])
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map