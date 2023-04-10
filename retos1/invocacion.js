"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var condicionalesDos_1 = require("./condicionalesDos");
var bucleFor_1 = require("./bucleFor");
var arr1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var arr2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
var arr3 = ["Venezuela", "Veneno", "Voltaje"];
//isEven si es par o impar
//add contar caracteres 
//entonces lo que hice fue guardar la funcion add en una variable + array para que cuente caracteres
// y despues invocar isEven para que deduzca si es par o impar la suma
var sumarFuncion1 = (0, bucleFor_1.add)(arr1);
var sumarFuncion2 = (0, bucleFor_1.add)(arr2);
var sumarFuncion3 = (0, bucleFor_1.add)(arr3);
(0, condicionalesDos_1.isEven)(sumarFuncion1);
(0, condicionalesDos_1.isEven)(sumarFuncion2);
(0, condicionalesDos_1.isEven)(sumarFuncion3);
//falta retos invocación 
