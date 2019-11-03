class Animals {
    // protected name: string => Only use in class and Inhertied class
    protected name: string;
    // private name: string => Only use in class
    // If you want to get private value, make function in class
    // Why use? making a limitation that helps not to twist code.
    // public name: string => use everywhere that object animal defined
    age: number = 10;
    constructor(theName: string) {
        this.name = theName;
    }
    animalCall() {
        this.name = "hi";
    }
}

let animal = new Animals("Goat");

class Rhino extends Animals {
    constructor() {
        super("Rhino");
        // If private name: string => can't call this.
        console.log(this.name);
    }
}

let rhino = new Rhino();

class Persons {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Persons {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPtich() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPtich());