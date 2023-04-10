
import {Point} from "./point";
//import {calculateDistance} from "./point"




let myPoint = new Point(36.7213, 4.4213); //Málaga
let pointAndres = new Point(26.1420, 81.7948) // Naples
let pointBaires = new Point(34.6037, 58.3816) // Baires

console.log(myPoint.getX());
console.log(myPoint.getY());

console.log(myPoint.setX(56.3456));
console.log(myPoint.setY(89.2477));

console.log(myPoint.toString());


console.log(myPoint.distanceToIOrigin());
console.log(myPoint.calculateDistance(pointAndres));

console.log(myPoint.calcularQuadrant());
console.log(pointAndres.calcularQuadrant());


let arrayPuntos = [myPoint, pointAndres, pointBaires];


console.log(myPoint.calculateNearest(arrayPuntos));



// Naples/Coordinates
// 26.1420° N, 81.7948° W


// Málaga/Coordinates
// 36.7213° N, 4.4213° W


// Buenos Aires/Coordinates
// 34.6037° S, 58.3816° W
