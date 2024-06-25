"use strict";
// exercise 4 : classes
class Person {
    constructor(name, age, socialSecurityNumber) {
        this.personName = () => {
            return this.name;
        };
        this.personAge = () => {
            return this.age;
        };
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }
}
let person = new Person('frankie', 19, '2343-555');
console.log(person.personName());
console.log(person.personAge());
