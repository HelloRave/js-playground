const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
// Declaring `new` operator:
// 1. create an empty object {}
// 2. `this` keyword in constructor function cll is set to new object
// 3. new object linked (__proto__ property) to constructor function's prototype property
// 4. new object returned from the constructor function call
console.log(jonas, jonas.firstName, jonas instanceof Person); // Expect: Person { firstName: 'Jonas', birthYear: 1991 } Jonas true

console.log(Person.prototype); // Expect: {} - Functions have prototype property, which by default, stores a reference to an empty object
Person.prototype.calcAge = function() {
    console.log(2023 - this.birthYear);
}
console.log(jonas.__proto__ === Person.prototype, Person.prototype.isPrototypeOf(jonas));
// Expect: true true
console.log(Person.prototype.__proto__ === Object.prototype);
// Expect: true
// Prototype of jonas object is prototype property of constructor function;
// i.e. prototype of all objects that are created with Person constructor function
// Prototype chain: series of linked between objects, linked through prototypes

jonas.calcAge(); // Expect: 32; Prototypical Inheritance

console.log(jonas.hasOwnProperty('firstName'), jonas.hasOwnProperty('calcAge'));
// Expect: true false
// Object has the specified property as its own property (as opposed to inheriting it)
// hasOwnProperty is under Object.prototype