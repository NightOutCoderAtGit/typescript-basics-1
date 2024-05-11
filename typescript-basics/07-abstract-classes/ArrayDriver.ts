import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myCircle = new Circle(10,5,4);
let myRectangle = new Rectangle(10,5,3,2);


let theShapes: Shape[] = [];


theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let data of theShapes){
    console.log(data.getInfo());
    console.log(data.calculateArea());
    console.log();
}

