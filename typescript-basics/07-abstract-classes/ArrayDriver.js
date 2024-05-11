"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(10, 5, 4);
let myRectangle = new Rectangle_1.Rectangle(10, 5, 3, 2);
let theShapes = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let data of theShapes) {
    console.log(data.getInfo());
    console.log(data.calculateArea());
    console.log();
}
