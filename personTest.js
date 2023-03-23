

const Person = require("../Clase7/person");



let persona3 = new Person("Andrés", "Bohórquez", 1.66, 75, "Verde", "Colombia", "Estados Unidos", "Rock", "500 Days of Summer", "Marketing", "Leo", 1994, ["Comer", "Viajar", "Probar cosas nuevas"]);
console.log(persona3);

console.log(persona3.calcularImc());
console.log(persona3.edad());
console.log(persona3.printAll());
console.log(persona3.printHobbies()); 