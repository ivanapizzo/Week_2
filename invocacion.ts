
import { isEven } from "./condicionalesDos";

import { add } from "./bucleFor";


let arr1 = ["Casa", "Coche", "Ciudad", "Cesta"];
let arr2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let arr3 = ["Venezuela", "Veneno", "Voltaje"];


//isEven si es par o impar

//add contar caracteres 


// Nota para mi: entonces lo que hice fue guardar la funcion add en una variable + array para que cuente caracteres
// y despues invocar isEven para que deduzca si es par o impar la suma

let sumarFuncion1 = add(arr1);
let sumarFuncion2 = add(arr2);
let sumarFuncion3 = add(arr3);

isEven(sumarFuncion1);
isEven(sumarFuncion2);
isEven(sumarFuncion3);

