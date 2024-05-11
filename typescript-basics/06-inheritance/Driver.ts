import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10,5);
console.log(myShape.getInfo());

let myCircle = new Circle(10,5,4);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(10,5,3,2);
console.log(myRectangle.getInfo());