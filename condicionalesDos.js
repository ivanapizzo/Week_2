"use strict";
//reto 2
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
function zodiac(day, month) {
    if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        console.log("Aries");
    }
    else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        console.log("Tauro");
    }
    else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        console.log("Géminis");
    }
    else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        console.log("Cáncer");
    }
    else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        console.log("Leo");
    }
    else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        console.log("Virgo");
    }
    else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        console.log("Libra");
    }
    else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        console.log("Escorpio");
    }
    else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        console.log("Sagitario");
    }
    else if ((month == 12 && day >= 22) || (month == 1 && day <= 20)) {
        console.log("Capricornio");
    }
    else if ((month == 1 && day >= 21) || (month == 2 && day <= 19)) {
        console.log("Acuario");
    }
    else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
        console.log("Piscis");
    }
}
zodiac(22, 4);
zodiac(1, 8);
zodiac(17, 7);
zodiac(10, 11);
//reto 3 
function continent(country) {
    if ((country == "Canadá") || (country == "Argentina") || (country == "México") || (country == "USA") || (country == "Uruguay")) {
        console.log("América");
    }
    else if ((country == "España") || (country == "Italia") || (country == "Alemania") || (country == "Francia") || (country == "Bélgica")) {
        console.log("Europa");
    }
    else if ((country == "Rusia") || (country == "China") || (country == "Japón") || (country == "Indonesia") || (country == "Malasia")) {
        console.log("Asia");
    }
}
continent("Argentina");
continent("Francia");
continent("Japón");
//reto 4
function isEven(number) {
    if (number % 2 == 0) {
        console.log("El número es par");
    }
    else if (number % 2 !== 0) {
        console.log("El número es impar");
    }
}
exports.isEven = isEven;
isEven(17);
isEven(24);
isEven(127);
