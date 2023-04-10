var encontrarPar = false;
function hasEven(myNums) {
    var i = 0;
    // let arrPar = [];
    while (i < myNums.length) {
        if (myNums[i] % 2 == 0) {
            return true;
        }
        i++;
    }
    return false;
}
var arr02 = [4, 14, 7, 17, 24, 27];
var arr03 = [3, 5, 9];
console.log(hasEven(arr02));
console.log(hasEven(arr03));
function startWithM(myNames) {
    var i = 0;
    while (i < myNames.length) {
        if (myNames[i][0] == "M") {
            return true;
        }
        i++;
    }
    return false;
}
var arrNombres = ["Margarita", "Maria", "Martin", "Mora"];
var arrNombres02 = ["Andrés", "Julian", "Luisina", "Ivana"];
console.log(startWithM(arrNombres));
console.log(startWithM(arrNombres02));
