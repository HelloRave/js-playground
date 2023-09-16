class Person {
    publicField = '';
    #field = ''; // Private field syntax for JS

    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this._birthYear = birthYear; // if prefixed with _, by convention means protected
    }

    calcAge() {
        console.log(2023 - this._birthYear);
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

    #privateMethod() {
        return console.log('Cannot be logged');
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

// Class inheritance
class Student extends Person {
    constructor(firstName, birthYear, course) {
        super(firstName, birthYear);
        this.course = course;
    }

    calcAge() {
        console.log('Method overwritten');
    }
}

const mike = new Student('Mike', 2018, 'Computer Science');
mike.calcAge(); // Expect: Method overwritten
console.log(mike.firstName); // Expect: Mike