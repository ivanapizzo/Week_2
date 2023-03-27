class Contacts {
    constructor(){

        this.arrayContacts = [];

    };

    printPersons(){

        console.log(this.arrayContacts);
    } 
        
}

let contacts = new Contacts();
contacts.arrayContacts.push(persona1, persona2, persona3)

contacts.printPersons();


module.exports = Contacts;