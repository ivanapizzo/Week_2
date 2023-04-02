
let encontrarPar = false;

function hasEven (myNums:number[]) {

    let i = 0;
    while(i < myNums.length && !encontrarPar) {

        if (encontrarPar = (myNums[i] % 2 == 0)){

            return true;
        }

        i++;
    }  
} 

let arr02 = [4, 14, 7, 17, 24, 27];

hasEven(arr02);
console.log(hasEven(arr02));



let encontrarM = false;

function startWithM(myNames:string[]){

    let i = 0;

    while (i < myNames.length && !encontrarM){


        if (encontrarM = (myNames[i][0] == "M")){

            return true;

        }
        
        i++;

    } 
}

let arrNombres = ["Margarita", "Milagros", "Maria", "Martin", "Mora"];

console.log(startWithM(arrNombres));
