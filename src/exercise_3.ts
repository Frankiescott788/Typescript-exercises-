// exercise 3 : functions

function sumNumbers(x : number, y : number) : number {
    return x + y
}

let sum : number = sumNumbers(10, 67);
console.log(sum);

function fixedNumber(x : number) : number {
    return x
}
console.log(fixedNumber(34));


function func(str : string, bln : boolean) : string {
    return bln ? str.toUpperCase() : str.toLowerCase();
}

let results = func('frankie', true);

console.log(results);