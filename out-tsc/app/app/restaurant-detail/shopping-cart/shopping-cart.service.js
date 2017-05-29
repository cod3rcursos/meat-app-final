import { CartItem } from './cart-item.model';
var ShoppingCartService = (function () {
    function ShoppingCartService() {
        this.items = [];
    }
    ShoppingCartService.prototype.clear = function () {
        this.items = [];
    };
    ShoppingCartService.prototype.addItem = function (item) {
        var foundItem = this.items.find(function (mItem) { return mItem.menuItem.id === item.id; });
        if (foundItem) {
            this.increaseQty(foundItem);
        }
        else {
            this.items.push(new CartItem(item));
        }
    };
    ShoppingCartService.prototype.increaseQty = function (item) {
        item.quantity = item.quantity + 1;
    };
    ShoppingCartService.prototype.decreaseQty = function (item) {
        item.quantity = item.quantity - 1;
        if (item.quantity === 0) {
            this.removeItem(item);
        }
    };
    ShoppingCartService.prototype.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    ShoppingCartService.prototype.total = function () {
        return this.items
            .map(function (item) { return item.value(); })
            .reduce(function (prev, value) { return prev + value; }, 0);
    };
    return ShoppingCartService;
}());
export { ShoppingCartService };
//# sourceMappingURL=shopping-cart.service.js.map