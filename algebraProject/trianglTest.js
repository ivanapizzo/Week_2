"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var triangl_1 = require("./triangl");
var lado1 = new point_1.Point(2, 2);
var lado2 = new point_1.Point(4, 5);
var lado3 = new point_1.Point(8, 10);
var triangulo = new triangl_1.Triangl(lado1, lado2, lado3);
console.log(triangulo.calculateLenghtSides());
