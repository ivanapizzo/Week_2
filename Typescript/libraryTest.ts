
import {Library} from "./library"
import { Book } from "./book";
import { book1 } from "./bookTest";


let book2 = new Book ("El hombre en busca de sentido", 168, "8425432022-978-8425432026", "Viktor Frankl", "Herder");
let book3 = new Book ("El arte de soplar brasas", 224, "9879867831 - 978-9879867839", "Leonardo Wolk", "Gran Aldea");

let arrayBooks = [book1, book2, book3];

let library1 = new Library (arrayBooks, "Av. Chile 22", "Yo");


library1.setAddress("Direccion 7777");
library1.setManager("Manager 666");
console.log(library1.getAddress());
console.log(library1.getManager());
console.log(library1.getNumbersOfBooks());
library1.toString();
console.log(library1.findByAuthor("Leonardo Wolk"));

//console.log(persona1.setAddress("Turin 22"));