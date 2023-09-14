class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2023 - this.birthYear);
    }
}

const jonas = new Person('Jonas', 1990);
jonas.calcAge();
console.log(jonas.__proto__ === Person.prototype, Person.prototype.isPrototypeOf(jonas));
// Expect: true true
console.log(Person.prototype.hasOwnProperty('calcAge'))
// Expect: true --> if declared outside of constructor --> added to Person.prototype / prototype property of Person class