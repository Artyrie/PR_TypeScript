// class has Capital first alphabet
class Greeter {
    greeting: string;

    // constructor execute when class called
    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("World!");
console.log(greeter.greet());
console.log(greeter.greeting);