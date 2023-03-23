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

    calcularImc (peso, altura){

        let imc;
    
        imc = this.peso / (this.altura / 100,2);
        imc = Math.round(imc * 100) / 100;

        return imc; 
    
    }


    edad (año){
        año = 2023 - this.yearOfBirth;
    
        return año;
    
    }

    printAll(){
        
        return `${this.nombre} -  ${this.apellido} - ${this.altura} - ${this.peso} - ${this.colorOjos} - ${this.nacionalidad} - ${this.segundaNacionalidad} - ${this.musicaFavorita} - ${this.peliculaFavorita} - ${this.profesion} - ${this.signoZodiacal} - ${this.yearOfBirth} - ${this.hobbies}`;
    }


    printHobbies(){
        
        return this.hobbies;

    }

};


module.exports = Person; 




