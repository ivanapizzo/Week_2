
function evenNumbers(num){

    for(let i = 0; i <= num; i++){

        if (i % 2 == 1){
            
            console.log(i)
        } 
    } 
}

evenNumbers(10);


function myRevert(myArr):number[]{


    for (let i =  myArr.length - 1; i >= 0; i--){
        myArr.push[i];
    } 

    return myArr;
}


let myArray= [2, 5, 6, 7];

myRevert([3, 3, 5, 7, 9]);