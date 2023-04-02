
function evenNumbers(num){

    for(let i = 0; i <= num; i++){

        if (i % 2 == 1){
            
            console.log(i)
        } 
    } 
}

evenNumbers(10);


function myRevert(myArr:number[]){

    let myArray1 = [];

    for (let i =  myArr.length - 1; i >= 0; i--){
        
        myArray1.push[i];
    } 
        return myArr;
}

myRevert([1, 2, 3, 4, 5]);




function isRainbow(colors:string[]) {

    for(let i = 0; i < colors.length; i++){

        if (colors[i] == "rojo" || colors[i] == "naranja" || colors[i] == "amarillo" || colors[i] == "verde" || colors[i] == "azul" || colors[i] == "índigo" || colors[i] == "violeta"){
            console.log("The color is in the Rainbow :)");
        } else {
            console.log("This color is not here :(");
        }

        return colors;
    } 
}

isRainbow(["azul"]);
isRainbow(["Celeste"]);




function add(myWords:string):number{
    
    for (let i=0; i < myWords.length; i++){

        myWords[i].length +1;

    } return myWords.length;
}

console.log(add("Estratósfera"));

export {add};