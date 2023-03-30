
import { Book } from "./book";

let book1 = new Book ("Ontología del lenguaje ", 422 , "2344433-BC23333 ", "Rafael Echeverría ", "Newfield Consulting");

console.log(book1.toString());
console.log(book1.getTitle()); // no se puede acceder porque es privada :O asi que creamos el get title para acceder a ella :)
console.log(book1.getnPages());
console.log(book1.getIsbn());
console.log(book1.getAuthor());
console.log(book1.getEditorial());


export {book1};

//siempre volver a compilar desde TS a JS porque sino no se actualiza. Como Git. 