"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function evenNumbers(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}
evenNumbers(10);
//saveMyWords = saveMyWords + myWords[i].length;
function myRevert(myArr) {
    var myArray1;
    myArray1 = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
        myArray1.push(myArr[i]);
    }
    console.log(myArray1);
}
myRevert([1, 2, 3, 4, 5]);
function isRainbow(colors) {
    for (var i = 0; i < colors.length; i++) {
        if (colors[i] == "rojo" || colors[i] == "naranja" || colors[i] == "amarillo" || colors[i] == "verde" || colors[i] == "azul" || colors[i] == "índigo" || colors[i] == "violeta") {
            console.log("The color is in the Rainbow :)");
        }
        else {
            console.log("This color is not here :(");
        }
        return colors;
    }
}
isRainbow(["azul"]);
isRainbow(["Celeste"]);
function add(myWords) {
    var saveMyWords = 0;
    for (var i = 0; i < myWords.length; i++) {
        saveMyWords = saveMyWords + myWords[i].length;
    }
    return saveMyWords;
}
exports.add = add;
console.log(add(["Estratósfera", "espacio", "planetas", "agujeros negros"]));
