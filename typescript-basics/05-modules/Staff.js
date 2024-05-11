"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employees_1 = require("./Employees");
var myEmployees = new Employees_1.Employees('Sony', 'John');
console.log("Employee full name is : ".concat(myEmployees.firstName, " ").concat(myEmployees.lastName));
myEmployees.lastName = 'Tony';
console.log("Employee full name is : ".concat(myEmployees.firstName, " ").concat(myEmployees.lastName));
