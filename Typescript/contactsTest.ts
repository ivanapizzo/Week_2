
import { arrayBuffer } from "stream/consumers";
import {Contacts} from "./contacts";
import { Person } from "./person";
// import { persona1, persona2 } from "./personTest"


let persona3 = new Person("Sofia", 24, "Donado 22");
let persona4 = new Person("Yuri", 28, "Avenue 4 of July, USA");
let persona5 = new Person("Morena", 25, "Blanco Encalada 23, Buenos Aires");


let agendaCompleta = new Contacts();

let arrayAgenda = [persona3, persona4, persona5];

agendaCompleta.people = arrayAgenda;

agendaCompleta.printCalendar();
