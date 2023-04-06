"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
//import {calculateDistance} from "./point"
var myPoint = new point_1.Point(36.7213, 4.4213); //Málaga
var pointAlicante = new point_1.Point(38.3460, 0.4907); // Alicante
console.log(myPoint.getX());
console.log(myPoint.getY());
console.log(myPoint.setX());
console.log(myPoint.setY());
console.log(myPoint.toString(36.7213, 4.4213));
myPoint.distanceToIOrigin();
myPoint.calculateDistance(pointAlicante);
// let calcularFinal = calcularLatitudes + calcularLongitudes;
// calcularFinal.calculateDistance()
// Alicante/Coordinates
// 38.3460° N, 0.4907° W
// Málaga/Coordinates
// 36.7213° N, 4.4213° W
//calculateDistance(36.7213, 26.1420);
