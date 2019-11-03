// lastName? <- optional parameter.
// Exits or none. all possible.

// function buildName(fistName: string, lastName="Artyrie"): string {
// Defining parameter's default value to lastName="Artyrie" 
function buildName(firstName: string, lastName?: string): string {
    return firstName + " " + lastName;
}

// ...parameter: string << doesn't # of limit arguments 
function buildNames(firstName: String, ...restOfName: string[]): string {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);

    return firstName + " " + restOfName.join(" ");
}

let result1 = buildName("Bob");
let result2 = buildName("Bob", "Adams");
console.log(result1);

let employeeName = buildNames("Joseph", "Samuel", "Lucas");
console.log(employeeName);