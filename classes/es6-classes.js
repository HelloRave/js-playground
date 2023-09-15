class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2023 - this.birthYear);
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(name) {
        this._firstName = name; // Naming convention to avoid maximum call stack error; creates a new _firstName variable, require a getter to get _fullName property
    }

    static hey() {
        console.log('Hey there!');
    }
}

const jonas = new Person('Jonas', 1990);
jonas.calcAge(); // Expect: 33

console.log(jonas.__proto__ === Person.prototype, Person.prototype.isPrototypeOf(jonas));
// Expect: true true

console.log(Person.prototype.hasOwnProperty('calcAge'))
// Expect: true --> if declared outside of constructor --> added to Person.prototype / prototype property of Person class

// Getters and Setters
console.log(jonas.firstName); // Expect: Jonas
jonas.firstName = 'Jo';
console.log(jonas.firstName); // Expect: Jo

// Static method (vs Instance method)
Person.hey(); // Expect: Hey there!