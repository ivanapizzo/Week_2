
import { Person } from "./person";

// const Person = require("../person");

let persona1 = new Person("Gala", 25, "Pelayo 5");
let persona2 = new Person("Tobias", 39, "El  Palo");

console.log(persona1.printName());
console.log(persona1.yearOfBirth(2023));
console.log(persona1.setAddress("Turin 22"));
console.log(persona1.getAdress());
console.log(persona2.printName());

