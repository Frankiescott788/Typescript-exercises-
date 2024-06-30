interface icalculator {
    sum(x : number, y : number) : number,
    subtract(x : number, y : number) : number,
    multiplication(x : number, y : number) : number,
    divide(x : number, y : number) : number | string
};

class Calculator implements icalculator  {
    private validator(x : number, y : number) : void {
        if(typeof x !== 'number' || typeof y !== 'number') {
            console.log('Invalid input')
        }
    }
    sum(x : number, y : number) : number {
        this.validator(x, y);
        return x + y
    }
    subtract(x: number, y: number): number {
        this.validator(x, y);
        return x - y;
    }
    multiplication(x: number, y: number): number {
        this.validator(x, y);
        return x * y;
    }
    divide(x: number, y: number) {
        if(y === 0) {
            console.log('Cannot divide by zero');
        }
        return x / y;
    }
}

let new_calculator = new Calculator();

let methods : number[] = [
    new_calculator.sum(23, 78),
    new_calculator.subtract(90, 24),
    new_calculator.multiplication(34, 65),
    new_calculator.divide(12, 5)
];

methods.forEach(method => {
    console.log(method)
});




