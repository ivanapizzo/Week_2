function evenNumbers(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}
evenNumbers(10);
function myRevert(myArr) {
    var myArray = [2, 5, 6, 7];
    for (var i = myArr.length - 1; i >= 0; i--) {
        myArray.push(myArr[i]);
        //console.log(myArr[i]);
    }
    return myArr;
}
myRevert([3, 3, 5, 7, 9]);
