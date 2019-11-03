// Use cmd not terminal in VSCode;
class Person {
    constructor(private name: string) {}

    greet() {
        console.log(`Hi! I'm ${name}`);
    }
}

const person = new Person('Artyrie');
person.greet();