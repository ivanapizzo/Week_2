
// Reto 1 

class Person {
    constructor(nombre, apellido, altura, peso, colorOjos, nacionalidad, segundaNacionalidad, musicaFavorita, profesion, peliculaFavorita, signoZodiacal, yearOfBirth, hobbies){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
        this.peso = peso;
        this.colorOjos = colorOjos;
        this.nacionalidad = nacionalidad;
        this.segundaNacionalidad = segundaNacionalidad;
        this.musicaFavorita = musicaFavorita;
        this.peliculaFavorita = peliculaFavorita;
        this.profesion = profesion;
        this.signoZodiacal = signoZodiacal;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
    }

//reto 2 OK pero los parametros no se "leen" por el this, esta ok? 
    calcularImc (peso, altura){

        let imc;
    
        imc = this.peso / (this.altura / 100,2);
        imc = Math.round(imc * 100) / 100;

        return imc; //(this.peso / Math.pow(this.altura /100,2));
    
    }

// reto 3 OK PERO LOS MESES NO LOS CONSIDERO AUN porque igual solo me dicen considerando el año asi que ok
    edad (año){
        año = 2023 - this.yearOfBirth;
    
        return año;
    
    }

    // reto 4 OK
    printAll(){
        
        return `${this.nombre} -  ${this.apellido} - ${this.altura} - ${this.peso} - ${this.colorOjos} - ${this.nacionalidad} - ${this.segundaNacionalidad} - ${this.musicaFavorita} - ${this.peliculaFavorita} - ${this.profesion} - ${this.signoZodiacal} - ${this.yearOfBirth} - ${this.hobbies}`;
    }

    // reto 5 OK
    printHobbies(){
        
        return this.hobbies;

    }

};

let persona1 = new Person("Ivana", "Pizzo", 1.61, 54, "Marrón", "Argentina", "Italiana", "Rock", "Harry Potter", "Astróloga", "Cáncer", 1997, ["leer", "Estudiar", "Yoga"]);
console.log(persona1);

let persona2 = new Person("Luisina", "Vera", 1.74, 56, "Marrón", "Argentina", "No tiene", "Reggaeton", "Mama mía", "Actriz", "Virgo", 1999, ["Actuar", "Bailar", "Modelar"]);
console.log(persona2);

let persona3 = new Person("Andrés", "Bohórquez", 1.66, 75, "Verde", "Colombia", "Estados Unidos", "Rock", "500 Days of Summer", "Marketing", "Leo", 1994, ["Comer", "Viajar", "Probar cosas nuevas"]);
console.log(persona3);

// asi o dentro del new Person? 
// persona1.hobbies = ["leer", "Estudiar", "Yoga"];
// persona2.hobbies = ["Actuar", "Bailar", "Modelar"];


console.log(persona1.calcularImc());
console.log(persona1.edad());
console.log(persona1.printAll());
console.log(persona2.printHobbies());



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


