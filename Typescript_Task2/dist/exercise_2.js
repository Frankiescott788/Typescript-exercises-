"use strict";
;
class Calculator {
    validator(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            console.log('Invalid input');
        }
    }
    sum(x, y) {
        this.validator(x, y);
        return x + y;
    }
    subtract(x, y) {
        this.validator(x, y);
        return x - y;
    }
    multiplication(x, y) {
        this.validator(x, y);
        return x * y;
    }
    divide(x, y) {
        if (y === 0) {
            console.log('Cannot divide by zero');
        }
        return x / y;
    }
}
let new_calculator = new Calculator();
let methods = [
    new_calculator.sum(23, 78),
    new_calculator.subtract(90, 24),
    new_calculator.multiplication(34, 65),
    new_calculator.divide(12, 5)
];
methods.forEach(method => {
    console.log(method);
});
