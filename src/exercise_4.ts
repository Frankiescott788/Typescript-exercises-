// exercise 4 : classes

class Person {
    name : string;
    age : number;
    private socialSecurityNumber : string;
    constructor(name : string, age : number, socialSecurityNumber : string) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber
    }
    personName = () : string => {
        return this.name
    }
    personAge = () : number => {
        return this.age
    }
}

let person = new Person('frankie', 19, '2343-555');
console.log(person.personName());
console.log(person.personAge());