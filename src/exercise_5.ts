// exercise 5 : calculator

class calculator {
   private validate(x: number, y: number) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Inputs invalid");
    }
  }
  sum(x: number, y: number): number {
    this.validate(x, y);
    return x + y;
  }
  subtract(x: number, y: number): number {
    this.validate(x, y);
    return x - y;
  }
  multiplication(x: number, y: number): number {
    this.validate(x, y);
    return x * y;
  }
  division(x : number, y : number) : number {
    this.validate(x, y);
    return x / y
  }
}

let calc = new calculator();
let calc_array : number[] = [
    calc.sum(56, 99),
    calc.subtract(78, 90),
    calc.multiplication(20, 40),
    calc.division(33, 55),
]

calc_array.forEach(method => {
    console.log(method)
})
