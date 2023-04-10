
import { Point } from "./point";
import { Triangl } from "./triangl";



let lado1 = new Point(2, 2);
let lado2 = new Point (4, 5);
let lado3 = new Point (8, 10);

let triangulo = new Triangl(lado1, lado2, lado3);


console.log(triangulo.calculateLenghtSides());

