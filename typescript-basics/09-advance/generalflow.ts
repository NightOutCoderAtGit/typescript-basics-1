function GroceriesList(){
    this.groceries = [];
}

GroceriesList.prototype.addItem = function(item){
    this.groceries = this.groceries.concat([item]);
};

var myList = new GroceriesList();
myList.addItem('Banana');
myList.addItem('Apple');
myList.addItem('Okra');

console.log(myList.groceries);

GroceriesList.prototype.removeItem = function(item){
    this.groceries = this.groceries.filter(function(grocery){
        return item != grocery;
    });
};
myList.removeItem('Apple');
console.log(myList.groceries);

/* ES6 Way */
class ShoppingList  {
    groceries:any;

    constructor(){
        this.groceries = [];
    }

    addItem(item) {
       this.groceries = [...this.groceries, item];
    }

    removeItem(item){
        this.groceries = this.groceries.filter(grocery => item !== grocery);
    }
}

var myLists = new ShoppingList();
myLists.addItem('Potato');
myLists.addItem('Tomato');
myLists.addItem('Okra');
console.log(myLists.groceries);

myLists.removeItem('Potato');
console.log(myLists.groceries);
