var Order = (function () {
    function Order(address, number, optionalAddress, paymentOption, orderItems) {
        if (orderItems === void 0) { orderItems = []; }
        this.address = address;
        this.number = number;
        this.optionalAddress = optionalAddress;
        this.paymentOption = paymentOption;
        this.orderItems = orderItems;
    }
    return Order;
}());
var OrderItem = (function () {
    function OrderItem(quantity, menuId) {
        this.quantity = quantity;
        this.menuId = menuId;
    }
    return OrderItem;
}());
export { Order, OrderItem };
//# sourceMappingURL=order.model.js.map