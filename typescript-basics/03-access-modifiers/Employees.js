var Employees = /** @class */ (function () {
    function Employees(theFirstName, theLastName) {
        this._firstName = theFirstName;
        this._lastName = theLastName;
    }
    Object.defineProperty(Employees.prototype, "fullName", {
        get: function () {
            return this._firstName + this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employees.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (newName) {
            this._firstName = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employees.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (newName) {
            this._lastName = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Employees;
}());
var myEmployee = new Employees('Red', 'John');
console.log("Employee full name is : ".concat(myEmployee.firstName, " ").concat(myEmployee.lastName));
