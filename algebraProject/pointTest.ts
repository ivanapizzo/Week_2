
import {Point} from "./point";
//import {calculateDistance} from "./point"




let myPoint = new Point(36.7213, 4.4213); //Málaga
let pointAndres = new Point(26.1420, 81.7948) // Naples

console.log(myPoint.getX());
console.log(myPoint.getY());

console.log(myPoint.setX());
console.log(myPoint.setY());

console.log(myPoint.toString(36.7213, 4.4213));


console.log(myPoint.distanceToIOrigin());
console.log(myPoint.calculateDistance(pointAndres));



// Naples/Coordinates
// 26.1420° N, 81.7948° W


// Málaga/Coordinates
// 36.7213° N, 4.4213° W

