

const Person = require("../person");

let persona1 = new Person("Gala", 25, "Pelayo 5") ;

console.log(persona1.printName());
console.log(persona1.yearOfBirth(25));
console.log(persona1.setAddress("Turin 22"));
console.log(persona1.getAdress());

