var encontrarPar = false;
function hasEven(myNums1) {
    var i = 0;
    while (i < myNums1.length && !encontrarPar) {
        if (encontrarPar = (myNums1[i] % 2 == 0)) {
            return true;
        }
        i++;
    }
}
var arr02 = [4, 14, 7, 17, 24, 27];
hasEven(arr02);
console.log(hasEven(arr02));
var encontrarM = false;
function startWithM(myNames) {
    var i = 0;
    while (i < myNames.length && !encontrarM) {
        if (encontrarM = (myNames[i][0] == "M")) {
            return true;
        }
        i++;
    }
}
var arrNombres = ["Margarita", "Milagros", "Maria", "Martin", "Mora"];
console.log(startWithM(arrNombres));
