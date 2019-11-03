// Use Generic for use more 2 function's type.
// Thus T, we can use String type and Number
function identity<T>(arg: T): T {
    return arg;
}

let output = identity("Artyrie");
let output2 = identity(35);
let output3 = identity<string>("Art");

console.log(output);
console.log(output2);
console.log(output3);