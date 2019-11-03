var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hi! I'm " + name);
    };
    return Person;
}());
var person = new Person('Artyrie');
person.greet();
