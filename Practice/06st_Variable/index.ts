// Type Script variable is let not Var!!!
let fullName: string = 'Artyrie';
let age: number = 23;

// single quote ''
// double quote ""
// back quote ``
// Why use back quote?
// It works well even it has special string like '
// and It can call variable that can calculate in ``
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`;

console.log(sentence);