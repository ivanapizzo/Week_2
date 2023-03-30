
import {Person} from "./person";

class Contacts {

    people: Person[];

    constructor() {

        this.people = [];
    }


    printCalendar() {

        console.log(this.people);
    }
}


export {Contacts};
