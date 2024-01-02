var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function GroceriesList() {
    this.groceries = [];
}
GroceriesList.prototype.addItem = function (item) {
    this.groceries = this.groceries.concat([item]);
};
var myList = new GroceriesList();
myList.addItem('Banana');
myList.addItem('Apple');
myList.addItem('Okra');
console.log(myList.groceries);
GroceriesList.prototype.removeItem = function (item) {
    this.groceries = this.groceries.filter(function (grocery) {
        return item != grocery;
    });
};
myList.removeItem('Apple');
console.log(myList.groceries);
/* ES6 Way */
var ShoppingList = /** @class */ (function () {
    function ShoppingList() {
        this.groceries = [];
    }
    ShoppingList.prototype.addItem = function (item) {
        this.groceries = __spreadArray(__spreadArray([], this.groceries, true), [item], false);
    };
    ShoppingList.prototype.removeItem = function (item) {
        this.groceries = this.groceries.filter(function (grocery) { return item !== grocery; });
    };
    return ShoppingList;
}());
var myLists = new ShoppingList();
myLists.addItem('Potato');
myLists.addItem('Tomato');
myLists.addItem('Okra');
console.log(myLists.groceries);
myLists.removeItem('Potato');
console.log(myLists.groceries);
