// function add(x: any, y: any) {
// any type is used by all type.
// but it destoryed typescript's goodness.

// Named function
// add(~): number << number is function's type.
// => Function's type is return value's type.
function add(x: number, y: number): number {
    return x * y;
}

// Anonymous function
// => doens't have name.
let myAdd = function(x: number, y: number) {
    return x + y;
};
console.log(myAdd(2, 3));