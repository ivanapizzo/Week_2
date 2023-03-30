//borrador IMC y ejemplos que sirven



function calcularImc (m, n){

    let peso = 0;
    let altura = 0;
    let imc;

    imc = peso[m] / Math.pow(altura[n] / 100,2);
    imc = Math.round(imc * 100) / 100;  
    
    for (let i = 0; i < arrayPersonas.length; i++){
        if (imc < 16) {
            console.log("Anorexia");
        } else if (imc >= 16 && imc <= 16.99) {
            console.log("Delgadez peligrosa");
        } else if (imc >= 17 && imc <= 18.49) {
            console.log("Delgadez aceptable");
        } else if (imc >= 18.5 && imc <= 24.99) {
            console.log("Peso normal.");
        } else if (imc >= 25 && imc <= 29.99) {
            console.log("Preobeso.");
        } else if (imc >= 30 && imc <= 34.99) {
            console.log("Obeso tipo I");
        } else if (imc >= 35 && imc <= 39.99) {
            console.log("Obeso tipo II");
        } else if (imc > 40 ) {
            console.log("Obeso tipo III");
        }
    } 
    return imc;
};

calcularImc();


// ESTE RE FUNCIONA aunque no asi porque es un metodo dentro de una clase. si le ponemos function adelante seguro que si funciona independiente

// calcularImc (peso, altura){

//     let imc;

//     imc = this.peso / (this.altura / 100,2);
//     imc = Math.round(imc * 100) / 100;

//     return imc; //(this.peso / Math.pow(this.altura /100,2));

// }


// ejemplo metodo dentro de clase

class Color {
    constructor(r, g, b) {
    this.values = [r, g, b];
    }
    getRed() {
    return this.values[0];
    }
}

const red = new Color(255, 0, 0);
console.log(red.getRed()); // 255


// Reto 5 el this solo se pone para el constructor, las flecha no pueden ser usadas para crear metodos


// NO se puede tener un objeto con mismo nombre que la clase
