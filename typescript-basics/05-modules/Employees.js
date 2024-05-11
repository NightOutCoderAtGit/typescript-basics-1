"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employees = void 0;
var Employees = /** @class */ (function () {
    function Employees(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
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
exports.Employees = Employees;
