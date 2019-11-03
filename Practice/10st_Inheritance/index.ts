class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }

    // define default of parameter : 0
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

let dog1 = new Animal("Mong");
console.log(dog1.move());
console.log("1st end");

// Dog inherit Animal
class Dog extends Animal {
    constructor(name: string) {
        // what is super?
        // call parents constructor
        super(name);
    }
    // define parameter with value
    // same to super move. default value : 5
    // Inherited priority is more high than parent
    move(distanceInMeters = 5) {
        console.log("Meong...");
        // Difference of super
        super.move(distanceInMeters);
    }
}

let dog2 = new Dog("Navi");
console.log(dog2.name);
console.log(dog2.move());
console.log("2nd end");
console.log(dog2.name);
console.log(dog2.move(10));
console.log("3rd end");