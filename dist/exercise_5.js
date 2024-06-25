"use strict";
// exercise 5 : calculator
class calculator {
    validate(x, y) {
        if (typeof x !== "number" || typeof y !== "number") {
            throw new Error("Inputs invalid");
        }
    }
    sum(x, y) {
        this.validate(x, y);
        return x + y;
    }
    subtract(x, y) {
        this.validate(x, y);
        return x - y;
    }
    multiplication(x, y) {
        this.validate(x, y);
        return x * y;
    }
    division(x, y) {
        this.validate(x, y);
        return x / y;
    }
}
let calc = new calculator();
let calc_array = [
    calc.sum(56, 99),
    calc.subtract(78, 90),
    calc.multiplication(20, 40),
    calc.division(33, 55),
];
calc_array.forEach(method => {
    console.log(method);
});
