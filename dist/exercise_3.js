"use strict";
// exercise 3 : functions
function sumNumbers(x, y) {
    return x + y;
}
let sum = sumNumbers(10, 67);
console.log(sum);
function fixedNumber(x) {
    return x;
}
console.log(fixedNumber(34));
function func(str, bln) {
    return bln ? str.toUpperCase() : str.toLowerCase();
}
let results = func('frankie', true);
console.log(results);
