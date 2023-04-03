
let encontrarPar = false;

function hasEven (myNums:number[]) {

    let i = 0;
    // let arrPar = [];
    
    while(i < myNums.length) {

        if (myNums[i] % 2 == 0){

            return true;
        }

        i++;
    }  return false;
} 

let arr02 = [4, 14, 7, 17, 24, 27];
let arr03 = [3, 5, 9];


console.log(hasEven(arr02));
console.log(hasEven(arr03));




function startWithM(myNames:string[]){

    let i = 0;

    while (i < myNames.length){


        if (myNames[i][0] == "M"){

            return true;
        }  
        
        i ++;
    }  return false;
}

let arrNombres = ["Margarita", "Maria", "Martin", "Mora"];
let arrNombres02 = ["Andrés", "Julian", "Luisina", "Ivana"];

console.log(startWithM(arrNombres));
console.log(startWithM(arrNombres02));
